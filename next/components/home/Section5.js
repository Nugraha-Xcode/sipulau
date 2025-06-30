import { useRef, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import AppContext from "../../context/AppContext";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_INA_GEO_RECAPTCHA_SITE_KEY || "6LeH8XwhAAAAALw43tTI0iPcLqx8vrlMvkyRwuB6";
const Section5 = () => {
  const { t } = useTranslation("homepage");
  const { handleSetSnack } = useContext(AppContext);
  const formRef = useRef(null);
  const [submitData, setSubmitData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Tambahkan useEffect untuk load reCAPTCHA script
  useEffect(() => {
    const scriptElementId = "grecaptcha-script";
    const url = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.id = scriptElementId;
    document.body.appendChild(script);

    return () => {
      // cleanup
      const existingScript = document.getElementById(scriptElementId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const submitForm = async (captchaToken) => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify({ ...submitData, captchaToken }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await res.json();
      if (resData.message) {
        handleSetSnack(resData.message, "success");
        formRef.current.reset();
      }
    } catch (error) {
      handleSetSnack(error.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reportValidity();

    try {
      const formData = new FormData(e.target);
      const objData = Object.fromEntries(formData.entries());
      for (const value of formData.values()) {
        if (!value) {
          throw new Error("Mohon lengkapi form");
        }
      }
      setSubmitData(objData);

      // Gunakan reCAPTCHA
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, {
            action: "submit_feedback",
          })
          .then((token) => {
            submitForm(token);
          });
      });
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  };

  return (
    <section
      id='feedback'
      className='relative flex justify-center py-16 lg:py-24 px-4 md:px-10 custom-bg'
    >
      <div className='flex flex-col items-center gap-8 lg:gap-10 max-w-screen-xl w-full'>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full border border-[#A2BCDE] border-opacity-5 max-w-screen-lg bg-[#ffffff] bg-opacity-50 flex flex-col items-center space-y-6 py-8 md:py-12 px-8 md:px-24 rounded-3xl text-main-blue'
        >
          {/* Form fields tetap sama */}
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
              name='nama'
              className='border border-main-blue border-opacity-20 flex-1 rounded-full px-6 py-3 focus:outline-none bg-white bg-opacity-0'
              placeholder={t("placeholderNama")}
            />
            <input
              data-cy='home-section5-email-input'
              name='email'
              className='border border-main-blue border-opacity-20 flex-1 rounded-full px-6 py-3 focus:outline-none bg-white bg-opacity-0'
              placeholder={t("placeholderEmail")}
              type='email'
            />
          </div>
          <textarea
            data-cy='home-section5-text-input'
            name='isi'
            className='w-full border border-main-blue border-opacity-20 rounded-lg px-6 py-3 focus:outline-none bg-white bg-opacity-0'
            rows='6'
            placeholder={t("placeholderIsi")}
          ></textarea>

          {/* Hapus HCaptcha component */}

          <input
            type='submit'
            value={isLoading ? "Mengirim..." : t("tombolFeedback")}
            disabled={isLoading}
            className={`cursor-pointer flex lg:text-lg space-x-2 bg-main-blue rounded-full text-white text-sm py-3 lg:py-5 px-5 lg:px-8 hover:opacity-80 disabled:opacity-50`}
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
