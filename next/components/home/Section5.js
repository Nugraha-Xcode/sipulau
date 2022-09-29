import { useRef, useEffect, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

import HCaptcha from "@hcaptcha/react-hcaptcha";

import AppContext from "../../context/AppContext";

const Section5 = () => {
  const { t } = useTranslation("homepage");
  const { handleSetSnack } = useContext(AppContext);
  const captchaRef = useRef(null);
  const namaRef = useRef(null);
  const emailRef = useRef(null);
  const isiRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleReset = () => {
    namaRef.current.value = "";
    emailRef.current.value = "";
    isiRef.current.value = "";
  };

  const submitForm = async () => {
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify({
          nama: namaRef.current.value,
          email: emailRef.current.value,
          isi: isiRef.current.value,
          captchaToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await res.json();
      if (resData.message) {
        handleSetSnack(resData.message, "success");
        handleReset();
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    } finally {
      captchaRef.current.resetCaptcha();
    }
  };

  useEffect(() => {
    if (captchaToken) {
      submitForm();
    }
  }, [captchaToken]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const inputArr = [
        namaRef.current.value,
        emailRef.current.value,
        isiRef.current.value,
      ];
      if (inputArr.indexOf("") !== -1) {
        throw new Error("Mohon lengkapi form");
      } else {
        captchaRef.current.execute();
      }
      // if (captchaToken) {
      //   const res = await fetch("/api/feedback", {
      //     method: "POST",
      //     body: JSON.stringify({
      //       nama: namaRef.current.value,
      //       email: emailRef.current.value,
      //       isi: isiRef.current.value,
      //       captchaToken,
      //     }),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });
      //   const resData = await res.json();
      //   if (resData.message) {
      //     handleSetSnack(resData.message, "success");
      //     handleReset();
      //   }
      // } else {
      //   throw new Error("Mohon verifikasi terlebih dahulu");
      // }
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
    // finally {
    //   captchaRef.current.resetCaptcha();
    // }
  };

  return (
    <section
      id='feedback'
      className='relative flex justify-center py-16 lg:py-24 px-4 md:px-10 custom-bg'
    >
      <div className='flex flex-col items-center gap-8 lg:gap-10 max-w-screen-xl w-full'>
        <form
          onSubmit={handleSubmit}
          className='w-full border border-[#A2BCDE] border-opacity-5 max-w-screen-lg bg-[#ffffff] bg-opacity-50 flex flex-col items-center space-y-6 py-8 md:py-12 px-8 md:px-24 rounded-3xl text-main-blue'
        >
          <h2 data-cy='home-section5-header' className='text-dark-blue'>
            {t("judulSeksiFeedback")}
          </h2>
          <p
            data-cy='home-section5-subheader'
            className='w-10/12 md:w-3/4 text-dark-blue text-opacity-80 text-sm md:text-[1.225rem] lg:text-[1.375rem] leading-5 lg:leading-8 text-center'
          >
            {t("isiSeksiFeedback")}
          </p>
          <div className='flex flex-col md:flex-row gap-5 w-full'>
            <input
              data-cy='home-section5-name-input'
              ref={namaRef}
              className='border border-main-blue border-opacity-20 flex-1 rounded-full px-6 py-3 focus:outline-none bg-white bg-opacity-0'
              placeholder={t("placeholderNama")}
            />
            <input
              data-cy='home-section5-email-input'
              ref={emailRef}
              className='border border-main-blue border-opacity-20 flex-1 rounded-full px-6 py-3 focus:outline-none bg-white bg-opacity-0'
              placeholder={t("placeholderEmail")}
              type='email'
            />
          </div>
          <textarea
            data-cy='home-section5-text-input'
            ref={isiRef}
            className='w-full border border-main-blue border-opacity-20 rounded-lg px-6 py-3 focus:outline-none bg-white bg-opacity-0'
            rows='6'
            placeholder={t("placeholderIsi")}
          ></textarea>
          <HCaptcha
            sitekey='e45cae2e-2906-45bf-abe7-9424392c31c6'
            size='invisible'
            onVerify={setCaptchaToken}
            onError={(err) => {
              handleSetSnack(`hCaptcha Error: ${err}`, "error");
            }}
            ref={captchaRef}
          />
          <input
            type='submit'
            value={t("tombolFeedback")}
            className={`cursor-pointer flex lg:text-lg space-x-2 bg-main-blue rounded-full text-white text-sm py-3 lg:py-5 px-5 lg:px-8 hover:opacity-80`}
          ></input>
        </form>
      </div>
      <style jsx>
        {`
          .custom-bg {
            background: linear-gradient(
              rgba(0, 0, 0, 0),
              rgba(42, 99, 181, 0.1) 30% 80%,
              rgba(0, 0, 0, 0)
            );
          }
        `}
      </style>
    </section>
  );
};

export default Section5;
