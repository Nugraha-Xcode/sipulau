// import useToggle from "../../utils/useToggle";
// import ButtonMain from "../ButtonMain";
// import Modal from "../modal";
// import Select from "../select/Select";

const lembagaItems = [
  {
    label: "Ina Geoportal",
    href: "https://tanahair.indonesia.go.id/portal-web",
  },
  { label: "SINAR", href: "https://sinar.big.go.id/" },
  { label: "SI Batnas", href: "http://batnas.big.go.id/" },
  { label: "Kemenkomarves", href: "https://maritim.go.id/" },
  { label: "Kemendagri", href: "https://www.kemendagri.go.id/" },
  { label: "KKP", href: "https://pesisirpulau.id/" },
  { label: "BIG", href: "https://big.go.id" },
  { label: "Pushidrosal", href: "http://www.pushidrosal.id/" },
];

const Section3 = () => {
  // const [isShowing, toggle] = useToggle();

  return (
    <section className='relative flex justify-center py-16 lg:py-24 px-4 md:px-10'>
      <div className='flex flex-col items-center gap-8 lg:gap-10 max-w-screen-xl w-full text-main-blue'>
        <div className='flex flex-col items-center gap-5'>
          <h2 className='text-dark-blue text-center'>
            Website Lembaga Terkait
          </h2>
          <p className='w-10/12 md:w-3/4 p-ctm-content-80 text-center'>
            Berikut merupakan Kementrian & Lembaga yang bekerja sama dengan
            Badan Informasi Geospasial terkait Mendata SIPULAU
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
        <div className='flex flex-wrap justify-center gap-6 '>
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
