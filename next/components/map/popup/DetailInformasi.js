import { useTranslation } from "react-i18next";

const DetailInformasi = ({ detailPulau }) => {
  const { t } = useTranslation("popupPulau");
  const detailItems = [
    {
      label: t("attribute6"),
      value: "id_wilayah",
    },
    {
      label: t("attribute7"),
      value: "artinam",
    },
    {
      label: t("attribute8"),
      value: "sjhnam",
    },
    {
      label: t("attribute9"),
      value: "aslbhs",
    },
    {
      label: t("attribute10"),
      value: "wadmkc",
    },
    {
      label: t("attribute11"),
      value: "wadmkd",
    },
    // {
    //   label: t("attribute12"),
    //   value: "status",
    // },
    {
      label: t("attribute13"),
      value: "remark",
    },
    {
      label: t("attribute15"),
      value: "luas",
      unit: "km²",
    },
    {
      label: t("attribute16"),
      value: "pjg_gp",
      unit: "km",
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

export default DetailInformasi;
