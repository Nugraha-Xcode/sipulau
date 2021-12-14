import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavItem from "./NavItem";
import { useDelayUnmount } from "../utils/useDelayUnmount";

const Header = ({ navStyle, sideNav, setSideNav }) => {
  const router = useRouter();

  const [mount, setMount] = useState(false);
  useEffect(() => {
    sideNav && setTimeout(() => setMount(true), 100);
    return () => {
      setMount(false);
    };
  }, [sideNav]);
  const shouldRender = useDelayUnmount(sideNav, 500);

  return (
    <>
      <header
        className={`transform ${
          sideNav ? "translate-x-[-45vw]" : "translate-x-0"
        } fixed w-full bg-white z-50  ${
          navStyle
            ? router.pathname === "/map"
              ? "bg-opacity-100"
              : "bg-opacity-60"
            : "bg-opacity-95"
        } transition duration-500 ease-in-out`}
        data-cy='top-navbar'
      >
        <div
          className={`relative flex justify-center items-center ${
            router.pathname === "/map" ? "py-3" : "py-5 "
          } px-4 md:px-10`}
        >
          <div
            className={`flex justify-between ${
              router.pathname === "/map" ? "" : "max-w-screen-xl"
            } items-center  w-full`}
          >
            <div>
              <img
                src='/images/logo-big-text.svg'
                alt='Badan Informasi Geospasial Logo'
                className={`${
                  router.pathname === "/map" ? "h-10" : "h-10 md:h-12 lg:h-14"
                }`}
              />
            </div>
            <div
              className='hidden md:flex items-center space-x-10'
              data-cy='top-nav'
            >
              <NavItem />
            </div>
            <button
              className={`block md:hidden transform ${
                sideNav ? "rotate-180" : "rotate-0"
              } transition duration-300 ease-in-out`}
              onClick={() => setSideNav((prev) => !prev)}
              data-cy='btn-toggle-sidenav'
            >
              <img src='/images/ic-bar.svg' alt='menu button' />
            </button>
          </div>
        </div>
      </header>
      {shouldRender ? (
        <div
          className={`fixed h-screen w-[45vw] top-0 right-0 transition duration-500 ease-in-out transform ${
            mount ? "translate-x-0" : "translate-x-full"
          } py-6 px-3 space-y-3`}
        >
          <img
            src='/images/logo-big-text.svg'
            alt='Badan Informasi Geospasial Logo'
            className='h-10 md:h-12 lg:h-14'
          />
          <hr />
          <div
            className='flex flex-col md:hidden items-center gap-10'
            data-cy='side-nav'
          >
            <NavItem />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
