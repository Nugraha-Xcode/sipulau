import { forwardRef } from "react";

import Image from "next/image";

const Section2 = forwardRef((props, ref) => {
  return (
    <section className='relative flex justify-center py-16 lg:py-24 px-4 md:px-10'>
      <div className='flex flex-col items-center gap-10 max-w-screen-xl w-full text-main-blue'>
        <h2 ref={ref} className='text-dark-blue'>
          Aplikasi SIPULAU
        </h2>
        <p className='w-10/12 md:w-3/4 text-center p-ctm-content-80'>
          SIPULAU adalah sistem informasi berbasis WebGIS yang menyajikan &
          menyebarluaskan informasi pulau serta berbagi pakai data pulau dengan
          Kementerian atau Lembaga & Pemerintah Daerah serta masyarakat luas.
        </p>
        <div className='flex flex-col md:flex-row w-full items-center gap-10 md:gap-16 lg:gap-20'>
          <div className='relative flex-0 md:flex-1 w-full md:w-auto h-96'>
            <Image
              src='/images/img-section2.jpg'
              alt='map picture'
              layout='fill'
              objectFit='cover'
              className='rounded-2xl'
            />
          </div>
          <div className='flex flex-col w-full md:w-5/12 justify-center gap-10'>
            <div className='flex flex-col gap-3 items-center md:items-start text-center md:text-left'>
              <p className='text-main-blue text-xl md:text-[1.375rem] leading-5 lg:leading-8'>
                Penyediaan Data Pulau
              </p>
              <p className='text-dark-blue w-10/12 md:w-full'>
                penyediaan data informasi pulau yang dapat diunduh oleh
                pemerintah maupun masyarakat
              </p>
            </div>
            <div className='flex flex-col gap-3 items-center md:items-start text-center md:text-left'>
              <p className='text-main-blue text-xl md:text-[1.375rem] leading-5 lg:leading-8'>
                Berbagai Informasi
              </p>
              <p className='text-dark-blue w-10/12 md:w-full'>
                Menampilkan berbagai informasi penunjang dari Kementerian atau
                Lembaga & Pemerintah Daerah terkait yang tergabung dalam simpul
                jaringan yang akan memperkaya informasi pulau
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Section2;
