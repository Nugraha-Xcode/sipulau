import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
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
import SideComment from "../map/comment/SideComment";
import LayerManagement from "../map/layerManagement/LayerManagement";
// import SideLayerTable from "../map/SideLayerTable";
import NetworkNode from "../map/networkNode/NetworkNode";
import SideUpload from "../map/uploadLayer/SideUpload";
import Download from "../map/download/Download";
import SearchIsland from "../map/searchIsland/SearchIsland";

import NavItem from "./NavItem";
import Tippy from "@tippyjs/react";
import MemoIcQuestion from "../core/icons/IcQuestion";
import Link from "next/link";
import MemoIcGlobe from "../core/icons/IcGlobe";
import Summary from "../map/resume/Resume";
import Resume from "../map/resume/Resume";

const NavMenu = ({
  expand,
  setExpand,
  disableExpand,
  handleOpenSideFeature,
  activeSideFeature,
  handleViewTable,
}) => {
  const router = useRouter();
  const { t } = useTranslation("attributetable");
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
          content: <SearchIsland />,
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
          content: <Download />,
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
    {
      id: "resume-island",
      label: "Resume",
      icon: <MemoIcUpload />,
      onClick: () =>
        handleOpenSideFeature({
          featureId: "resume-island",
          label: "Resume Pulau",
          content: <Resume />,
        }),
    },
  ];

  return (
    <div className='flex h-full flex-col'>
      <div className='flex-1 mt-20'>
        <div
          className={clsx([
            "ml-2 flex flex-col gap-3",
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
          "ml-2 mb-6 mt-10 flex flex-col gap-1",
          { "w-[13.250rem]": expand, "w-[2.75rem]": !expand },
        ])}
      >
        <Tippy
          content='Lang'
          disabled={expand ? true : false}
          placement='right'
          delay={300}
        >
          <div
            className={clsx([
              "group hover:text-main-blue text-gray-500 flex h-10 w-full items-center rounded-xl hover:cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-50",
              {
                "mr-6": expand,
              },
            ])}
          >
            <Link
              href={router.asPath}
              locale={router.locale === "id" ? "en" : "id"}
            >
              <a
                data-cy='btn-change-lang'
                className='flex items-center hover:text-main-blue'
              >
                <div
                  className={clsx([
                    "flex w-[2.75rem] items-center justify-center",
                  ])}
                >
                  <MemoIcGlobe />
                </div>
                <p
                  className={clsx([
                    "ml-1 select-none text-sm",
                    {
                      "hidden opacity-0": !expand,
                    },
                  ])}
                >
                  {router.locale === "id" ? "EN" : "ID"}
                </p>
              </a>
            </Link>
          </div>
        </Tippy>
        <NavItem
          expand={expand}
          label='Help Center'
          onClick={() => {
            window.open(`/files/${t("userGuide")}.pdf`);
          }}
          icon={<MemoIcQuestion />}
        />
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
