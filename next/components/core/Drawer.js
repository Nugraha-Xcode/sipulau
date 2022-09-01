import React from "react";

const Drawer = ({
  children,
  isOpen = true,
  variant = "full",
  expand = false,
  drawerWidth,
  zindex,
}) => {
  return (
    <div
      className={`${
        !isOpen
          ? "w-0"
          : variant === "mini"
          ? expand
            ? "w-[14.25rem]"
            : drawerWidth
          : drawerWidth
      } h-screen transition-all duration-100 ${zindex}`}
    >
      <div
        className={`hide-scrollbar h-screen max-h-screen w-full transform overflow-hidden bg-white ${
          isOpen ? "" : "-translate-x-full"
        } transition-all duration-100 dark:bg-gray-900`}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;
