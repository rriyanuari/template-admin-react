import DataTable, { TableColumn } from "react-data-table-component";

import { Tuser } from "@/types";
import { useAtom, useSetAtom } from "jotai";
import {
  employeeAtom,
  employeeDialogIsShow,
  employeeSelected,
  paramsAtom,
} from "@/stores/employee";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, Shield, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SkeletonTable } from "@/components/atoms/loader";
import { useEffect } from "react";

const UserList = () => {
  const [{ data, isPending, refetch }] = useAtom(employeeAtom);

  const [isShowDialog, setIsShowDialog] = useAtom(employeeDialogIsShow);
  const setSelectedEmployee = useSetAtom(employeeSelected);
  const [params, setParams] = useAtom(paramsAtom);

  function updateParams(newParams: any) {
    setParams((prevParams) => ({ ...prevParams, ...newParams }));
    console.log(params, newParams);
  }

  useEffect(() => {
    if (!isShowDialog) {
      refetch();
    }
  }, [isShowDialog]);

  const columns: TableColumn<Tuser>[] = [
    {
      name: "Name",
      sortField: "name",
      sortable: true,
      minWidth: "200px",
      grow: 1,
      cell: (row) => row.name,
    },
    {
      name: "Email",
      sortField: "email",
      sortable: true,
      minWidth: "200px",
      grow: 1,
      cell: (row) => row.email,
    },
    {
      name: "Role",
      sortField: "role",
      sortable: true,
      minWidth: "150px",
      grow: 0,
      cell: (row) => (
        <Badge className="flex gap-2" variant={"outline"}>
          {row.role == "ADMIN" ? <Shield width={16} /> : <User width={16} />}
          {row.role}
        </Badge>
      ),
    },
    {
      name: "Status",
      sortField: "active",
      sortable: true,
      grow: 0,
      cell: (row) => (
        <Badge variant={row.active ? "destructive" : "default"}>
          {row.active ? "blocked" : "active"}
        </Badge>
      ),
    },
    {
      name: "",
      button: true,
      grow: 0,
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
            onChangePage={(page) => updateParams({ page: page - 1 })}
            onSort={(col, order) => {
              updateParams({ sortField: col.sortField, sortOrder: order });
            }}
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
