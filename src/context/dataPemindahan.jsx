/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

// Inisialisasi context
const DataPemindahanContext = createContext();

export const useDataPemindahan = () => useContext(DataPemindahanContext);

export const DataPemindahanProvider = ({ children }) => {
  const [dataPemindahan, setDataPemindahan] = useState([]);

  const tambahDataPemindahan = (data) => {
    setDataPemindahan((prevData) => [...prevData, ...data]);
  };

  const resetDataPemindahan = () => {
    setDataPemindahan([]);
  };

  return (
    <DataPemindahanContext.Provider
      value={{
        dataPemindahan,
        tambahDataPemindahan,
        resetDataPemindahan,
      }}
    >
      {children}
    </DataPemindahanContext.Provider>
  );
};
