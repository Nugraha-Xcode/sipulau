import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import MemoIcBasemap from "../core/icons/IcBasemap";
import MemoIcComment from "../core/icons/IcComment";
import MemoIcDownload from "../core/icons/IcDownload";
import MemoIcHome from "../core/icons/IcHome";
import MemoIcLayer from "../core/icons/IcLayer";
import MemoIcLayerTable from "../core/icons/IcLayerTable";
import MemoIcMinimize from "../core/icons/IcMinimize";
import MemoIcNetwork from "../core/icons/IcNetwork";
import MemoIcSearch from "../core/icons/IcSearch";
import MemoIcUpload from "../core/icons/IcUpload";
import SideComment from "../map/SideComment";
import SideDownload from "../map/SideDownload";
import LayerManagement from "../map/layerManagement/LayerManagement";
// import SideLayerTable from "../map/SideLayerTable";
import NetworkNode from "../map/networkNode/NetworkNode";
import SideSearchIsland from "../map/SideSearchIsland";
import SideUpload from "../map/SideUpload";

import NavItem from "./NavItem";

const NavMenu = ({
  expand,
  setExpand,
  disableExpand,
  handleOpenSideFeature,
  activeSideFeature,
  handleViewTable,
}) => {
  const router = useRouter();
  const pageMenuItems = [
    {
      id: "home-page",
      path: "/",
      label: "Home Page",
      icon: <MemoIcHome />,
      onClick: () => router.push("/"),
    },
    {
      id: "map-page",
      path: "/map",
      label: "Map Page",
      icon: <MemoIcBasemap />,
      onClick: () => {},
    },
  ];
  const featureMenuItems = [
    {
      id: "layer-management",
      label: "Layer Management",
      icon: <MemoIcLayer />,
      onClick: () =>
        handleOpenSideFeature({
          featureId: "layer-management",
          label: "Layer Management",
          content: <LayerManagement />,
        }),
    },
    {
      id: "layer-table",
      label: "Layer Table",
      icon: <MemoIcLayerTable />,
      onClick: () => handleViewTable(),
    },
    {
      id: "search-island",
      label: "Search Island",
      icon: <MemoIcSearch />,
      onClick: () =>
        handleOpenSideFeature({
          featureId: "search-island",
          label: "Search Island",
          content: <SideSearchIsland />,
        }),
    },
    {
      id: "download",
      label: "Download",
      icon: <MemoIcDownload />,
      onClick: () =>
        handleOpenSideFeature({
          featureId: "download",
          label: "Download",
          content: <SideDownload />,
        }),
    },
    {
      id: "comments",
      label: "Comments",
      icon: <MemoIcComment />,
      onClick: () =>
        handleOpenSideFeature({
          featureId: "comments",
          label: "Comments",
          content: <SideComment />,
        }),
    },
    {
      id: "network-node",
      label: "Network Node",
      icon: <MemoIcNetwork />,
      onClick: () =>
        handleOpenSideFeature({
          featureId: "network-node",
          label: "Network Node",
          content: <NetworkNode />,
        }),
    },
    {
      id: "upload-data",
      label: "Upload Data",
      icon: <MemoIcUpload />,
      onClick: () =>
        handleOpenSideFeature({
          featureId: "upload-data",
          label: "Upload Data",
          content: <SideUpload />,
        }),
    },
  ];

  return (
    <div className='flex h-full flex-col'>
      <div className='flex-1'>
        <div className='p-6'>
          <div className='flex h-12 items-center justify-center px-2'>
            <img
              src={"/images/logo-big-text.svg"}
              alt='BIG Logo'
              className='max-h-12'
            />
          </div>
        </div>
        <div
          className={clsx([
            "ml-4 flex flex-col gap-3",
            { "w-[13.250rem]": expand, "w-[2.75rem]": !expand },
          ])}
        >
          {pageMenuItems.map((el) => (
            <NavItem
              key={el.label}
              expand={expand}
              // disabled={disableExpand}
              label={el.label}
              onClick={el.onClick}
              icon={el.icon}
              isActive={router.pathname === el.path}
            />
          ))}
          <div className='flex h-[1.375rem] items-center px-3'>
            {expand ? (
              <p className='whitespace-nowrap text-sm text-gray-400'>
                Geo-Map Management
              </p>
            ) : (
              <hr className='text-black-500 w-full' />
            )}
          </div>
          {featureMenuItems.map((el) => (
            <NavItem
              key={el.label}
              expand={expand}
              // disabled={disableExpand}
              label={el.label}
              onClick={el.onClick}
              icon={el.icon}
              // conditioning its active state
              isActive={activeSideFeature?.featureId === el.id}
            />
          ))}
        </div>
      </div>

      <div
        className={clsx([
          "ml-4 mb-6 mt-10 flex flex-col gap-1",
          { "w-[13.250rem]": expand, "w-[2.75rem]": !expand },
        ])}
      >
        <NavItem
          expand={expand}
          disabled={disableExpand}
          label='Minimize'
          onClick={setExpand}
          icon={<MemoIcMinimize />}
        />
      </div>
    </div>
  );
};

export default NavMenu;
