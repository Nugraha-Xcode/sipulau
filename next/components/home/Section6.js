import { statisticItems } from "../../utils/constant";
import { useTranslation } from "react-i18next";

const Section6 = ({ data }) => {
  const { t } = useTranslation("homepage");
  return (
    <section
      id='statistik'
      className='relative flex justify-center py-20 px-4 md:px-10'
    >
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-screen-xl w-full'>
        <div className='text-center lg:text-left space-y-3'>
          <h2 className='w-full lg:w-1/2 text-dark-blue'>
            {t("judulSeksiStatistik")}
          </h2>
          <p className='text-main-black text-opacity-40'>
            {t("isiSeksiStatistik")}
          </p>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          {statisticItems.map((el) => (
            <div key={el.label} className='flex items-center gap-5 md:gap-8'>
              <img src={el.imageSrc} alt={el.label} className='w-5 md:w-8' />
              <div>
                <p className='text-gray-3 font-bold text-lg md:text-2xl'>
                  {data[el.value]}
                </p>
                <p className='text-gray-2 text-sm md:text-base'>
                  {t(el.label)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
