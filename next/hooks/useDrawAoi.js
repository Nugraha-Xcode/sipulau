import create from "zustand";

export const useDrawAoi = create((set) => ({
  type: "",
  setType: (value) => set({ type: value }),
  isDrawAoi: false,
  setIsDrawAoi: (item) => set({ isDrawAoi: item }),
  aoiPoly: null,
  setAoiPoly: (item) => set({ aoiPoly: item }),
}));
