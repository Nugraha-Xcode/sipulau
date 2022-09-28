import create from "zustand";

export const useDownloadAoi = create((set) => ({
  drawItem: [],
  drawSelected: [],
  selectedLayer: null,
  setDrawItem: (item) => set({ drawItem: item }),
  setDrawSelected: (item) => set({ drawSelected: item }),
  selectLayer: (item) => set({ selectedLayer: item }),
}));
