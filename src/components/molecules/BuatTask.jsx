import { useState } from "react";
import Paragraf from "../atoms/Paragraf";
import TextInput from "./TextInput";
import Select from "./Select";
import Button from "../atoms/Button";
import Modal from "./Modal";
import { CiSearch } from "react-icons/ci";
import { paginate } from "../../utils/paginate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import listBarang from "../../data/listBarang.json";
import TableCus from "./TableCus";
import { useDataPemindahan } from "../../context/dataPemindahan";

const BuatTask = () => {
  const [showingAddBarang, setShowingAddBarang] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { tambahDataPemindahan, dataPemindahan, resetDataPemindahan } =
    useDataPemindahan();

  const [paginatedData, setPaginatedData] = useState(
    paginate(listBarang, itemsPerPage)
  );

  const [tempDataPemindahan, setTempDataPemindahan] = useState([]);

  const totalPages = paginatedData.length;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleGoToPage = (value) => {
    const page = parseInt(value, 10);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setItemsPerPage(value);
    setPaginatedData(paginate(listBarang, value));

    setCurrentPage(1);
  };

  const renderPagination = () => {
    const maxPagesToShow = 3;
    const paginationItems = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`ml-3 border px-4 py-2 bg-white text-sm
              ${
                currentPage === i
                  ? "border-[#1890FF] text-[#1890FF]"
                  : "border-[#D9D9D9] text-black"
              }`}
          >
            {i}
          </button>
        );
      }
    } else {
      paginationItems.push(
        <div className="flex items-center">
          <button
            onClick={() => {
              if (currentPage > 1) {
                handlePageChange(currentPage - 1);
              }
            }}
            className={`mr-3 border px-4 py-3 bg-white text-sm`}
          >
            <IoIosArrowBack />
          </button>
          <button
            key={1}
            onClick={() => handlePageChange(1)}
            className={`mr-3 border px-4 py-2 bg-white text-sm
            ${
              currentPage === 1
                ? "border-[#1890FF] text-[#1890FF]"
                : "border-[#D9D9D9] text-black"
            }`}
          >
            1
          </button>
        </div>
      );

      if (currentPage > maxPagesToShow) {
        paginationItems.push(
          <span className="" key="left-dots">
            ...
          </span>
        );
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        paginationItems.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`mx-3 border px-4 py-2 bg-white text-sm
              ${
                currentPage === i
                  ? "border-[#1890FF] text-[#1890FF]"
                  : "border-[#D9D9D9] text-black"
              }`}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - maxPagesToShow) {
        paginationItems.push(<span key="right-dots">...</span>);
      }

      paginationItems.push(
        <>
          <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            className={`mx-3 border px-4 py-2 bg-white text-sm
            ${
              currentPage === totalPages
                ? "border-[#1890FF] text-[#1890FF]"
                : "border-[#D9D9D9] text-black"
            }`}
          >
            {totalPages}
          </button>
          <button
            onClick={() => {
              if (currentPage < totalPages) {
                handlePageChange(currentPage + 1);
              }
            }}
            className={`mr-3 border px-4 py-3 bg-white `}
          >
            <IoIosArrowForward />
          </button>
        </>
      );
    }

    return paginationItems;
  };

  const checkedAll = (e) => {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = e.target.checked;
    });

    // if checked, add to tempDataPemindahan
    if (e.target.checked) {
      const data = listBarang.map((item) => {
        return {
          kode: item.kode,
          nama: item.nama,
          merk: item.merk,
          jenis: item.jenis,
          gudang: item.gudang,
          stock: item.stock,
        };
      });
      setTempDataPemindahan(data);
    } else {
      setTempDataPemindahan([]);
    }
  };

  const checkedOne = (e) => {
    const kode = e.target.id;
    const isChecked = e.target.checked;

    if (isChecked) {
      const data = listBarang.find((item) => item.kode === kode);
      setTempDataPemindahan([...tempDataPemindahan, data]);
    } else {
      const data = tempDataPemindahan.filter((item) => item.kode !== kode);
      setTempDataPemindahan(data);
    }
  };

  return (
    <>
      <div className="mx-6 my-7 bg-white">
        <div className="px-6 border shadow-md py-4">
          <Paragraf size="16px" color="text-[#000]" text="Buat Task Baru" />
        </div>
        <div className="px-6 pt-8 pb-10">
          <div className="flex gap-8 item-center w-1/2">
            <TextInput
              name="task_no"
              text="Task No"
              placeholder="Task No"
              value="SM-PB-001/24/2024"
              disabled={true}
            />
            <Select
              text="Ditugaskan ke"
              options={[
                { value: "", label: "Pilih Karyawan" },
                { value: "1", label: "Karyawan 1" },
                { value: "2", label: "Karyawan 2" },
                { value: "3", label: "Karyawan 3" },
              ]}
            />
          </div>
          {dataPemindahan.length > 0 ? (
            <>
              <div className="flex justify-end">
                <Button
                  text="Tambah Barang"
                  onClick={() => {
                    setShowingAddBarang(true);
                    setTempDataPemindahan(dataPemindahan);
                  }}
                  colorBg="#E5A000"
                  className="text-white hover:bg-[#e5a000c7]"
                />
              </div>
              <TableCus />
            </>
          ) : (
            <div className="mt-16 mb-2 bg-[#FAFAFA] gap-2.5 border border-[#D9D9D9] py-8 flex flex-col justify-center items-center">
              <Paragraf
                size="14px"
                className="font-semibold"
                color="text-[#000]"
                text="Belum ada barang"
              />
              <Paragraf
                size="14px"
                className="font-normal"
                color="text-[#9CA3AF]"
                text="Silahkan tambah barang terlebih dahulu untuk mulai memindahkan"
              />
              <Button
                text="Tambah Barang"
                onClick={() => {
                  setShowingAddBarang(true);
                  setTempDataPemindahan(dataPemindahan);
                }}
                colorBg="#E5A000"
                className="text-white hover:bg-[#e5a000c7]"
              />
            </div>
          )}
          <div className="flex justify-end items-center mt-8 gap-4">
            <Button
              text="Batal"
              className="w-[8rem] border border-[#D9D9D9] hover:bg-[#fefefc] drop-shadow-sm text-black font-normal"
              colorBg="#FFFFFF"
              onClick={() => {
                resetDataPemindahan();
                window.location.reload();
              }}
            />
            <Button
              text="Generate Task"
              colorBg={dataPemindahan.length > 0 ? "#E5A000" : "#F5F5F5"}
              className={
                dataPemindahan.length > 0
                  ? "text-white hover:bg-[#e5a000c7]"
                  : "border border-[#D9D9D9] text-[#00000040] hover:bg-[#F5F5F5]"
              }
              onClick={() => {
                console.log(dataPemindahan);
              }}
            />
          </div>
        </div>
      </div>
      {showingAddBarang && (
        <Modal
          text="Tambah Barang"
          onClickClose={() => {
            setShowingAddBarang(false);
            setTempDataPemindahan([]);
          }}
        >
          <>
            <div className="border-t border-b border-[#D9D9D9] py-8">
              <div className="flex">
                <TextInput
                  name="kode_name_barang"
                  placeholder="Cari kode/nama barang"
                  onChange={(e) => {
                    // search all barang
                    const val = e.target.value;
                    const filteredData = listBarang.filter((item) => {
                      return (
                        item.kode.toLowerCase().includes(val.toLowerCase()) ||
                        item.nama.toLowerCase().includes(val.toLowerCase())
                      );
                    });
                    setPaginatedData(paginate(filteredData, itemsPerPage));
                    setCurrentPage(1);
                  }}
                />
                <button className="bg-[#E5A000] text-white px-4">
                  <CiSearch />
                </button>
              </div>
              <table className="w-full mt-4 border-collapse">
                <thead className="bg-[#FAFAFA]">
                  <tr>
                    <th className="py-3 text-left px-2">
                      <input
                        type="checkbox"
                        onChange={checkedAll}
                        checked={
                          tempDataPemindahan.length === listBarang.length
                        }
                      />
                    </th>
                    <th className="py-3 text-left px-2">Kode Barang</th>
                    <th className="py-3 text-left px-2">Nama Barang</th>
                    <th className="py-3 text-left px-2">Merk</th>
                    <th className="py-3 text-left px-2">Jenis Barang</th>
                    <th className="py-3 text-left px-2">Gudang</th>
                    <th className="py-3 text-left px-2">Total Stock (Pcs)</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.length > 0 ? (
                    paginatedData[currentPage - 1].map((item, index) => (
                      <tr
                        key={index}
                        className="py-3 text-left px-2 border-b border-gray-100"
                      >
                        <td className="py-3 text-left px-2">
                          <input
                            type="checkbox"
                            id={item.kode}
                            onChange={checkedOne}
                            checked={tempDataPemindahan.some(
                              (data) => data.kode === item.kode
                            )}
                          />
                        </td>
                        <td className="py-3 text-left px-2">{item.kode}</td>
                        <td className="py-3 text-left px-2">{item.nama}</td>
                        <td className="py-3 text-left px-2">{item.merk}</td>
                        <td className="py-3 text-left px-2">{item.jenis}</td>
                        <td className="py-3 text-left px-2">{item.gudang}</td>
                        <td className="py-3 text-left px-2">{item.stock}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center">
                        Data tidak ditemukan
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="flex items-center gap-3 justify-end">
                <div className="flex items-center mt-4">
                  {renderPagination()}
                </div>
                <select
                  className="mt-4 border border-[#D9D9D9] p-2"
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                >
                  <option value={5}>5/page</option>
                  <option value={10}>10/page</option>
                  <option value={20}>20/page</option>
                  <option value={50}>50/page</option>
                </select>
                <div className="flex items-center mt-4 gap-2">
                  <span>Go to</span>
                  <input
                    type="number"
                    min="1"
                    max={totalPages}
                    onChange={(e) => {
                      handleGoToPage(e.target.value);
                    }}
                    className="border border-[#D9D9D9] px-2 py-1 w-14"
                  />
                </div>
              </div>
            </div>
          </>
          <div className="flex justify-end items-center mt-8 gap-4">
            <Button
              text="Batal"
              className="w-[8rem] border border-[#D9D9D9] hover:bg-[#fefefc] drop-shadow-sm text-black font-normal"
              colorBg="#FFFFFF"
              onClick={() => {
                setShowingAddBarang(false);
                setTempDataPemindahan([]);
              }}
            />
            <Button
              text="Tambah ke Daftar Pemindahan"
              colorBg={tempDataPemindahan.length > 0 ? "#E5A000" : "#F5F5F5"}
              className={
                tempDataPemindahan.length > 0
                  ? "text-white hover:bg-[#e5a000c7]"
                  : "border border-[#D9D9D9] text-[#00000040] hover:bg-[#F5F5F5]"
              }
              onClick={() => {
                resetDataPemindahan();
                tambahDataPemindahan(tempDataPemindahan);

                setShowingAddBarang(false);
                setTempDataPemindahan([]);
              }}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default BuatTask;
