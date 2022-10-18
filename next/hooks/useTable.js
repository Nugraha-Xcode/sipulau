import create from "zustand";

export const useTable = create((set, get) => ({
  isLoadData: false,
  dataTable: [],
  page: 1,
  isSelectAll: false,
  selectedRow: [],
  filterId: [],
  setLoadData: (value) => set({ isLoadData: value }),
  setDataTable: (item) => set({ dataTable: [...get().dataTable, ...item] }),
  deleteDataTable: () => set({ dataTable: [] }),
  setPage: (value) => set({ page: value }),
  setPagePrev: () => set({ page: get().page + 1 }),
  setIsSelectAll: () => set({ isSelectAll: !get().isSelectAll }),
  setSelectedRow: (value) => set({ selectedRow: value }),
  setSelectedRowPrev: (value) =>
    set({ selectedRow: [...get().selectedRow, ...value] }),
  clearSelectedRow: () => set({ selectedRow: [] }),
  removeSelectedRow: (selectedId) => {
    let arr = [...get().selectedRow];
    arr.splice(
      get().selectedRow.findIndex((el) => el === selectedId),
      1
    );
    set({ selectedRow: arr });
  },
  setFilterId: (value) => set({ filterId: value }),
}));
