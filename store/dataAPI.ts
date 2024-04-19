import dataItem from "@/types/type";
import { create } from "zustand";

type dataStore = {
    data: dataItem[] | null;
    setData: (data: dataItem[]) => void;
}

export const useDataStore = create<dataStore>((set:any)=>({
  data: null,
  setData: (data) => set({ data }),
}))
