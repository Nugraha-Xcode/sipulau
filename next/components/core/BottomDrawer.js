import React from "react";
import clsx from "clsx";

const BottomDrawer = ({
  children,
  isOpen,
  isOpenNav,
  isExpandNav,
  isExpandBottomDrawer,
  isActiveSideFeature,
}) => {
  return (
    <div
      className={clsx([
        "w-full overflow-hidden bg-white pl-64 transition-all duration-100 ease-in-out dark:bg-gray-800",
        {
          "h-[425px]": isOpen && !isExpandBottomDrawer,
          "h-[700px]": isOpen && isExpandBottomDrawer,
          "h-0": !isOpen,
          "pl-96": isActiveSideFeature && isOpenNav,
          "pl-[25rem]": isActiveSideFeature && !isOpenNav,
          "pl-64": !isActiveSideFeature && isOpenNav && isExpandNav,
          "pl-20": !isActiveSideFeature && isOpenNav && !isExpandNav,
          "pl-1": !isActiveSideFeature && !isOpenNav,
        },
      ])}
    >
      {children}
    </div>
  );
};

export default BottomDrawer;

// import React, { useCallback, useEffect, useState } from "react";
// import { useDelayUnmount } from "../../utils/useDelayUnmount";

// const BottomDrawer = ({ children, title, isShowing, toggle }) => {
//   const [mount, setMount] = useState(false);
//   useEffect(() => {
//     isShowing && setTimeout(() => setMount(true), 100);
//     return () => {
//       setMount(false);
//     };
//   }, [isShowing]);
//   const shouldRender = useDelayUnmount(isShowing, 500);

//   return shouldRender ? (
//     <div
//       className={`w-full fixed bottom-0 z-50 rounded-t-2xl  bg-white ${
//         mount ? "translate-y-0" : "translate-y-full"
//       } transition-all duration-200 ease-in-out`}
//     >
//       <div className='py-4 px-3 flex justify-between'>
//         <p className='text-xs font-semibold text-black-2 tracking-wider'>
//           {title}
//         </p>
//         <button onClick={toggle}>
//           <img src='/images/ic-close.svg' alt='close button' className='' />
//         </button>
//       </div>
//       <hr className='border border-gray-4 opacity-40' />
//       <div className='overflow-scroll max-h-[65vh] p-5'>{children}</div>
//     </div>
//   ) : null;
// };

// export default BottomDrawer;
