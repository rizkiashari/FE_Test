import { Fragment, useState } from "react";

import listLokasi from "../../data/listLokasi.json";
import Modal from "./Modal";
import Button from "../atoms/Button";
import dataPemindahans from "../../data/listPemindahan.json";
import addDataLokasi from "../../data/listAddLokasi.json";
import { FaTrash } from "react-icons/fa6";

const TableCus = () => {
  const [openRows, setOpenRows] = useState({});
  const [isShowLoc, setIsShowLoc] = useState(false);
  const [currentKode, setCurrentKode] = useState("");

  const [dataPemindahan, setDataPemindahan] = useState(dataPemindahans);

  const [tempAllLoc, setTempAllLoc] = useState([]);

  const toggleRow = (kodeBarang) => {
    setOpenRows((prev) => ({
      ...prev,
      [kodeBarang]: !prev[kodeBarang],
    }));
  };

  const showLokasi = (kodeBarang) => {
    setIsShowLoc(true);
    setCurrentKode(kodeBarang);
  };

  const checkAll = (e) => {
    // all lokasi checked
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = e.target.checked;
    });

    if (e.target.checked) {
      const data = listLokasi.filter(
        (lokasi) =>
          !tempAllLoc.some((temp) => temp.kode === lokasi.kode) &&
          !addDataLokasi.some((add) => add.kode === lokasi.kode)
      );
      setTempAllLoc((prev) => [...prev, ...data]);
    } else {
      setTempAllLoc([]);
    }
  };

  const checkedOne = (e) => {
    const lokasi = listLokasi.find((lokasi) => lokasi.kode === e.target.id);
    if (e.target.checked) {
      setTempAllLoc((prev) => [...prev, lokasi]);
    } else {
      setTempAllLoc((prev) =>
        prev.filter((lokasi) => lokasi.kode !== e.target.id)
      );
    }
  };

  const addLokasiToDataPemindahan = () => {
    const newDataPemindahan = dataPemindahan.map((item) => {
      if (item.kode === currentKode) {
        const newLokasi =
          item.lokasis?.filter(
            (lokasi) =>
              !tempAllLoc.some((temp) => temp.kode === lokasi.kode) &&
              !addDataLokasi.some((add) => add.kode === lokasi.kode)
          ) || [];

        newLokasi.push(...tempAllLoc);

        return {
          ...item,
          lokasis: newLokasi || [],
        };
      }
      return item;
    });

    // update data pemindahan
    console.log(newDataPemindahan);

    setDataPemindahan(newDataPemindahan);

    console.log("Data Pemindahan", dataPemindahan);

    setTempAllLoc([]);
    setIsShowLoc(false);
  };

  return (
    <>
      <div className="item-table-container">
        <table className="item-table">
          <thead>
            <tr>
              <th>Kode Barang</th>
              <th>Nama Barang</th>
              <th>Merk</th>
              <th>Jenis Barang</th>
              <th>Gudang</th>
              <th>Total Stock (Pcs)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataPemindahan.map((item, idx) => (
              <Fragment key={idx}>
                <tr>
                  <td>
                    <button
                      onClick={() => toggleRow(item.kode)}
                      className="toggle-button"
                    >
                      {openRows[item.kode] ? "▼" : "►"}
                    </button>
                    {item.kode}
                  </td>
                  <td>{item.nama}</td>
                  <td>{item.merk}</td>
                  <td>{item.jenis}</td>
                  <td>{item.gudang}</td>
                  <td>{item.stock}</td>
                  <td>
                    <button
                      onClick={() => {
                        showLokasi(item.kode);
                      }}
                      className="lokasi-button"
                    >
                      + Lokasi
                    </button>
                  </td>
                </tr>
                {openRows[item.kode] && (
                  <tr>
                    <td colSpan="7" className="detail-row">
                      {item?.lokasis?.lemgth > 0 ? (
                        <table className="lokasi-table">
                          <thead>
                            <tr>
                              <th>Lokasi Awal</th>
                              <th>QTY (PCS)</th>
                              <th>Satuan</th>
                              <th>Jumlah</th>
                              <th>Tindakan</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.lokasis.map((lokasi, index) => (
                              <tr key={index}>
                                <td>{lokasi.gedung}</td>
                                <td></td>
                                <td></td>
                                <td>{lokasi.volume}</td>
                                <td>
                                  <FaTrash
                                    className="trash-icon"
                                    onClick={() => {
                                      console.log("Delete", lokasi);
                                    }}
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <div className="no-lokasi">
                          Belum ada lokasi <br />
                          <a href="#" className="lokasi-link">
                            Silahkan pilih dan tambahkan lokasi dengan menekan
                            &quot;+ Lokasi&quot;
                          </a>
                        </div>
                      )}
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {isShowLoc && (
        <Modal
          text="Pilih Lokasi"
          onClickClose={() => {
            setIsShowLoc(false);
            setTempAllLoc([]);
          }}
        >
          <table className="w-full mt-4 border-collapse">
            <thead className="bg-[#FAFAFA]">
              <tr>
                <th className="py-3 text-left px-2">
                  <input
                    type="checkbox"
                    onChange={checkAll}
                    checked={tempAllLoc.length === listLokasi.length}
                  />
                </th>
                <th className="py-3 text-left px-2">Nama Lokasi</th>
                <th className="py-3 text-left px-2">Gedung</th>
                <th className="py-3 text-left px-2">Jenis</th>
                <th className="py-3 text-left px-2">Volume</th>
                <th className="py-3 text-left px-2">Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              {listLokasi.map((item, index) => (
                <tr
                  key={index}
                  className="py-3 text-left px-2 border-b border-gray-100"
                >
                  <td className="py-3 text-left px-2">
                    <input
                      type="checkbox"
                      id={item.kode}
                      checked={tempAllLoc.some(
                        (lokasi) => lokasi.kode === item.kode
                      )}
                      onChange={checkedOne}
                    />
                  </td>
                  <td className="py-3 text-left px-2">{item.nama}</td>
                  <td className="py-3 text-left px-2">{item.gedung}</td>
                  <td className="py-3 text-left px-2">{item.jenis}</td>
                  <td className="py-3 text-left px-2">{item.volume}</td>
                  <td className="py-3 text-left px-2">{item.deskripsi}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end items-center mt-8 gap-4">
            <Button
              text="Batal"
              className="w-[8rem] border border-[#D9D9D9] hover:bg-[#fefefc] drop-shadow-sm text-black font-normal"
              colorBg="#FFFFFF"
              onClick={() => {
                setTempAllLoc([]);
                setIsShowLoc(false);
              }}
            />
            <Button
              text="Tambahkan"
              colorBg={tempAllLoc.length > 0 ? "#E5A000" : "#F5F5F5"}
              className={
                tempAllLoc.length > 0
                  ? "text-white hover:bg-[#e5a000c7]"
                  : "border border-[#D9D9D9] text-[#00000040] hover:bg-[#F5F5F5]"
              }
              onClick={addLokasiToDataPemindahan}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default TableCus;
