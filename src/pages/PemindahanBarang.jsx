import Breadcumb from "../components/molecules/Breadcumb";
import BuatTask from "../components/molecules/BuatTask";
import Header from "../components/molecules/Header";

const PemindahanBarang = () => {
  return (
    <div>
      <div className="border shadow-md bg-white">
        <Header text="Warehouse Management System" />
      </div>
      <Breadcumb />
      <BuatTask />
    </div>
  );
};

export default PemindahanBarang;
