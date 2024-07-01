import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import List from "./table";
import DialogForm from "./dialog";
import { Dialog } from "@/components/ui/dialog";
import { useAtom, useSetAtom } from "jotai";
import { employeeDialogIsShow, employeeSelected } from "@/stores/employee";

const UserPage = () => {
  const [isShowDialog, setIsShowDialog] = useAtom(employeeDialogIsShow);
  const setSelectedEmployee = useSetAtom(employeeSelected);

  return (
    <section className="container p-4 flex flex-1 flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Employees</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your employee @ this app
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            className="gap-2"
            onClick={() => {
              setIsShowDialog(true);
              setSelectedEmployee(null);
            }}
          >
            <Plus className="w-6 h-6" />
            Add new employee
          </Button>
        </div>
      </div>
      <List />

      <Dialog open={isShowDialog} onOpenChange={setIsShowDialog}>
        <DialogForm />
      </Dialog>
    </section>
  );
};

export default UserPage;
