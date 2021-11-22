import React, { useEffect, useState, useContext } from "react";
import Select from "../core/select";
import AppContext from "../../context/AppContext";
import MapContext from "../../context/MapContext";

const FilterRegion = ({ inputValue, setInputValue, idItem, type }) => {
  const { handleSetSnack } = useContext(AppContext);
  const { setActiveFilter, setFilterArr } = useContext(MapContext);
  const [provData, setProvData] = useState([]);
  const [kotaData, setKotaData] = useState([]);
  const [kecData, setKecData] = useState([]);
  const [kelData, setKelData] = useState([]);
  const [selectedProv, selectProv] = useState("");
  const [selectedKota, selectKota] = useState("");
  const [selectedKec, selectKec] = useState("");
  const [selectedKel, selectKel] = useState("");

  const getKelurahan = async (kecamatan) => {
    try {
      const res = await fetch("/api/titik-pulau/keldesa?kec=" + kecamatan, {
        method: "GET",
      });
      const resData = await res.json();
      setKelData(
        resData.map((el) => {
          return { label: el, value: el };
        })
      );
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  };

  const getKecamatan = async (kota) => {
    try {
      const res = await fetch("/api/titik-pulau/kecamatan?kabkota=" + kota, {
        method: "GET",
      });
      const resData = await res.json();
      setKecData(
        resData.map((el) => {
          return { label: el, value: el };
        })
      );
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  };

  const getKota = async (prov) => {
    try {
      const res = await fetch("/api/titik-pulau/kabkota?prov=" + prov, {
        method: "GET",
      });
      const resData = await res.json();
      setKotaData(
        resData.map((el) => {
          return { label: el, value: el };
        })
      );
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  };

  const getProv = async () => {
    try {
      const res = await fetch("/api/titik-pulau/provinsi", {
        method: "GET",
      });
      const resData = await res.json();
      setProvData(
        resData.map((el) => {
          return { label: el, value: el };
        })
      );
    } catch (error) {
      handleSetSnack(error.message, "error");
    }
  };

  useEffect(() => {
    getProv();
  }, []);

  return (
    <div className='flex-1 flex flex-col gap-2'>
      <Select
        value={typeof inputValue === "string" ? selectedProv : inputValue[0]}
        placeholder={"Pilih Provinsi"}
        items={provData}
        onChange={(item) => {
          selectProv(item);
          setFilterArr((prev) => {
            let c = [...prev];
            let d = prev.findIndex((el) => el.id === idItem);
            c[d].content = [item];
            c[d].selectObj = type;
            return [...c];
          });
          setActiveFilter((prev) => {
            if (prev.length > 0) {
              if (prev.findIndex((el) => el.value === "wadmpr") !== -1) {
                let arr = [...prev];
                arr[prev.findIndex((el) => el.value === "wadmpr")].content =
                  item.label;
                arr[prev.findIndex((el) => el.value === "wadmpr")].label =
                  item.label;
                return arr;
              } else {
                let obj = item;
                obj.content = item.label;
                obj.value = "wadmpr";
                return [...prev, obj];
              }
            } else {
              let obj = item;
              obj.content = item.label;
              obj.value = "wadmpr";
              return [obj];
            }
          });

          setInputValue((prev) => {
            if (typeof prev === "string") {
              return [item];
            } else {
              let a = prev;
              a[0] = item;
              return a;
            }
          });
          kotaData.length === 0 ? getKota(item.value) : null;
        }}
      />
      {selectedProv || inputValue[1] ? (
        <Select
          value={inputValue[1] ? inputValue[1] : selectedKota}
          placeholder={"Pilih Kab/Kota"}
          items={kotaData}
          onChange={(item) => {
            selectKota(item);
            setFilterArr((prev) => {
              let c = [...prev];
              let d = prev.findIndex((el) => el.id === idItem);
              c[d].content[1]
                ? (c[d].content[1] = item)
                : c[d].content.push(item);
              return [...c];
            });
            setActiveFilter((prev) => {
              if (prev.length > 0) {
                if (prev.findIndex((el) => el.value === "wadmkk") !== -1) {
                  let arr = [...prev];
                  arr[prev.findIndex((el) => el.value === "wadmkk")].content =
                    item.label;
                  arr[prev.findIndex((el) => el.value === "wadmkk")].label =
                    item.label;
                  return arr;
                } else {
                  let obj = item;
                  obj.content = item.label;
                  obj.value = "wadmkk";
                  return [...prev, obj];
                }
              } else {
                let obj = item;
                obj.content = item.label;
                obj.value = "wadmkk";
                return [obj];
              }
            });
            setInputValue((prev) => {
              if (prev[1]) {
                let a = [...prev];
                prev[1] = item;
                return a;
              } else {
                let a = [...prev];
                a.push(item);
                return a;
              }
            });
            kecData.length === 0 ? getKecamatan(item.value) : null;
          }}
        />
      ) : null}
      {selectedKota || inputValue[2] ? (
        <Select
          value={inputValue[2] ? inputValue[2] : selectedKec}
          placeholder={"Pilih Kecamatan"}
          items={kecData}
          onChange={(item) => {
            selectKec(item);
            setFilterArr((prev) => {
              let c = [...prev];
              let d = prev.findIndex((el) => el.id === idItem);
              c[d].content[2]
                ? (c[d].content[2] = item)
                : c[d].content.push(item);
              return [...c];
            });
            setActiveFilter((prev) => {
              if (prev.length > 0) {
                if (prev.findIndex((el) => el.value === "wadmkc") !== -1) {
                  let arr = [...prev];
                  arr[prev.findIndex((el) => el.value === "wadmkc")].content =
                    item.label;
                  arr[prev.findIndex((el) => el.value === "wadmkc")].label =
                    item.label;
                  return arr;
                } else {
                  let obj = item;
                  obj.content = item.label;
                  obj.value = "wadmkc";
                  return [...prev, obj];
                }
              } else {
                let obj = item;
                obj.content = item.label;
                obj.value = "wadmkc";
                return [obj];
              }
            });
            setInputValue((prev) => {
              if (prev[2]) {
                let a = [...prev];
                prev[2] = item;
                return a;
              } else {
                let a = [...prev];
                a.push(item);
                return a;
              }
            });
            kelData.length === 0 ? getKelurahan(item.value) : null;
          }}
        />
      ) : null}
      {selectedKec || inputValue[3] ? (
        <Select
          value={inputValue[3] ? inputValue[3] : selectedKel}
          placeholder={"Pilih Kelurahan"}
          items={kelData}
          onChange={(item) => {
            selectKel(item);
            setFilterArr((prev) => {
              let c = [...prev];
              let d = prev.findIndex((el) => el.id === idItem);
              c[d].content[3]
                ? (c[d].content[3] = item)
                : c[d].content.push(item);
              return [...c];
            });
            setActiveFilter((prev) => {
              if (prev.length > 0) {
                if (prev.findIndex((el) => el.value === "wadmkd") !== -1) {
                  let arr = [...prev];
                  arr[prev.findIndex((el) => el.value === "wadmkd")].content =
                    item.label;
                  arr[prev.findIndex((el) => el.value === "wadmkd")].label =
                    item.label;
                  return arr;
                } else {
                  let obj = item;
                  obj.content = item.label;
                  obj.value = "wadmkd";
                  return [...prev, obj];
                }
              } else {
                let obj = item;
                obj.content = item.label;
                obj.value = "wadmkd";
                return [obj];
              }
            });
            setInputValue((prev) => {
              if (prev[3]) {
                let a = [...prev];
                prev[3] = item;
                return a;
              } else {
                let a = [...prev];
                a.push(item);
                return a;
              }
            });
          }}
        />
      ) : null}
    </div>
  );
};

export default FilterRegion;
