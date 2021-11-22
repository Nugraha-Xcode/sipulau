import Image from "next/image";
import Link from "next/link";

import ButtonMain from "../ButtonMain";
// import { dummyNews } from "../../utils/constant";

const Section4 = ({ data }) => {
  return (
    <section className='relative flex justify-center py-16 lg:py-24 px-4 md:px-10'>
      <div className='flex flex-col items-center gap-8 lg:gap-10 max-w-screen-xl w-full text-main-blue'>
        <div className='flex flex-col items-center gap-5'>
          <h2 className='text-dark-blue'>Berita terkait SIPULAU</h2>
          <p className='w-10/12 md:w-3/4 p-ctm-content-80 text-center'>
            Berita dan informasi-informasi seputar Sistem Informas SIPULAU
          </p>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data.map((el) => (
            <div
              className='flex flex-col items-center text-center gap-3'
              key={el.newsId}
            >
              <div className='relative h-40 w-full'>
                <Image
                  src={el.imageSrc}
                  alt={el.title}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-xl'
                />
              </div>
              <h3 className='truncate text-dark-blue w-[80%]'>{el.title}</h3>
              <p className='line-clamp-3 text-dark-blue text-opacity-60'>
                {el.abstract}
              </p>
              <Link href={"/news/" + el.newsId}>
                <a>Baca Selengkapnya</a>
              </Link>
            </div>
          ))}
        </div>
        <Link href={"/news"}>
          <a
            className={`flex lg:text-lg space-x-2 bg-main-blue rounded-full text-white text-sm py-3 lg:py-5 px-5 lg:px-8 hover:opacity-80`}
          >
            Lihat Semua
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Section4;
