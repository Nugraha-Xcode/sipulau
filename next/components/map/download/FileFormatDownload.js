import React, { useState, useEffect } from "react";
import Button from "../../core/Button";
import Modal from "../../modal";
import { Dropdown } from "../sidebar-content/core";

const FileFormatDownload = ({ type, setType, handleDownload }) => {
  // dropdown valued
  const value = [
    { label: "CSV", value: "csv" },
    { label: "SHP", value: "shp" },
  ];
  const [ndaModal, setNdaModal] = useState(false);
  const [isAccept, setAccept] = useState(false);

  useEffect(() => {
    setAccept(false);
  }, [ndaModal]);

  return (
    <div className='flex flex-col gap-2'>
      <Dropdown
        value={value}
        onValueSelected={(item) => setType(item)}
        valueSelected={type}
        gapOptions='25px'
        direction='up'
      />
      <button
        data-cy='download-feature-add-aoi-button'
        onClick={() => {
          setNdaModal(true);
        }}
        className={`p-1 bg-main-blue text-white w-full text-sm rounded-lg py-2`}
      >
        <p>Proceed</p>
      </button>

      <Modal
        isShowing={ndaModal}
        handleModal={() => {
          setNdaModal(false);
        }}
        size='md'
      >
        <div className='py-5 px-8 flex flex-col gap-2'>
          <div className='flex items-center justify-between'>
            <img src='/images/big-logo.svg' alt='logo' className='w-14 h-14' />
            <button
              onClick={() => {
                setNdaModal(false);
              }}
            >
              <img
                src='/images/ic-close.svg'
                alt='close button'
                className='w-3 h-3'
              />
            </button>
          </div>
          <p className='text-xl text-gray-900 font-semibold'>
            Non-Disclosure Agreement (NDA)
          </p>
          <p className='text-xs text-gray-900 text-justify'>
            Informasi Geospasial Dasar (IGD) yang terdapat dalam SI Pulau ini
            adalah produk Badan Informasi Geospasial (BIG) dan hak ciptanya
            dimiliki oleh BIG. Pengguna diijinkan dan dibebaskan untuk
            mengunduh, mendistribusikan, mengadaptasi atau membuat turunan IGD
            yang ada dalam website ini, dengan syarat mencantumkan sumber
            informasi/data berasal dari BIG. Pengguna tidak diperkenankan untuk
            memperjualbelikan kembali segala data yang diperoleh dari SI Pulau
            ini.
          </p>
          <p className='text-xs text-gray-900 text-justify'>Sitasi:</p>
          <p className='text-xs text-gray-900 text-justify'>
            Badan Informasi Geospasial Republik Indonesia, 2021. Titik Toponim
            Pulau Indonesia. Bogor, Jawa Barat. Diakses dari :
            http://sipulau.big.go.id
          </p>
          <div className='flex items-center gap-2 justify-center my-2'>
            <input
              type='checkbox'
              id='acceptTermCondition'
              name='acceptTermCondition'
              onChange={() => {
                setAccept((prev) => !prev);
              }}
            />
            <label for='acceptTermCondition' className='text-blue-500 text-xs'>
              Accept Terms & Condition
            </label>
          </div>
          <Button
            variant='normal'
            isActive={isAccept}
            onClick={() => {
              handleDownload();
              setNdaModal(false);
            }}
            className='text-sm'
          >
            Download
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default FileFormatDownload;
