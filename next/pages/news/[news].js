import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";

import { sipulauPool, umamiPool } from "../../db";
import { sqlSafeDirectusURL } from "../../utils/constant";

export default function NewsDetail({ mainNews, recentNews, popularNews }) {
  const router = useRouter();
  const { t } = useTranslation("news");
  return (
    <>
      <Head>
        <title>SIPULAU - BIG</title>
      </Head>
      <Script
        data-website-id='ad644dc6-3c28-4089-98b6-036414106943'
        data-do-not-track='true'
        src={process.env.NEXT_PUBLIC_UMAMI_URL + "/umami.js"}
      />
      <Layout>
        <section className='relative flex justify-center items-center py-16 lg:py-24 px-10 min-h-screen'>
          <div className='flex flex-col md:flex-row gap-10 max-w-screen-xl w-full text-main-blue py-10'>
            <div className='w-full md:w-[60%]'>
              <h2 className='text-dark-blue mb-3'>{mainNews.title}</h2>
              <div className='text-dark-blue text-opacity-60 flex divide-x-2 divide-dark-blue divide-opacity-60 divide'>
                <p className='text-xs lg:text-sm pr-2 font-bold tracking-[0.125rem]'>
                  {new Date(mainNews.dateCreated * 1000).toLocaleString(
                    router.locale,
                    {
                      dateStyle: "full",
                      timeStyle: "short",
                    }
                  )}
                </p>
                <p className='text-xs lg:text-sm px-2 font-bold tracking-[0.125rem]'>
                  {mainNews.author || "Anonim"}
                </p>
              </div>
              <div
                className='relative h-96 w-full mt-5 rounded-xl bg-cover'
                style={{ backgroundImage: `url(${mainNews.imageSrc})` }}
              ></div>
              <div
                className='text-dark-blue text-opacity-80 mt-10'
                dangerouslySetInnerHTML={{ __html: mainNews.content }}
              />
            </div>
            <div className='w-full md:w-[40%] space-y-10'>
              <div className='flex flex-col gap-7'>
                <p className='text-sm text-dark-blue text-opacity-60 font-bold'>
                  {t("subBeritaJudul1")}
                </p>
                {recentNews.map((el) => (
                  <Link href={"/news/" + el.newsId}>
                    <div className='flex gap-5 cursor-pointer' key={el.newsId}>
                      <div
                        className='relative h-28 w-28 md:w-1/2 rounded-xl bg-cover'
                        style={{ backgroundImage: `url(${el.imageSrc})` }}
                      />
                      <div className='flex flex-col w-full flex-1 md:w-1/2'>
                        <p className='line-clamp-3 text-dark-blue font-bold'>
                          {el.title}
                        </p>
                        <p className='text-dark-blue text-opacity-60'>
                          {new Date(el.dateCreated * 1000).toLocaleString(
                            router.locale,
                            {
                              day: "2-digit",
                              month: "long",
                            }
                          )}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className=' flex-col gap-7 hidden md:flex'>
                <p className='text-sm text-dark-blue text-opacity-60 font-bold'>
                  {t("subBeritaJudul2")}
                </p>
                {popularNews.map((el) => (
                  <Link href={"/news/" + el.newsId}>
                    <div className='flex gap-5 cursor-pointer' key={el.newsId}>
                      <div
                        className='relative h-28 w-28 md:w-1/2 rounded-xl bg-cover'
                        style={{ backgroundImage: `url(${el.imageSrc})` }}
                      ></div>
                      <div className='flex flex-col w-full flex-1 md:w-1/2'>
                        <p className='line-clamp-3 text-dark-blue font-bold'>
                          {el.title}
                        </p>
                        <p className='text-dark-blue text-opacity-60'>
                          {new Date(el.dateCreated * 1000).toLocaleString(
                            router.locale,
                            {
                              day: "2-digit",
                              month: "long",
                            }
                          )}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ locale, params: { news: newsId } }) {
  newsId = parseInt(newsId);
  if (isNaN(parseInt(newsId))) {
    return { notFound: true };
  }

  let mainColumns;
  if (locale === "en") {
    mainColumns = [
      'COALESCE(judul_eng,judul_idn) "title"',
      'COALESCE(isi_eng,isi_idn) "content"',
    ];
  } else {
    mainColumns = ['judul_idn "title"', 'isi_idn "content"'];
  }

  mainColumns.push(
    'EXTRACT(EPOCH FROM date_created) "dateCreated"',
    `TRIM(CONCAT(first_name, ' ', last_name)) "author"`,
    `'${sqlSafeDirectusURL}/assets/' || gambar_berita "imageSrc"`
  );

  let mainResult;
  try {
    mainResult = await sipulauPool.query(
      `
      SELECT ${mainColumns.join(",")}
      FROM berita
      INNER JOIN directus_users u ON u.id = user_created
      WHERE berita_id = $1
      AND berita.status = 'published'
      `,
      [newsId]
    );
  } catch (error) {
    console.error(error);
    mainResult = null;
  }

  if (mainResult?.rows?.[0]) {
    let sidebarColumns;
    if (locale === "en") {
      sidebarColumns = ['COALESCE(judul_eng,judul_idn) "title"'];
    } else {
      sidebarColumns = ['judul_idn "title"'];
    }

    sidebarColumns.push(
      'berita_id "newsId"',
      'EXTRACT(EPOCH FROM date_created) "dateCreated"',
      `'${sqlSafeDirectusURL}/assets/' || gambar_berita || '?key=thumb' "imageSrc"`
    );

    let recentNews = [];
    let popularNews = [];

    let [recentNewsResult, popularNewsResult] = await Promise.all([
      sipulauPool
        .query(
          `SELECT ${sidebarColumns.join(
            ","
          )} FROM berita WHERE status = 'published' ORDER BY date_created DESC LIMIT 5`
        )
        .catch((error) => {
          console.error(error);
          return null;
        }),
      umamiPool
        .query(
          `
          SELECT regexp_replace(url, '^.*\\/', '') "newsId" FROM pageview
          WHERE url ~ '^\\/news\\/[0-9]+$' OR url ~ '^\\/en\\/news\\/[0-9]+$'
          AND created_at > CURRENT_TIMESTAMP - INTERVAL '1 month'
          AND website_id = 1
          GROUP BY ("newsId") ORDER BY COUNT(*) DESC LIMIT 5
          `
        )
        .then((pageviewResult) => {
          if (
            Array.isArray(pageviewResult?.rows) &&
            pageviewResult.rows.length > 0
          ) {
            let popularNewsIds = pageviewResult.rows.map((el) =>
              parseInt(el.newsId)
            );
            let paramArr = Array(popularNewsIds.length)
              .fill()
              .map((_, index) => "$" + (index + 1));
            return sipulauPool.query(
              `SELECT ${sidebarColumns.join(
                ","
              )} FROM berita WHERE berita_id IN (${paramArr.join(",")})`,
              popularNewsIds
            );
          } else {
            return null;
          }
        })
        .catch((error) => {
          console.error(error);
          return null;
        }),
    ]);

    if (Array.isArray(recentNewsResult?.rows)) {
      recentNews = recentNewsResult.rows;
    }
    if (Array.isArray(popularNewsResult?.rows)) {
      popularNews = popularNewsResult.rows;
    }

    return {
      props: {
        ...(await serverSideTranslations(locale, ["footer", "news"])),
        mainNews: mainResult.rows[0],
        recentNews,
        popularNews,
      },
    };
  } else {
    return { notFound: true };
  }

  // return {
  //   props: {
  //     mainNews: {
  //       title:
  //         "Mapping nature - climate change resilience and managing deforestation with geospatial data",
  //       imageSrc:
  //         "https://images.unsplash.com/photo-1631621461675-e61a1f28d3d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3368&q=80",
  //       dateCreated: 1632904091.07,
  //       author: "Bondan Vitorini",
  //       content:
  //         "The method is this: in an acre of ground you bury, at six inches distance and quantity of acorns, dates, chestnuts, and other mast or vegetables, whereof these animals are fondest  then you a drive. The method is this: in an acre of ground you bury, at six inches distance and eight deep,  quantity of acorns, dates, chestnuts, and other mast or vegetables, whereof these animals are fondest  then you drive.The method is this: in an acre of ground you bury, at six inches distance and eight deep, a quantity of acorns, dates, chestnuts, and other mast or vegetables, whereof these animals are fondest  then you drive.",
  //     },
  //     recentNews: [
  //       {
  //         newsId: "test",
  //         title:
  //           "Mapping nature - climate change resilience and managing deforestation with geospatial data",
  //         imageSrc:
  //           "https://images.unsplash.com/photo-1631621461675-e61a1f28d3d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3368&q=80",
  //         dateCreated: 1632904091.07,
  //       },
  //     ],
  //     popularNews: [
  //       {
  //         newsId: "test",
  //         title:
  //           "Mapping nature - climate change resilience and managing deforestation with geospatial data",
  //         imageSrc:
  //           "https://images.unsplash.com/photo-1631621461675-e61a1f28d3d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3368&q=80",
  //         dateCreated: 1632904091.07,
  //       },
  //     ],
  //   },
  // };
}
