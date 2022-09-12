import create from "zustand";

export const useAuth = create((set) => ({
  authToken: "",
  setAuth: (item) => set({ authToken: item }),
}));
