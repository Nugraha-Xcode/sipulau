import Link from "next/link";
import { useRouter } from "next/router";

import Modal from "./modal";
import { navItems } from "../utils/constant";
import useToggle from "../utils/useToggle";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import Login from "./Login";

const login = {
  en: {
    reg: "Signup",
    modalTitle: "Sign In",
    logout: "Log Out",
  },
  id: {
    reg: "Daftar",
    modalTitle: "Masuk",
    logout: "Keluar",
  },
};

const NavItem = () => {
  const { t, toggleLogin, isAuth, handleSetSnack, setAuth } =
    useContext(AppContext);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_DIRECTUS_URL + "/auth/logout",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          method: "POST",
          credentials: "include",
        }
      );
      if (res.status === 200) {
        setAuth("");
      } else if (res.status >= 400 && res.status <= 499) {
        const resJson = await res.json();
        throw new Error(resJson.errors[0].message);
      } else {
        throw new Error("Internal server error");
      }
    } catch (err) {
      handleSetSnack(err.message, "error");
    }
  };

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
        {isAuth ? (
          <button onClick={handleLogout} className='text-main-blue'>
            {login[t].logout}
          </button>
        ) : (
          <button onClick={toggleLogin} className='text-main-blue'>
            {login[t].modalTitle}
          </button>
        )}
      </nav>
      <a
        href='https://tanahair.indonesia.go.id/register'
        target='_blank'
        rel='noopener noreferrer'
        className='flex space-x-2 bg-main-blue rounded-full text-white text-sm py-3 px-4'
        alt='registrasi'
      >
        {login[t].reg}
      </a>
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
    </>
  );
};

export default NavItem;
