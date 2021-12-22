import Link from "next/link";
import { useTranslation } from "react-i18next";

const Section4 = ({ data }) => {
  const { t } = useTranslation("homepage");
  return (
    <section
      id='berita'
      className='relative flex justify-center py-16 lg:py-24 px-4 md:px-10 custom-bg'
    >
      <div className='flex flex-col items-center gap-8 lg:gap-10 max-w-screen-xl w-full text-main-blue'>
        <div className='flex flex-col items-center gap-5'>
          <h2 className='text-dark-blue' data-cy='home-section4-header'>
            {t("judulSeksiBerita")}
          </h2>
          <p
            className='w-10/12 md:w-3/4 text-dark-blue text-opacity-80 text-sm md:text-[1.225rem] lg:text-[1.375rem] leading-5 lg:leading-8 text-center'
            data-cy='home-section4-subheader'
          >
            {t("isiSeksiBerita")}
          </p>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data.map((el, index) => (
            <div
              className='flex flex-col items-center text-center gap-3'
              key={el.newsId}
            >
              <div
                className='relative h-40 w-full rounded-xl bg-cover'
                style={{ backgroundImage: `url(${el.imageSrc})` }}
              />
              <h3
                className='truncate text-dark-blue w-[80%]'
                data-cy={`home-section4-news-title-${index}`}
              >
                {el.title}
              </h3>
              <p
                className='line-clamp-3 text-dark-blue text-opacity-60'
                data-cy={`home-section4-news-abstract-${index}`}
              >
                {el.abstract}
              </p>
              <Link href={"/news/" + el.newsId}>
                <a data-cy={`home-section4-see-news-button-${index}`}>
                  {t("tombolBerita2")}
                </a>
              </Link>
            </div>
          ))}
        </div>
        <Link href={"/news"}>
          <a
            data-cy='home-section4-see-all-news-button'
            className={`flex lg:text-lg space-x-2 bg-main-blue rounded-full text-white text-sm py-3 lg:py-5 px-5 lg:px-8 hover:opacity-80`}
          >
            {t("tombolBerita")}
          </a>
        </Link>
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

export default Section4;
