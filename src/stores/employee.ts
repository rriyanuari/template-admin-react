import { getEmployee } from "@/services";
import { Tuser } from "@/types";
import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

export const employeeAtom = atomWithQuery(() => ({
  queryKey: ["employees"],
  queryFn: getEmployee,
}));

export const employeeDialogIsShow = atom(false);
export const employeeSelected = atom<Tuser | null>(null);
