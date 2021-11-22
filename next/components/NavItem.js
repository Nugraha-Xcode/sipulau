import Link from "next/link";
import { useRouter } from "next/router";
import { CgClose } from "react-icons/cg";
import { BiLock } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import Modal from "./modal";
import { navItems } from "../utils/constant";
import useToggle from "../utils/useToggle";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const NavItem = () => {
  const { t } = useContext(AppContext);
  const router = useRouter();
  const [isShowing, toggle] = useToggle();

  return (
    <>
      <nav className='flex flex-col md:flex-row items-center gap-8'>
        {navItems[t].map((el, index) => (
          <Link href={el.path} key={index}>
            <a
              className={`hover:text-hover-blue ${
                el.path === "/"
                  ? router.pathname === "/"
                    ? "text-hover-blue font-bold"
                    : "text-main-blue"
                  : router.pathname.includes(el.path)
                  ? "text-hover-blue font-bold"
                  : "text-main-blue"
              }`}
            >
              {el.title}
            </a>
          </Link>
        ))}
        <button onClick={toggle} className='text-main-blue'>
          Masuk
        </button>
      </nav>
      <button
        className='flex space-x-2 bg-main-blue rounded-full text-white text-sm py-3 px-4'
        alt='registrasi'
      >
        <p>Registrasi</p>
      </button>
      <div className='flex text-main-blue space-x-2'>
        <Link
          href={router.asPath}
          locale={router.locale === "id" ? "en" : "id"}
        >
          <a data-cy='btn-toggle-lang'>
            <img src='/images/nav-icon.svg' alt='Navigation Bar Icon' />
          </a>
        </Link>
        <p>{router.locale === "id" ? "ID" : "EN"}</p>
      </div>
      <Modal isShowing={isShowing} handleModal={toggle} size='md'>
        <div className=''>
          <div className='flex justify-between items-center px-6 py-3 relative'>
            <p className='flex-1 text-center ml-5'>Masuk</p>
            <button onClick={toggle}>
              <CgClose className='text-main-gray w-5 h-5' />
            </button>
          </div>
          <hr />

          <div className='px-6 pb-8 pt-4 flex flex-col items-center gap-6'>
            <img src='/images/ic-lock.svg' alt='form login' />
            <div className='flex flex-col items-center text-center max-w-[60%] gap-1'>
              <p>Masuk ke Akun Anda</p>
              <p className='text-xs'>
                Silahkan masuk ke akun Anda untuk mengakses fitur yang lebih
                lengkap
              </p>
            </div>
            <div className='flex flex-col w-full gap-4'>
              <div className='flex items-center border border-gray-4 rounded-lg py-3 px-5'>
                <FaRegUser className='text-main-gray w-4 h-4' />
                <input className='flex-1 mx-2 focus:outline-none' />
              </div>
              <div className='flex items-center border border-gray-4 rounded-lg py-3 px-5'>
                <BiLock className='text-main-gray w-5 h-5' />
                <input className='flex-1 mx-2 focus:outline-none' />
                <AiOutlineEye className='text-main-gray w-5 h-5' />
              </div>
            </div>
            <div className='flex flex-col w-full gap-4'>
              <button className='bg-main-blue text-white rounded-lg py-2'>
                Masuk
              </button>
              <div className='flex items-center'>
                <hr className='flex-1' />
                <p className='mx-3 text-xs'>Atau</p>
                <hr className='flex-1' />
              </div>
              <button className='border border-main-blue text-main-blue rounded-lg py-2'>
                Daftar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default NavItem;
