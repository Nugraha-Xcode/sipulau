import React from "react";
import { useNav } from "../../hooks/index";

const MapSideDrawer = () => {
  const activeSideFeature = useNav((state) => state.activeSideFeature);

  return <>{activeSideFeature && activeSideFeature.content}</>;
};

export default MapSideDrawer;
