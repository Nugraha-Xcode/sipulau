import create from "zustand";

export const useCrs = create((set) => ({
  crs: "EPSG:4326",
  setCrs: (item) => set({ crs: item }),
}));
