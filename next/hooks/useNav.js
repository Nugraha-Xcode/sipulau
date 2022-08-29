import create from "zustand";

export const useNav = create((set) => ({
  expandSideNav: true,
  setExpandSideNav: (item) => set({ expandSideNav: item }),
  isOpenSideNav: true,
  setOpenSideNav: (item) => set({ isOpenSideNav: item }),
  activeMenu: "2dIpsDashboard",
  activeSideFeature: null,
  activeCardFeature: null,
  setActiveSideFeature: (item) => set({ activeSideFeature: item }),
  setActiveCardFeature: (item) => set({ activeCardFeature: item }),
  handleNavMenu: (item) => set({ activeMenu: item }),
  clearNav: () => set({ activeSideFeature: null, activeCardFeature: null }),
}));
