import create from "zustand";

export const useBbox = create((set) => ({
  bbox: null,
  setBbox: (item) => set({ bbox: item }),
}));
