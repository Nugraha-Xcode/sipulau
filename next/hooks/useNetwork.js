import create from "zustand";

export const useNetwork = create((set) => ({
  organizationList: [],
  selectedOrganization: null,
  category: "",
  simpulList: null,
  totalData: 0,
  page: 1,
  daftarLayanan: [],
  activeLayer: [],
  activeLegend: [],
  setOrganizationList: (item) => set({ organizationList: item }),
  selectOrganization: (item) => set({ selectedOrganization: item }),
  setCategory: (value) => set({ category: value }),
  setSimpulList: (value) => set({ simpulList: value }),
  setTotalData: (value) => set({ totalData: value }),
  setPage: (value) => set({ page: value }),
  setDaftarLayanan: (value) => set({ daftarLayanan: value }),
  setActiveLayer: (value) => set({ activeLayer: value }),
  setActiveLegend: (value) => set({ activeLegend: value }),
}));
