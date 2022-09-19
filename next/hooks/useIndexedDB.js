import create from "zustand";

export const useIndexedDB = create((set) => ({
  db: null,
  setDb: (item) => set({ db: item }),
}));
