import React from "react";
import shallow from "zustand/shallow";
import { useNav } from "../../hooks/useNav";
import Drawer from "../core/Drawer";
import MapSideDrawer from "../map/MapSideDrawer";
import NavMenu from "./NavMenu";

const SideNav = ({ handleViewTable }) => {
  const [
    activeSideFeature,
    setActiveSideFeature,
    expandSideNav,
    setExpandSideNav,
    isOpenSideNav,
  ] = useNav(
    (state) => [
      state.activeSideFeature,
      state.setActiveSideFeature,
      state.expandSideNav,
      state.setExpandSideNav,
      state.isOpenSideNav,
    ],
    shallow
  );
  const handleOpenSideFeature = (item) => {
    setExpandSideNav(false);
    if (
      activeSideFeature !== null &&
      activeSideFeature.featureId === item.featureId
    ) {
      setActiveSideFeature(null);
    } else {
      setActiveSideFeature(item);
    }
  };

  return (
    <div className='absolute top-0 left-0'>
      <div className='flex'>
        <Drawer
          isOpen={isOpenSideNav}
          //   isOpen={true}
          variant='mini'
          //   expand={true}
          expand={expandSideNav}
          drawerWidth='w-[5rem] min-w-[5rem]'
          zindex='z-50'
        >
          <NavMenu
            expand={expandSideNav}
            setExpand={() => {
              setExpandSideNav(!expandSideNav);
            }}
            disableExpand={Boolean(activeSideFeature)}
            handleOpenSideFeature={handleOpenSideFeature}
            handleViewTable={handleViewTable}
            activeSideFeature={activeSideFeature}
          />
        </Drawer>
        <Drawer
          isOpen={Boolean(activeSideFeature)}
          drawerWidth='w-[19rem] min-w-[19rem]'
          zindex='z-40'
        >
          <MapSideDrawer />
        </Drawer>
      </div>
    </div>
  );
};

export default SideNav;
