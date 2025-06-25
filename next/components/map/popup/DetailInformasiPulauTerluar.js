import { useTranslation } from "react-i18next";

const DetailInformasiPulauTerluar = ({ detailPulau }) => {
  const { t } = useTranslation("popupPulau");

  const formatBpTbp = (value) => {
    if (!value) return "-";
    switch (value.toUpperCase()) {
      case "TBP":
        return "Tidak Berpenduduk";
      case "BP":
        return "Berpenduduk";
      default:
        return value;
    }
  };

  const detailItems = [
    {
      label: t("attribute10"),
      value: "wadmkc",
    },
    {
      label: t("attribute11"),
      value: "wadmkd",
    },
    {
      label: t("attribute17"),
      value: "Titik_Dasa",
    },
    {
      label: t("attribute18"),
      value: "BP_TBP",
      isSpecial: true, 
    },
  ];

  return (
    <div className='p-4 space-y-2'>
      {detailItems.map((el, index) => (
        <div className='flex gap-2 text-black-2 text-xs' key={index}>
          <div className='flex justify-between w-1/2'>
            <p>{el.label || "-"}</p>
            <p>:</p>
          </div>
          <p className='w-1/2'>
            {detailPulau[el.value]
              ? detailPulau[el.value] + " " + (el.unit ? el.unit : "")
              : "-"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DetailInformasiPulauTerluar;