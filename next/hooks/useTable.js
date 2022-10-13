import create from "zustand";

export const useTable = create((set, get) => ({
  dataTable: [],
  page: 1,
  setDataTable: (item) => set({ dataTable: [...get().dataTable, ...item] }),
  deleteDataTable: () => set({ dataTable: [] }),
  setPage: (value) => set({ page: value }),
  setPagePrev: () => set({ page: get().page + 1 }),
}));
