import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { navItems } from "../utils/constant";

const socmedItems = [
  {
    path: "https://twitter.com/InfoGeospasial?s=20",
    icon: (
      <FaTwitter className='fill-current text-white hover:text-opacity-60' />
    ),
  },
  {
    path: "https://www.facebook.com/infogeospasial/",
    icon: (
      <FaFacebookF className='fill-current text-white hover:text-opacity-60' />
    ),
  },
  {
    path: "https://www.instagram.com/infogeospasial/",
    icon: (
      <FaInstagram className='fill-current text-white hover:text-opacity-60' />
    ),
  },
  {
    path: "https://www.youtube.com/c/BadanInformasiGeospasial1969",
    icon: (
      <FaYoutube className='fill-current text-white hover:text-opacity-60' />
    ),
  },
];

const Footer = () => {
  const router = useRouter();
  const { t } = useTranslation("footer");

  return (
    <footer className='relative flex justify-center py-10 px-4 md:px-10 bg-footer-blue'>
      <div className='max-w-screen-xl w-full'>
        <div className='flex flex-col md:flex-row gap-10'>
          <div className='w-2/3 md:w-1/3 text-white space-y-8'>
            <div className='flex items-center space-x-5'>
              <img src='/images/logo-big.svg' alt='logo big' className='h-12' />
              <div>
                <p>BADAN INFORMASI GEOSPASIAL</p>
                <p className='whitespace-nowrap text-[0.5rem] opacity-60'>
                  Integritas, Visioner, Tanggung Jawab, Kerja Sama
                </p>
              </div>
            </div>
            <div className='text-sm space-y-3'>
              <p>Jl. Raya Jakarta - Bogor KM. 46</p>
              <p>Cibinong 16911, INDONESIA</p>
            </div>
          </div>
          <div className='w-full md:w-2/3 flex justify-between'>
            <div className='flex flex-col text-white'>
              <p className='underline font-semibold'>Menu</p>
              <div className='grid grid-cols-2 gap-x-10'>
                <div data-cy='footer-page-menu'>
                  {navItems.map((el, index) => (
                    <Link href={el.path} key={index}>
                      <a className='mt-2 text-sm md:text-base block'>
                        {t(el.title)}
                      </a>
                    </Link>
                  ))}
                </div>
                {router.asPath.includes("news") ? null : (
                  <div
                    className='hidden md:flex md:flex-col'
                    data-cy='footer-homepage-menu'
                  >
                    <a href='#tentang' className='mt-2 text-sm md:text-base'>
                      {t("footerTentang")}
                    </a>
                    <a href='#berita' className='mt-2 text-sm md:text-base'>
                      {t("footerBerita")}
                    </a>
                    <a href='#feedback' className='mt-2 text-sm md:text-base'>
                      {t("footerFeedback")}
                    </a>
                    <a href='#statistik' className='mt-2 text-sm md:text-base'>
                      {t("footerStatistik")}
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className='flex flex-col items-end justify-between text-white gap-10'>
              <div className='text-right space-y-3'>
                <p className='underline font-semibold'>{t("footerKontak")}</p>
                <p className='text-sm md:text-base'>021-8753155</p>
                <p className='text-sm md:text-base'>021-87901255</p>
                <p className='text-sm md:text-base'>sipulau@big.go.id</p>
              </div>
              <div className='flex space-x-5'>
                {socmedItems.map((el, index) => (
                  <a
                    key={index}
                    href={el.path}
                    target='_blank'
                    rel='noopener noreferrer'
                    data-cy={`footer-socmed-${index}`}
                  >
                    {el.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className='text-white mt-24 mb-5' />
        <p className='text-center text-sm text-white'>
          Copyright ©2021 Badan Informasi Geospasial All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
