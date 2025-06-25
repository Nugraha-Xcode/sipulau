import { useTranslation } from "next-i18next";
import React from "react";

const ComponentToPrint = React.forwardRef(({ resumeProvince, tableProvince }, ref) => {
  const { t } = useTranslation();
  const translatedText = (key) => {
    const params = { ns: ["map"] };
    return t(key, params);
  };

  // Mengurutkan data berdasarkan jumlah pulau terbesar ke terkecil
  const sortedTableProvince = [...tableProvince].sort((a, b) => b.total_pulau - a.total_pulau);

  return (
    <div ref={ref} className='relative'>
      {resumeProvince.nama_provinsi === "Seluruh Indonesia" ? (
        <div className='w-full min-h-screen backgroundStyle'>
          <div className='flex flex-col gap-5 mx-44 py-10'>
            <p className='text-xl text-gray-600'>
              {resumeProvince.nama_provinsi}
            </p>
            <img
              src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/[${
                resumeProvince.xmin +
                "," +
                resumeProvince.ymin +
                "," +
                resumeProvince.xmax +
                "," +
                resumeProvince.ymax
              }]/1280x960?access_token=pk.eyJ1IjoiaGFmaXphbmFkbGkiLCJhIjoiY2s0M3pxdmtnMGRmODNkcG11a2RkdGEyNiJ9.zJ_0jcPOGZko34FBrPxDRA`}
              className='w-full rounded-lg'
            />
            <div className='flex flex-col gap-1 w-1/2'>
              {[
                {
                  label: translatedText("resume.numberIslands"),
                  value: resumeProvince.total_island,
                },
                {
                  label: translatedText("resume.area"),
                  value: resumeProvince.total_area,
                },
                {
                  label: translatedText("resume.coastlineLength"),
                  value: resumeProvince.total_coastline,
                },
                {
                  label: translatedText("resume.largestIsland"),
                  value: resumeProvince.largest_island,
                },
                {
                  label: translatedText("resume.smallestIsland"),
                  value: resumeProvince.smallest_island,
                },
                {
                  label: translatedText("resume.inhabitedIsland"),
                  value: resumeProvince.total_inhabited,
                },
                {
                  label: translatedText("resume.uninhabitedIsland"),
                  value: resumeProvince.total_uninhabited,
                },
                {
                  label: resumeProvince.nama_provinsi,
                  value: resumeProvince.total_island,
                },
              ].map((el) => (
                <div
                  key={el.label}
                  className='flex items-center text-gray-600 text-sm gap-1'
                >
                  <div className='w-1/2 flex items-center justify-between'>
                    <p>{el.label}</p>
                    <p>:</p>
                  </div>
                  <div className='w-1/2 overflow-x-scroll whitespace-nowrap hide-scrollbar'>
                    {el.value || "-"}
                  </div>
                </div>
              ))}
            </div>
            <p className='text-gray-600 text-sm'>
              {resumeProvince.deskripsi || "-"}
            </p>
          </div>
        </div>
      ) : (
        <div className='w-full min-h-screen backgroundStyle'>
          <div className='flex flex-col gap-5 mx-44 py-10'>
            <p className='text-xl text-gray-600'>
              {resumeProvince.nama_provinsi}
            </p>
            <img
              src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/[${
                resumeProvince.xmin +
                "," +
                resumeProvince.ymin +
                "," +
                resumeProvince.xmax +
                "," +
                resumeProvince.ymax
              }]/1280x960?access_token=pk.eyJ1IjoiaGFmaXphbmFkbGkiLCJhIjoiY2s0M3pxdmtnMGRmODNkcG11a2RkdGEyNiJ9.zJ_0jcPOGZko34FBrPxDRA`}
              className='w-full rounded-lg'
            />
            <div className='flex flex-col gap-1 w-1/2'>
              {[
                {
                  label: translatedText("resume.numberIslands"),
                  value: resumeProvince.total_island,
                },
                {
                  label: translatedText("resume.area"),
                  value: resumeProvince.total_area,
                },
                {
                  label: translatedText("resume.coastlineLength"),
                  value: resumeProvince.total_coastline,
                },
                {
                  label: translatedText("resume.largestIsland"),
                  value: resumeProvince.largest_island,
                },
                {
                  label: translatedText("resume.smallestIsland"),
                  value: resumeProvince.smallest_island,
                },
                {
                  label: translatedText("resume.inhabitedIsland"),
                  value: resumeProvince.total_inhabited,
                },
                {
                  label: translatedText("resume.uninhabitedIsland"),
                  value: resumeProvince.total_uninhabited,
                },
              ].map((el) => (
                <div
                  key={el.label}
                  className='flex items-center text-gray-600 text-sm gap-1'
                >
                  <div className='w-1/2 flex items-center justify-between'>
                    <p>{el.label}</p>
                    <p>:</p>
                  </div>
                  <div className='w-1/2 overflow-x-scroll whitespace-nowrap hide-scrollbar'>
                    {el.value || "-"}
                  </div>
                </div>
              ))}
            </div>
            <p className='text-gray-600 text-sm'>
              {resumeProvince.deskripsi || "-"}
            </p>
          </div>
        </div>
      )}

      {/* Tabel dimulai dari halaman kedua */}
      <div style={{ pageBreakBefore: 'always' }}>
        <div className='flex flex-col gap-5 mx-44 py-10'>
          <h2 className='text-xl font-bold text-gray-600'>Jumlah Pulau Per Provinsi</h2>
          <table className="w-full text-black-2 print-table" border={1} style={{ border: "solid 1px #000", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th className='px-4 py-2 border'>No</th>
                <th className='px-4 py-2 border'>Nama Provinsi</th>
                <th className='px-4 py-2 border'>Jumlah Pulau</th>
              </tr>
            </thead>
            <tbody>
              {sortedTableProvince.map((data, index) => (
                <tr key={index}>
                  <td className='px-4 py-2 border text-center'>{index + 1}</td>
                  <td className='px-4 py-2 border'>{data.wadmpr}</td>
                  <td className='px-4 py-2 border text-center'>{data.total_pulau}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className='absolute bottom-0 w-full h-screen backgroundStyleBottom' />
      <style jsx>{`
        .backgroundStyle {
          background: url("/images/bg-doc-print.svg") no-repeat;
          background-size: contain;
        }
        .backgroundStyleBottom {
          background: url("/images/bg-doc-print-bottom.svg") no-repeat;
          background-size: contain;
          background-position: bottom right;
        }
        @media print {
          body {
            margin: 20mm; /* Atur margin halaman */
          }
          .print-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px; /* Jarak antara teks dan tabel */
          }
          .print-table th, .print-table td {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
          }
          .print-table th {
            background-color: #f2f2f2;
          }
          .print-table tr:nth-child(even) {
            background-color: #f9f9f9;
          }
          .print-table tr:hover {
            background-color: #ddd;
          }
        }
      `}</style>
    </div>
  );
});

export default ComponentToPrint;