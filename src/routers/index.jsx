import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import RootPage from "../layout/RootPage";
import Login from "../pages/Login";

const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route path='/' index element={<Pengaduan />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/data-masuk' element={<DataMasuk />} />
        <Route path='/data-riwayat' element={<Riwayat />} />
        <Route path='/data-laporan' element={<DataLaporan />} />
        <Route path='/data-user' element={<DataUser />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/update-profil' element={<UpdateProfil />} />
        <Route path='/:sub/:id' element={<DetailLayanan />} />
        <Route path='*' element={<ErrorPage />} /> */}
      </Route>
    </Route>
  )
);

export default Routers;
