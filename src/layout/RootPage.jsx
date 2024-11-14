import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const RootPage = () => {
  console.log("RootPage");

  useEffect(() => {
    // router replace to login
    // window.location.replace("/login");
  }, []);

  return (
    <div className="font-roboto">
      <Outlet />
    </div>
  );
};

export default RootPage;
