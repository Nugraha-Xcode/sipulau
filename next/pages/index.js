import Head from "next/head";
import Script from "next/script";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import BgCircle from "../components/BgCircle";

import Footer from "../components/Footer";

import Layout from "../components/Layout";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Section5 from "../components/home/Section5";
import Section6 from "../components/home/Section6";

import { sipulauPool, umamiPool } from "../db";
import { sqlSafeDirectusURL } from "../utils/constant";

export default function Home({ news, carousel, statistic }) {
  return (
    <div className='smooth-scroll'>
      <Head>
        <title>SIPULAU - BIG</title>
      </Head>
      <Script
        data-website-id='ad644dc6-3c28-4089-98b6-036414106943'
        data-do-not-track='true'
        src={process.env.NEXT_PUBLIC_UMAMI_URL + "/umami.js"}
      />
      <Layout>
        <Section1 items={carousel} />
        <div className='relative sectionStyle1'>
          <Section2 />
        </div>
        <div className='relative sectionStyle2'>
          <Section4 data={news} />
          <Section3 />
          <Section5 />
          <Section6 data={statistic} />
          <BgCircle customStyle='w-80 h-80 top-[5%] blur-[100px] bg-opacity-25 -left-10' />
          <BgCircle customStyle='w-72 h-72 top-[80%] blur-[100px] bg-opacity-25 -left-10' />
          <BgCircle customStyle='w-96 h-[32rem] top-[18%] right-0 blur-[160px] rotate-[-165deg] bg-opacity-25 -right-10' />
          <BgCircle customStyle='w-96 h-[32rem] top-[60%] right-0 blur-[160px] rotate-[-165deg] bg-opacity-25 -right-10' />
        </div>
        <Footer />
      </Layout>
      <style jsx>{`
        .sectionStyle1 {
          background: url("/images/bg-section-2.svg") no-repeat;
          background-size: cover;
        }
        .sectionStyle2 {
          background: url("/images/bg-section.svg") no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  let newsColumns, carouselColumns;
  if (locale === "en") {
    newsColumns = [
      'COALESCE(judul_eng,judul_idn) "title"',
      'COALESCE(pratinjau_isi_eng,pratinjau_isi_idn) "abstract"',
    ];
    carouselColumns = [
      'COALESCE(judul_eng,judul_idn) "title"',
      'COALESCE(subjudul_eng,subjudul_idn) "subTitle"',
      'COALESCE(deskripsi_eng,deskripsi_idn) "text"',
      'COALESCE(teks_tombol_eng,teks_tombol_idn) "buttonLabel"',
      `'${sqlSafeDirectusURL}/assets/' || COALESCE(gambar_eng,gambar_idn) "imgSrc"`,
    ];
  } else {
    newsColumns = ['judul_idn "title"', 'pratinjau_isi_idn "abstract"'];
    carouselColumns = [
      'judul_idn "title"',
      'subjudul_idn "subTitle"',
      'deskripsi_idn "text"',
      'teks_tombol_idn "buttonLabel"',
      `'${sqlSafeDirectusURL}/assets/' || gambar_idn "imgSrc"`,
    ];
  }

  newsColumns.push(
    'berita_id "newsId"',
    `'${sqlSafeDirectusURL}/assets/' || gambar_berita || '?key=thumb' "imageSrc"`
  );
  carouselColumns.push('url_tombol "buttonHref"');

  let [
    newsResult,
    carouselResult,
    yearlySessionStatResult,
    dailySessionStatResult,
    downloadEventStatResult,
  ] = await Promise.all([
    sipulauPool
      .query(
        `SELECT ${newsColumns.join(
          ","
        )} FROM berita WHERE status = 'published' ORDER BY date_created DESC LIMIT 6`
      )
      .catch((error) => {
        console.error(error);
        return null;
      }),
    sipulauPool
      .query(
        `SELECT ${carouselColumns.join(
          ","
        )} FROM carousel WHERE status = 'published' ORDER BY urutan`
      )
      .catch((error) => {
        console.error(error);
        return null;
      }),
    umamiPool
      .query(
        `
        SELECT
          COUNT(*) "uniqueVisitor",
          COUNT(DISTINCT country) "country"
        FROM "session"
        WHERE created_at > CURRENT_TIMESTAMP - INTERVAL '1 year'
        AND website_id = 1
        `
      )
      .catch((error) => {
        console.error(error);
        return null;
      }),
    umamiPool
      .query(
        `
        SELECT
          COUNT(*) "uniqueVisitor"
        FROM "session"
        WHERE created_at > CURRENT_TIMESTAMP - INTERVAL '1 day'
        AND website_id = 1
        `
      )
      .catch((error) => {
        console.error(error);
        return null;
      }),
    umamiPool
      .query(
        `
        SELECT
          COUNT(*) "downloadCount"
        FROM "event"
        WHERE created_at > CURRENT_TIMESTAMP - INTERVAL '1 day'
        AND event_type = 'download'
        AND website_id = 1
        `
      )
      .catch((error) => {
        console.error(error);
        return null;
      }),
  ]);

  let news = [];
  let carousel = [];
  let statistic = {
    download: 0,
    visitor: 0,
    visit: 0,
    country: 0,
  };
  if (Array.isArray(newsResult?.rows)) {
    news = newsResult.rows;
  }
  if (Array.isArray(carouselResult?.rows)) {
    carousel = carouselResult.rows;
  }
  if (yearlySessionStatResult?.rows?.[0]) {
    statistic.visitor = yearlySessionStatResult.rows[0].uniqueVisitor;
    statistic.country = yearlySessionStatResult.rows[0].country;
  }
  if (dailySessionStatResult?.rows?.[0]) {
    statistic.visit = dailySessionStatResult.rows[0].uniqueVisitor;
  }
  if (downloadEventStatResult?.rows?.[0]) {
    statistic.download = downloadEventStatResult.rows[0].downloadCount;
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "homepage",
        "footer",
        "header",
      ])),
      news,
      carousel,
      statistic,
    },
  };

  // return {
  //   props: {
  //     news: [
  //       {
  //         imageSrc:
  //           "https://images.unsplash.com/photo-1631621461675-e61a1f28d3d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3368&q=80",
  //         title:
  //           "Modeling ocean-induced rapid Earth rotation variations: an update",
  //         abstract:
  //           "We revisit the problem of modeling the ocean’s contribution to rapid, non-tidal Earth rotation variations at periods of 2–120 days. Estimates of oceanic angular momentum (OAM, 2007–2011) are drawn from a suite of established circulation models and new numerical simulations, whose finest configuration is on a ∘ grid. We show that the OAM product by the Earth System Modeling Group at GeoForschungsZentrum Potsdam has spurious short period variance in its equatorial motion terms, rendering the series a poor choice for describing oceanic signals in polar motion on time scales of less than ∼2 weeks.",
  //         newsId: "1",
  //       },
  //     ],
  //     carousel: [
  //       {
  //         subTitle: "Badan Informasi Geospasial",
  //         title: "Sistem Informasi SIPULAU",
  //         text: "Ina-Geoportal sebagai geoportal nasional yang menghubungkan berbagai Kementerian, Lembaga, Provinsi, dan Daerah yang menjadi mitra penghubung simpul Jaringan Informasi Geospasial Nasional",
  //         buttonLabel: "Lihat Selengkapnya",
  //         buttonHref: "/map",
  //         imgSrc: "/images/bg-hero-section1.jpg",
  //       },
  //       {
  //         subTitle: "Badan Informasi Geospasial",
  //         title: "Sistem Informasi SIPULAU",
  //         text: "Ina-Geoportal sebagai geoportal nasional yang menghubungkan berbagai Kementerian, Lembaga, Provinsi, dan Daerah yang menjadi mitra penghubung simpul Jaringan Informasi Geospasial Nasional",
  //         buttonLabel: "",
  //         buttonHref: "",
  //         imgSrc: "/images/bg-hero-section1.jpg",
  //       },
  //     ],
  //     statistic: {
  //       download: 0,
  //       visitor: 0,
  //       visit: 0,
  //       country: 0,
  //     },
  //   },
  // };
}
