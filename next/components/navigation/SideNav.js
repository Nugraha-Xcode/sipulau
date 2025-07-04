import React from "react";
import shallow from "zustand/shallow";
import { useNav } from "../../hooks/useNav";
import Drawer from "../core/Drawer";
import MapSideDrawer from "../map/MapSideDrawer";
import NavMenu from "./NavMenu";

const SideNav = ({ handleViewTable, toggleMapFilter }) => {
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
          drawerWidth='w-[4rem] min-w-[4rem]'
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
            toggleMapFilter={toggleMapFilter}
          />
        </Drawer>
        <Drawer
          isOpen={Boolean(activeSideFeature)}
          drawerWidth='w-[18rem] min-w-[18rem]'
          zindex='z-40'
        >
          <MapSideDrawer />
        </Drawer>
      </div>
    </div>
  );
};

export default SideNav;
