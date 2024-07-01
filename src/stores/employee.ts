import { getEmployee } from "@/services";
import { Tuser } from "@/types";
import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

export const paramsAtom = atom({
  page: 0,
  size: 10,
  sortField: "name",
  sortOrder: "asc",
});

export const employeeAtom = atomWithQuery((get) => ({
  queryKey: ["employees", get(paramsAtom)],
  queryFn: async () => {
    const params = get(paramsAtom); // Get the current params from paramsAtom
    return await getEmployee(params);
  },
}));

export const employeeDialogIsShow = atom(false);
export const employeeSelected = atom<Tuser | null>(null);
