// import useToggle from "../../utils/useToggle";
// import ButtonMain from "../ButtonMain";
// import Modal from "../modal";
// import Select from "../select/Select";
import { useTranslation } from "next-i18next";

const lembagaItems = [
  { label: "Batimetri Nasional", href: "http://batnas.big.go.id/" },
  { label: "Sistem Informasi Nama Rupabumi", href: "https://sinar.big.go.id/" },
  { label: "Kementerian Dalam Negeri", href: "https://www.kemendagri.go.id/" },
  {
    label: "Kementerian Kelautan dan Perikanan",
    href: "https://pesisirpulau.id/",
  },
  {
    label: "Ina Geoportal",
    href: "https://tanahair.indonesia.go.id/portal-web",
  },
  {
    label: "Pusat Hidrografi dan Oseanografi Angkatan Laut",
    href: "http://www.pushidrosal.id/",
  },
  {
    label: "Kementerian Koordinator Bidang Kemaritiman dan Investasi",
    href: "https://maritim.go.id/",
  },
  { label: "Badan Informasi Geospasial", href: "https://big.go.id" },
];

const Section3 = () => {
  // const [isShowing, toggle] = useToggle();
  const { t } = useTranslation("homepage");
  return (
    <section className='relative flex justify-center py-16 lg:py-24 px-4 md:px-10'>
      <div className='flex flex-col items-center gap-8 lg:gap-10 max-w-screen-xl w-full text-main-blue'>
        <div className='flex flex-col items-center gap-5'>
          <h2 className='text-dark-blue text-center'>
            {t("judulSeksiWebsite")}
          </h2>
          <p className='w-10/12 md:w-3/4 text-dark-blue text-opacity-80 text-sm md:text-[1.225rem] lg:text-[1.375rem] leading-5 lg:leading-8 text-center'>
            {t("isiSeksiWebsite")}
          </p>
        </div>
        {/* <div className='flex justify-center items-center space-x-5 w-full'>
          <ButtonMain
            label='Cari Lembaga'
            textColor='text-main-blue'
            bgColor='bg-white'
            addStyle='border-2 border-main-blue border-opacity-20 w-full md:w-1/2 text-left'
            onClick={toggle}
          />
          <div className='hidden md:block'>
            <ButtonMain label='Cari' onClick={toggle} />
          </div>
        </div> */}
        <div className='flex flex-wrap justify-center gap-6 w-11/12'>
          {lembagaItems.map((el, index) => (
            <a
              href={el.href}
              target='_blank'
              className='bg-soft-blue bg-opacity-25 py-3 lg:py-5 px-5 lg:px-8 hover:opacity-80 rounded-full text-main-blue text-sm lg:text-lg text-center'
              key={index}
            >
              {el.label}
            </a>
          ))}
        </div>
      </div>
      {/* <Modal isShowing={isShowing} handleModal={toggle} size='xl'>
        <div className='p-10'>
          <div className='flex items-start'>
            <h2 className='flex-1 text-main-blue text-center'>
              Cari Lembaga Terkait
            </h2>
            <button
              type='button'
              className='text-main-blue text-2xl'
              data-dismiss='modal'
              aria-label='Close'
              onClick={toggle}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='flex flex-col gap-8 items-center'>
            <p className='text-sm md:text-base lg:text-lg text-main-blue text-opacity-70 text-center w-full md:w-3/4'>
              Berikut merupakan Daftar Lembaga yang bekerja sama dengan Badan
              Informasi Geospasial terkait Mendata SIPULAU
            </p>
            <div className='flex flex-col md:flex-row w-full gap-5'>
              <Select
                value={{ value: "test", label: "test" }}
                onChange={() => {}}
                items={[
                  { value: "test", label: "test" },
                  { value: "test2", label: "test2" },
                ]}
                placeholder='Kategori POI'
              />
              <div className='flex-1 border-2 border-main-blue border-opacity-90 rounded-full '>
                <div className='flex flex-col py-3 px-8'>
                  <label
                    className='text-xs text-dark-blue text-opacity-60'
                    htmlFor='institution_name'
                  >
                    Nama Lembaga
                  </label>
                  <input
                    id='institution_name'
                    placeholder='Tulis Nama Lembaga'
                    className='focus:outline-none placeholder-main-blue placeholder-opacity-60'
                  />
                </div>
              </div>
            </div>
            <div className='w-full rounded-2xl border-2 border-main-blue border-opacity-30'>
              <p className='text-sm md:text-base lg:text-lg text-center p-3 text-main-blue'>
                DAFTAR LEMBAGA TERKAIT
              </p>
              <div className='overflow-scroll max-h-64 '>
                {[1, 2, 3, 4, 5, 6].map((el) => (
                  <p
                    className='text-sm md:text-base lg:text-lg text-center p-3 odd:bg-main-blue odd:bg-opacity-5'
                    key={el}
                  >
                    Badan Nasional Penanggulangan Bencana
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Modal> */}
    </section>
  );
};

export default Section3;
