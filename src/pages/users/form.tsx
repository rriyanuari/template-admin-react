import { Separator } from "@/components/ui/separator";
import GeneralForm from "./forms/general";

const Form = () => {
  return (
    <>
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Create users</h2>
        <p className="text-muted-foreground">Add new user to your system.</p>
      </div>

      <Separator />
      <div className="mx-auto grid w-full items-start gap-6">
        <div className="grid gap-6">
          <GeneralForm />
        </div>
      </div>
    </>
  );
};

export default Form;
