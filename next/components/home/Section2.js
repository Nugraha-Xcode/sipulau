import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

import Image from "next/image";

const Section2 = forwardRef((props, ref) => {
  const { t } = useTranslation("homepage");
  return (
    <section
      id='tentang'
      className='relative flex justify-center py-16 lg:py-24 px-4 md:px-10'
    >
      <div
        className='flex flex-col items-center gap-10 max-w-screen-xl w-full text-main-blue'
        data-cy='home-section2'
      >
        <h2 ref={ref} className='text-dark-blue' data-cy='home-section2-header'>
          {t("judulSeksiTentang")}
        </h2>
        <p
          data-cy='home-section2-desc'
          className='w-10/12 md:w-3/4 text-center text-dark-blue text-opacity-80 text-sm md:text-[1.225rem] lg:text-[1.375rem] leading-5 lg:leading-8'
        >
          {t("isiSeksiTentang")}
        </p>
        <div className='flex flex-col md:flex-row w-full items-center gap-10 md:gap-16 lg:gap-20'>
          <div className='relative flex-0 md:flex-1 w-full md:w-auto h-96'>
            <Image
              src='/images/img-section2.jpg'
              alt='map picture'
              layout='fill'
              objectFit='cover'
              className='rounded-2xl'
              data-cy='home-section2-desc-img'
            />
          </div>
          <div className='flex flex-col w-full md:w-5/12 justify-center gap-10'>
            <div className='flex flex-col gap-3 items-center md:items-start text-center md:text-left'>
              <p
                className='text-white text-xl md:text-[1.375rem] leading-5 lg:leading-8'
                data-cy='home-section2-subheader1'
              >
                {t("subJudulSeksiTentang1")}
              </p>
              <p
                className='text-dark-blue w-10/12 md:w-full'
                data-cy='home-section2-subcontent1'
              >
                {t("isiSubJudul1")}
              </p>
            </div>
            <div className='flex flex-col gap-3 items-center md:items-start text-center md:text-left'>
              <p
                className='text-main-blue text-xl md:text-[1.375rem] leading-5 lg:leading-8'
                data-cy='home-section2-subheader2'
              >
                {t("subJudulSeksiTentang2")}
              </p>
              <p
                className='text-dark-blue w-10/12 md:w-full'
                data-cy='home-section2-subcontent2'
              >
                {t("isiSubJudul2")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Section2;
