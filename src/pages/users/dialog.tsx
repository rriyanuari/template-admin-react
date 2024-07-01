import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import General from "./forms/general";

function UserDialogForm() {
  return (
    <DialogContent className="sm:max-w-[600px] ">
      <DialogHeader>
        <DialogTitle>Create Employee</DialogTitle>
        <DialogDescription>
          Create new employee. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      {/* Form */}
      <General />
    </DialogContent>
  );
}

export default UserDialogForm;
