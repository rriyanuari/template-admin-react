import DataTable, { TableColumn } from "react-data-table-component";

import { Tuser } from "@/types";
import { useAtom, useSetAtom } from "jotai";
import {
  employeeAtom,
  employeeDialogIsShow,
  employeeSelected,
} from "@/stores/employee";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Pencil, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SkeletonTable } from "@/components/atoms/loader";

const UserList = () => {
  const [{ data, isPending }] = useAtom(employeeAtom);

  const setIsShowDialog = useSetAtom(employeeDialogIsShow);
  const setSelectedEmployee = useSetAtom(employeeSelected);

  const columns: TableColumn<Tuser>[] = [
    {
      name: "Name",
      sortable: true,
      cell: (row) => row.name,
    },
    {
      name: "Email",
      sortable: true,
      cell: (row) => row.email,
    },
    {
      name: "Role",
      sortable: true,
      cell: (row) => row.role,
    },
    {
      name: "Status",
      sortable: true,
      cell: (row) => (
        <Badge variant={row.active ? "default" : "destructive"}>
          {row.active ? "active" : "blocked"}
        </Badge>
      ),
    },
    {
      name: "",
      button: true,
      cell: (row) => (
        <button
          type="button"
          onClick={() => {
            setIsShowDialog(true);
            setSelectedEmployee(row);
          }}
        >
          <Pencil size={16} />
        </button>
      ),
    },
  ];

  return (
    <>
      {data ? (
        <div className="min-h-[calc(svh-80%)]">
          <DataTable
            columns={columns}
            data={data.data}
            progressPending={isPending}
            progressComponent={<SkeletonTable />}
            pagination
            paginationServer
            paginationTotalRows={data.totalItems}
            className="my-custom-table"
          />
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no users
            </h3>
            <Link to="create">
              <Button className="mt-6 gap-2">
                <Plus className="w-6 h-6" />
                Add new user
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default UserList;
