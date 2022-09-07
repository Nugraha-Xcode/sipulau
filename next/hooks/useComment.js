import create from "zustand";

export const useComment = create((set) => ({
  type: null,
  coor: {},
  selectedId: null,
  setType: (item) => set({ type: item }),
  setCoor: (item) => set({ coor: item }),
  setSelectedId: (item) => set({ selectedId: item }),
}));
