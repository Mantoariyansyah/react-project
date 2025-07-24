import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderTop from "./components/HeaderTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import DaftarSiswa from "./pages/DaftarSiswa";
import Profil from "./pages/Profil";
import 'swiper/css';
import 'swiper/css/autoplay';
import Sejarah from "./pages/Sejarah";
import VisiMisi from "./pages/VisiMisi";
import StrukturOrg from "./pages/StrukturOrg";
import TenagaPddk from "./pages/TenagaPddk";
import Alumni from "./pages/Alumni";
import Jurusan from "./pages/Jurusan";
import Prestasi from "./pages/Prestasi";
import JadwalPel from "./pages/JadwalPel";
import Berita from "./pages/Berita";
import IsiBerita from "./pages/IsiBerita";
import Galeri from "./pages/Galeri";
import Ekstrakulikuler from "./pages/Ekstrakulikuler";
import Sarana from "./pages/Sarana";
import LayananPrestasi from "./pages/LayananPrestasi";
import LayananAlumni from "./pages/LayananAlumni";
import Kontak from "./pages/Kontak";
import LayananAdministrasi from "./pages/LayananAdministrasi";
import ScrollTotop from "./components/ScrollTotop";
import Osis from "./pages/Osis";
import Kaldemik from "./pages/Kaldemiik";


function App() {
  return (
    <Router>
      <HeaderTop />
      <Navbar />
      <ScrollTotop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daftarsiswa" element={<DaftarSiswa />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/sejarah" element={<Sejarah />} />
        <Route path="/visimisi" element={<VisiMisi />} />
        <Route path="/strukturorg" element={<StrukturOrg />} />
        <Route path="/tenagapddk" element={<TenagaPddk />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/jurusan" element={<Jurusan />} />
        <Route path="/prestasi" element={<Prestasi />} />
        <Route path="/kaldemik" element={<Kaldemik />} />
        <Route path="/jadwal-pelajaran" element={<JadwalPel />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/isiberita" element={<IsiBerita />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/osis" element={<Osis />} />
        <Route path="/ekstrakulikuler" element={<Ekstrakulikuler />} />
        <Route path="/sarana" element={<Sarana />} />
        <Route path="/layananadministrasi" element={<LayananAdministrasi />} />
        <Route path="/layananprestasi" element={<LayananPrestasi />} />
        <Route path="/layananAlumni" element={<LayananAlumni />} />
        <Route path="/kontak" element={<Kontak />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
