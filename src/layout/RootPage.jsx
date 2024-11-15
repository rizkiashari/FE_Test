import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const RootPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // navigate("/login");
    const userLocalStorage = localStorage.getItem("dataUser");

    if (userLocalStorage) {
      // redirect to /pemindahan-barang
      navigate("/pemindahan-barang");
    } else {
      navigate("/login");
    }
    // url / set to url /pemindahan-barang
    if (location.pathname === "/") navigate("/pemindahan-barang");
  }, [location.pathname, navigate]);

  return (
    <div className="font-roboto bg-[#F0F2F5] min-h-screen">
      <Outlet />
    </div>
  );
};

export default RootPage;
