import { useTranslation } from "react-i18next";

const DetailInformasiPulauTerluar = ({ detailPulau }) => {
  const { t } = useTranslation("popupPulau");

  // Function untuk mengkonversi BP_TBP value
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
      isSpecial: true, // Flag untuk BP_TBP yang perlu formatting khusus
    },
  ];

  return (
    <div className='p-4 space-y-3'>
      {detailItems.map((el, index) => (
        <div className='flex flex-col gap-1 text-black-2 text-xs' key={index}>
          {/* Label */}
          <div className='font-medium text-gray-600'>
            {el.label || "-"}
          </div>
          {/* Value */}
          <div className='text-black-2 break-words'>
            {el.isSpecial
              ? formatBpTbp(detailPulau[el.value])
              : detailPulau[el.value]
                ? detailPulau[el.value] + " " + (el.unit ? el.unit : "")
                : "-"
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailInformasiPulauTerluar;