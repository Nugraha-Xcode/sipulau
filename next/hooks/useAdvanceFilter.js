import create from "zustand";

export const useAdvanceFilter = create((set) => ({
  filterItem: {},
  setFilterItem: (item) => set({ filterItem: item }),
}));
