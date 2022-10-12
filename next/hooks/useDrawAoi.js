import create from "zustand";

export const useDrawAoi = create((set) => ({
  isDrawAoi: false,
  setIsDrawAoi: (item) => set({ isDrawAoi: item }),
  aoiPoly: null,
  setAoiPoly: (item) => set({ aoiPoly: item }),
}));
