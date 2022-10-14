import { useTranslation } from "next-i18next";
import React, { useContext } from "react";
import shallow from "zustand/shallow";
import AppContext from "../../context/AppContext";
import { useAuth, useAuthHandler, useNav } from "../../hooks";

const TopNav = () => {
  const { toggleLogin } = useContext(AppContext);
  const { handleLogout } = useAuthHandler();
  const [isOpenSideNav, setOpenSideNav] = useNav(
    (state) => [state.isOpenSideNav, state.setOpenSideNav],
    shallow
  );
  const { t } = useTranslation("footer");
  const authToken = useAuth((state) => state.authToken);
  return (
    <div className='fixed top-0 left-0 z-[60] w-screen h-14 bg-white border border-b-2 flex items-center justify-between p-2'>
      <div className='flex items-center gap-7 ml-[10px]'>
        <button
          onClick={() => {
            setOpenSideNav(!isOpenSideNav);
          }}
        >
          <img src='/images/ic-burger.svg' alt='button' />
        </button>
        <div className='flex items-center gap-3'>
          <img src='/images/big-logo.svg' alt='logo' />
          <p className='text-lg text-[#2A63B5] font-semibold'>
            Sistem Informasi Pulau
          </p>
        </div>
      </div>
      <div className='flex items-center justify-between gap-8 mr-2'>
        {authToken.length ? (
          <button onClick={handleLogout} className='text-main-blue'>
            {t("logout")}
          </button>
        ) : (
          <button onClick={toggleLogin} className='text-main-blue'>
            {t("modalTitle")}
          </button>
        )}
        {authToken.length ? null : (
          <a
            href='https://tanahair.indonesia.go.id/register'
            target='_blank'
            rel='noopener noreferrer'
            className='flex space-x-2 bg-main-blue rounded-full text-white text-sm py-3 px-4'
            alt='registrasi'
          >
            {t("reg")}
          </a>
        )}
      </div>
    </div>
  );
};

export default TopNav;
