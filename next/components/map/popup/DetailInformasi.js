import { useContext } from "react";
import PopupContext from "../../../context/PopupContext";

const detailItems = [
  {
    label: "Kode Wilayah",
    value: "id_wilayah",
  },
  {
    label: "Arti Nama",
    value: "artinam",
  },
  {
    label: "Sejarah Nama",
    value: "sjhnam",
  },
  {
    label: "Asal Bahasa",
    value: "aslbhs",
  },
  {
    label: "Kecamatan",
    value: "wadmkc",
  },
  {
    label: "Desa/Kelurahan",
    value: "wadmkd",
  },
  {
    label: "Status",
    value: "status",
  },
  {
    label: "Remark",
    value: "remark",
  },
];

const DetailInformasi = () => {
  const { detailPulau } = useContext(PopupContext);

  return (
    <div className='p-4 space-y-2'>
      {detailItems.map((el, index) => (
        <div className='flex gap-2 text-black-2 text-xs' key={index}>
          <div className='flex justify-between w-1/2'>
            <p>{el.label || "-"}</p>
            <p>:</p>
          </div>
          <p className='w-1/2'>{detailPulau[el.value] || "-"}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailInformasi;
