import { Fragment, useState } from "react";
import listBarang from "../../data/listBarang.json";
import listLokasi from "../../data/listLokasi.json";
import Modal from "./Modal";
import Button from "../atoms/Button";

const TableCus = () => {
  const [openRows, setOpenRows] = useState({});
  const [isShowLoc, setIsShowLoc] = useState(true);

  const toggleRow = (kodeBarang) => {
    setOpenRows((prev) => ({
      ...prev,
      [kodeBarang]: !prev[kodeBarang],
    }));
  };

  const showLokasi = (kodeBarang) => {};

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
            {listBarang.map((item, idx) => (
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
                      {item.lokasi ? (
                        <div>Lokasi: {item.lokasi}</div>
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
        <Modal text="Pilih Lokasi">
          <table className="w-full mt-4 border-collapse">
            <thead className="bg-[#FAFAFA]">
              <tr>
                <th className="py-3 text-left px-2">
                  <input type="checkbox" />
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
                    <input type="checkbox" />
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
            />
            <Button
              text="Tambahkan"
              colorBg="#F5F5F5"
              className={
                "border border-[#D9D9D9] text-[#00000040] hover:bg-[#F5F5F5]"
              }
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default TableCus;
