import Link from "next/link";
import { useTranslation } from "react-i18next";

const Section1 = ({ data }) => {
  const { t } = useTranslation("news");
  return (
    <section className='relative flex justify-center py-16 lg:py-24 px-10'>
      <div className='flex flex-col items-center gap-8 lg:gap-10 max-w-screen-xl w-full text-main-blue'>
        <div className='flex flex-col items-center gap-5'>
          <h2 data-cy='news-page-header' className='text-dark-blue'>
            {t("judulPageBerita")}
          </h2>
          <p
            data-cy='news-page-subheader'
            className='w-10/12 md:w-3/4 text-dark-blue text-opacity-80 text-sm md:text-[1.225rem] lg:text-[1.375rem] leading-5 lg:leading-8 text-center'
          >
            {t("isiPageBerita")}
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
                data-cy={`news-title-${index}`}
                className='truncate text-dark-blue w-[80%]'
              >
                {el.title}
              </h3>
              <p
                data-cy={`news-abstract-${index}`}
                className='line-clamp-3 text-dark-blue text-opacity-60'
              >
                {el.abstract}
              </p>
              <Link href={"/news/" + el.newsId}>
                <a data-cy={`news-link-${index}`}>{t("tombolBacaBerita")}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
