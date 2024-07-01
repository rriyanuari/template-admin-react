import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { PasswordInput } from "@/components/atoms/passwordInput";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { postEmployee, putEmployee } from "@/services";
import { useAtomValue, useSetAtom } from "jotai";
import { employeeDialogIsShow, employeeSelected } from "@/stores/employee";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[.#?!@$%^&*-]).{2,}$/
);

const userFormSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Please input a valid email."),
  password: z.string().optional(),
  // .min(6, {
  //   message: "Password must be at least 6 characters.",
  // })
  // .regex(passwordValidation, {
  //   message:
  //     "Password at least one uppercase letter, one lowercase letter, one number and one special character",
  // }),
  role: z.string(),
  active: z.boolean().optional(),
});

type UserFormValues = z.infer<typeof userFormSchema>;

const General = () => {
  const [isLoading, setIsLoading] = useState(false);
  const selectedEmployee = useAtomValue(employeeSelected);
  const setIsShowDialog = useSetAtom(employeeDialogIsShow);

  const form = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    mode: "onSubmit",
  });

  async function onSubmit(data: UserFormValues) {
    try {
      setIsLoading(true);

      let response;
      if (selectedEmployee) {
        response = await putEmployee(selectedEmployee.uid, data);
      } else {
        response = await postEmployee(data);
      }

      toast({
        title: response.message,
      });
      setIsShowDialog(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "error:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(error, null, 2)}</code>
          </pre>
        ),
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (selectedEmployee) {
      form.reset(selectedEmployee);
    }
  }, [selectedEmployee]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col md:grid grid-cols-2 gap-4 py-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jhon Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="col-span-2">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="USER">USER</SelectItem>
                          <SelectItem value="ADMIN">ADMIN</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="active"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="block"
                    />
                    <Label htmlFor="block">Block</Label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="w-full text-right">
          <Button type="submit" className="w-64" disabled={isLoading}>
            {isLoading ? (
              <div className="flex gap-4">
                <Loader2 className="animate-spin" /> Process
              </div>
            ) : (
              <>Save</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default General;
