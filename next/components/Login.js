import React, { useContext, useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { BiLock } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

import { changeExpireTime } from "../utils/expireTime";
import AppContext from "../context/AppContext";
import { useAuth } from "../hooks/useAuth";

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

// Update untuk menggunakan environment variable yang benar
const GRECAPTCHA_SITEKEY = process.env.NEXT_PUBLIC_INA_GEO_RECAPTCHA_SITE_KEY || "6LeH8XwhAAAAALw43tTI0iPcLqx8vrlMvkyRwuB6";

const Login = ({ toggle }) => {
  const { t, handleSetSnack } = useContext(AppContext);
  const setAuth = useAuth((state) => state.setAuth);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  useEffect(() => {
    const scriptElementId = "grecaptcha-script";
    const url = `https://www.google.com/recaptcha/api.js?render=${GRECAPTCHA_SITEKEY}`;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.id = scriptElementId;
    document.body.appendChild(script);

    return () => {
      // remove created script element
      const existingScript = document.getElementById(scriptElementId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      // remove grecaptcha badge
      const grecaptchaElement =
        document.getElementsByClassName("grecaptcha-badge");
      // grecaptcha-badge contained in div. thus we need to remove the parent
      if (grecaptchaElement[0]?.parentNode) {
        document.body.removeChild(grecaptchaElement[0].parentNode);
      }
    };
  }, []);

  const handleLogin = async (captchaToken, objData) => {
    try {
      setIsLoading(true);
      
      // Debug: Log data yang akan dikirim
      console.log("🔍 Frontend Debug - Data yang akan dikirim:", {
        ...objData, 
        captchaToken: captchaToken?.substring(0, 20) + "...",
        mode: "cookie"
      });
      
      const res = await fetch(
        process.env.NEXT_PUBLIC_DIRECTUS_URL + "/inageoportal-login",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          method: "POST",
          body: JSON.stringify({ ...objData, captchaToken, mode: "cookie" }),
        }
      );
      
      console.log("🌐 Response status:", res.status);
      const resJson = await res.json();
      console.log("📦 Response data:", resJson);
      
      if (res.status === 200 && resJson.accessToken && resJson.expires) {
        setAuth(resJson.accessToken);
        changeExpireTime(resJson.expires);
        toggle();
        handleSetSnack("Login berhasil!", "success");
      } else if (res.status >= 400 && res.status <= 499) {
        const errorMessage = resJson.errors && resJson.errors[0] && resJson.errors[0].message 
          ? resJson.errors[0].message 
          : "Login gagal";
        throw new Error(errorMessage);
      } else {
        throw new Error("Internal server error");
      }
    } catch (err) {
      console.error("🔴 Login error:", err);
      handleSetSnack(err.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.target);
      const objData = Object.fromEntries(formData.entries());
      
      // Debug: Log form data
      console.log("📝 Form data entries:", Array.from(formData.entries()));
      console.log("🔍 Parsed object data:", objData);
      
      // Validasi form data
      if (!objData.username || !objData.password) {
        console.log("❌ Validation failed:", {
          username: !!objData.username,
          password: !!objData.password
        });
        throw new Error("Username dan password wajib diisi");
      }
      
      // Pastikan username tidak kosong
      if (objData.username.toString().trim() === "") {
        throw new Error("Username tidak boleh kosong");
      }
      
      console.log("✅ Form validation passed, executing reCAPTCHA...");
      
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(GRECAPTCHA_SITEKEY, {
              action: "submit",
            })
            .then((token) => {
              console.log("🔐 reCAPTCHA token received:", token.substring(0, 20) + "...");
              handleLogin(token, objData);
            })
            .catch((error) => {
              console.error("🔴 reCAPTCHA error:", error);
              handleSetSnack("reCAPTCHA error: " + error.message, "error");
              setIsLoading(false);
            });
        });
      } else {
        throw new Error("reCAPTCHA belum dimuat");
      }
    } catch (error) {
      console.error("🔴 Submit error:", error);
      handleSetSnack(error.message, "error");
      setIsLoading(false);
    }
  };

  const keyShortcut = React.useCallback((e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", keyShortcut);
    return () => {
      document.removeEventListener("keydown", keyShortcut);
    };
  }, [keyShortcut]);

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
      <form onSubmit={handleSubmit}>
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
                data-cy='login-input-username'
                name='username'
                className='flex-1 mx-3 focus:outline-none placeholder-gray-300 text-sm px-3'
                placeholder={login[t].placeholder1}
                required
                autoComplete="username"
                // Debug: tambah onChange handler
                onChange={(e) => {
                  console.log("👤 Username changed:", e.target.value);
                }}
              />
            </div>
            <div className='flex items-center border border-gray-4 rounded-lg py-3 px-5'>
              <BiLock className='text-main-gray w-4 h-4' />
              <input
                data-cy='login-input-password'
                name='password'
                className='flex-1 mx-3 focus:outline-none placeholder-gray-300 text-sm py-0 border-0 focus:ring-0 px-3'
                placeholder={login[t].placeholder2}
                type={passwordVisibility ? "text" : "password"}
                required
                autoComplete="current-password"
                // Debug: tambah onChange handler
                onChange={(e) => {
                  console.log("🔒 Password changed:", e.target.value ? "***" : "empty");
                }}
              />
              <button 
                type="button"
                onClick={() => setPasswordVisibility((prev) => !prev)}
              >
                <img
                  src={`${
                    passwordVisibility
                      ? "images/ic-eye.svg"
                      : "images/ic-eye-crossed.svg"
                  }`}
                  alt='Password Visibility'
                />
              </button>
            </div>
          </div>

          <div className='flex flex-col w-full gap-4'>
            {!isLoading ? (
              <input
                type='submit'
                value={login[t].buttonLogin}
                data-cy='login-submit-button'
                className='bg-main-blue text-white rounded-lg py-2 text-sm cursor-pointer hover:opacity-80'
              />
            ) : (
              <div className='flex items-center justify-center'>
                <img
                  src='images/loader.svg'
                  alt='loader'
                  className='w-10 h-10 text-center'
                />
              </div>
            )}
            <a
              href='https://tanahair.indonesia.go.id/portal-web/daftar'
              target='_blank'
              rel='noopener noreferrer'
              className='border border-main-blue text-main-blue rounded-lg py-2 text-sm text-center flex justify-center items-center gap-3'
            >
              <img src='/images/logo-google.svg' />
              Masuk dengan Google
            </a>
            <div className='flex items-center'>
              <hr className='flex-1' />
              <p className='mx-3 text-xs text-black-2'>{login[t].or1}</p>
              <hr className='flex-1' />
            </div>
            <a
              href='https://tanahair.indonesia.go.id/portal-web/daftar'
              target='_blank'
              rel='noopener noreferrer'
              className='border border-main-blue text-main-blue rounded-lg py-2 text-sm text-center'
            >
              {login[t].buttonRegist}
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;