import React, { useContext, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { BiLock } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

import { changeExpireTime } from "../utils/expireTime";
import AppContext from "../context/AppContext";

const login = {
  en: {
    modalTitle: "Sign In",
    modalCase1: "Login to Your Account",
    modalCase2: "Please Login to Your Account to Access More Complete Features",
    placeholder1: "Username",
    placeholder2: "Password",
    buttonLogin: "Login",
    or1: "Or",
    buttonRegist: "Sign Up",
  },
  id: {
    modalTitle: "Masuk",
    modalCase1: "Masuk ke Akun Anda",
    modalCase2:
      "Silahkan Masuk ke Akun Anda Untuk Mengakses Fitur yang Lebih Lengkap",
    placeholder1: "Nama Pengguna Anda",
    placeholder2: "Kata Sandi",
    buttonLogin: "Masuk",
    or1: "Atau",
    buttonRegist: "Daftar",
  },
};

const Login = ({ toggle }) => {
  const { t, handleSetSnack, setAuth } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const userRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!passwordRef.current.value.length) {
        throw new Error("Password wajib diisi");
      }
      setIsLoading(true);
      let body = {
        username: userRef.current.value,
        password: passwordRef.current.value,
      };
      const res = await fetch(
        process.env.NEXT_PUBLIC_DIRECTUS_URL + "/inageoportal-login",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          method: "POST",
          credentials: "include",
          body: JSON.stringify(body),
        }
      );
      const resJson = await res.json();
      if (res.status === 200 && resJson.accessToken && resJson.expires) {
        setAuth(resJson.accessToken);
        changeExpireTime(resJson.expires);
        toggle();
      } else if (res.status >= 400 && res.status <= 499) {
        throw new Error(resJson.errors[0].message);
      } else {
        throw new Error("Internal server error");
      }
    } catch (err) {
      handleSetSnack(err.message, "error");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='font-map'>
      <div className='flex justify-between items-center px-6 py-3 relative'>
        <p className='flex-1 text-center ml-5 text-black-2 text-xs font-semibold'>
          {login[t].modalTitle}
        </p>
        <button onClick={toggle}>
          <CgClose className='text-main-gray w-5 h-5' />
        </button>
      </div>
      <hr />

      <div className='px-6 pb-8 pt-4 flex flex-col items-center gap-6'>
        <img src='/images/ic-lock.svg' alt='form login' />
        <div className='flex flex-col items-center text-center max-w-[60%] gap-1'>
          <p className='text-black-2 text-sm'>{login[t].modalCase1}</p>
          <p className='text-xs text-main-gray'>{login[t].modalCase2}</p>
        </div>
        <div className='flex flex-col w-full gap-4'>
          <div className='flex items-center border border-gray-4 rounded-lg py-3 px-5'>
            <FaRegUser className='text-main-gray w-4 h-4' />
            <input
              ref={userRef}
              className='flex-1 mx-2 focus:outline-none placeholder-gray-300 text-sm'
              placeholder={login[t].placeholder1}
            />
          </div>
          <div className='flex items-center border border-gray-4 rounded-lg py-3 px-5'>
            <BiLock className='text-main-gray w-5 h-5' />
            <input
              ref={passwordRef}
              className='flex-1 mx-2 focus:outline-none placeholder-gray-300 text-sm'
              placeholder={login[t].placeholder2}
              type='password'
            />
            <AiOutlineEye className='text-main-gray w-5 h-5' />
          </div>
        </div>
        <div className='flex flex-col w-full gap-4'>
          {!isLoading ? (
            <button
              onClick={handleLogin}
              className='bg-main-blue text-white rounded-lg py-2 text-sm'
            >
              {login[t].buttonLogin}
            </button>
          ) : (
            <div className='flex items-center justify-center'>
              <img
                src='images/loader.svg'
                alt='loader'
                className='w-10 h-10 text-center'
              />
            </div>
          )}
          <div className='flex items-center'>
            <hr className='flex-1' />
            <p className='mx-3 text-xs text-black-2'>{login[t].or1}</p>
            <hr className='flex-1' />
          </div>
          <a
            href='https://tanahair.indonesia.go.id/register'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-main-blue text-main-blue rounded-lg py-2 text-sm text-center'
          >
            {/* <button
            href='https://tanahair.indonesia.go.id/register'
            target='_blank'
            rel='noopener noreferrer'
            className='flex space-x-2 bg-main-blue rounded-full text-white text-sm py-3 px-4'
            alt='registrasi'
          > */}
            {login[t].buttonRegist}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
