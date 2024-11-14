import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import RootPage from "../layout/RootPage";
import Login from "../pages/Login";
import PemindahanBarang from "../pages/PemindahanBarang";

const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route path="/login" element={<Login />} />
        <Route path="/pemindahan-barang" element={<PemindahanBarang />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Route>
  )
);

export default Routers;
