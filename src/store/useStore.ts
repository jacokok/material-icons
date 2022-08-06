import create from "zustand";
import { devtools } from "zustand/middleware";

interface IconState {
  group: string;
  setGroup: (group: string) => void;
  search: string;
  setSearch: (search: string) => void;
}

export const useIconStore = create<IconState>()(
  devtools(
    (set) => ({
      group: "Filled",
      setGroup: (group) => set(() => ({ group: group })),
      search: "",
      setSearch: (search) => set(() => ({ search: search })),
    }),
    { name: "Dialog" }
  )
);
