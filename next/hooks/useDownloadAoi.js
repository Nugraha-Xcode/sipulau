import create from "zustand";

export const useDownloadAoi = create((set) => ({
  drawItem: [],
  drawSelected: [],
  setDrawItem: (item) => set({ drawItem: item }),
  setDrawSelected: (item) => set({ drawSelected: item }),
}));
