import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";

import Pagination from "../components/core/pagination";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Section1 from "../components/news/Section1";

import { sipulauPool } from "../db";
import { sqlSafeDirectusURL } from "../utils/constant";

const News = ({ news, totalNews }) => {
  const [page, setPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (router.query.page) {
      setPage(parseInt(router.query.page));
    }
  }, [router]);

  const handlePage = (number) => {
    setPage(number);
    router.push("/news?page=" + number, undefined, { scroll: false });
  };

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
        <div className='min-h-screen py-10'>
          <Section1 data={news} />
          <Pagination
            currentPage={page}
            getCurrent={(number) => handlePage(number)}
            pageSize={5}
            total={totalNews}
            maxPages={5}
          />
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export async function getServerSideProps({ locale, query: { page } }) {
  page = parseInt(page);
  page = isNaN(page) ? 1 : page;
  if (page < 1) {
    return { notFound: true };
  }

  let totalNewsResult;
  try {
    totalNewsResult = await sipulauPool.query(
      `SELECT COUNT(*) FROM berita WHERE status = 'published'`
    );
  } catch (error) {
    console.error(error);
    totalNewsResult = 0;
  }

  let totalNews = 0;
  if (totalNewsResult?.rows?.[0]?.count) {
    totalNews = totalNewsResult.rows[0].count;
  }

  if (totalNews === 0) {
    return { props: { news: [], totalNews } };
  } else if (page > Math.ceil(totalNews / 10)) {
    return { notFound: true };
  }

  let newsColumns;
  if (locale === "en") {
    newsColumns = [
      'COALESCE(judul_eng,judul_idn) "title"',
      'COALESCE(pratinjau_isi_eng,pratinjau_isi_idn) "abstract"',
    ];
  } else {
    newsColumns = ['judul_idn "title"', 'pratinjau_isi_idn "abstract"'];
  }

  newsColumns.push(
    'berita_id "newsId"',
    `'${sqlSafeDirectusURL}/assets/' || gambar_berita || '?key=thumb' "imageSrc"`
  );

  let newsResult;
  try {
    newsResult = await sipulauPool.query(
      `SELECT ${newsColumns.join(
        ","
      )} FROM berita WHERE status = 'published' ORDER BY date_created DESC LIMIT 10 OFFSET $1`,
      [(page - 1) * 10]
    );
  } catch (error) {
    console.error(error);
    newsResult = null;
  }

  let news = [];
  if (Array.isArray(newsResult?.rows)) {
    news = newsResult.rows;
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["footer", "news"])),
      news,
      totalNews,
    },
  };

  /* return {
    props: {
      data: [
        {
          imageSrc:
            "https://images.unsplash.com/photo-1631621461675-e61a1f28d3d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3368&q=80",
          title:
            "Modeling ocean-induced rapid Earth rotation variations: an update",
          abstract:
            "We revisit the problem of modeling the ocean’s contribution to rapid, non-tidal Earth rotation variations at periods of 2–120 days. Estimates of oceanic angular momentum (OAM, 2007–2011) are drawn from a suite of established circulation models and new numerical simulations, whose finest configuration is on a ∘ grid. We show that the OAM product by the Earth System Modeling Group at GeoForschungsZentrum Potsdam has spurious short period variance in its equatorial motion terms, rendering the series a poor choice for describing oceanic signals in polar motion on time scales of less than ∼2 weeks.",
          newsId: "1",
        },
      ]
    },
  }; */
}

export default News;
