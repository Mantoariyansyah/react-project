import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDropdown = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setOpenMenu(null);
    };

    const handleClickOutside = () => setOpenMenu(null);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const bgNavbar = isScrolled ? "bg-black text-[#FEF600]" : "bg-white text-black";
  const hoverLink = isScrolled
    ? "hover:bg-[#FEF600] hover:text-black"
    : "hover:bg-[#101524] hover:text-white";
  const dropdownBg = isScrolled ? "bg-black" : "bg-white";
  const dropdownText = isScrolled ? "text-[#FEF600]" : "text-black";
  const dropdownHover = isScrolled
    ? "hover:bg-[#FEF600] hover:text-black"
    : "hover:bg-[#101524] hover:text-white";

  return (
    <nav className="top-20 left-0 w-full z-30 flex justify-center fixed transition-all duration-300">
      <div
        className={`rounded-lg shadow-lg px-8 py-2 transition-all duration-300 ${bgNavbar}`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="flex gap-4 items-center text-sm font-medium whitespace-nowrap">
          <li>
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className={`px-2 py-1 rounded-lg transition ${hoverLink}`}
            >
              Home
            </Link>
          </li>

          {/* Dropdown Builder */}
          {[
            {
              label: "Profil",
              name: "profil",
              items: [
                { to: "/profil", label: "Profil" },
                { to: "/sejarah", label: "Sejarah" },
                { to: "/visimisi", label: "Visi & Misi" },
                { to: "/strukturorg", label: "Struktur Organisasi" },
                { to: "/tenagapddk", label: "Tenaga Pendidik" },
                { to: "/alumni", label: "Alumni Sekolah" },
              ],
              width: "w-44",
            },
            {
              label: "Akademik",
              name: "akademik",
              items: [
                { to: "/jurusan", label: "Jurusan" },
                { to: "/prestasi", label: "Prestasi Siswa" },
                { to: "/akademik/ekstrakurikuler", label: "Kalender Akademik" },
                { to: "/jadwal-pelajaran", label: "Jadwal Pelajaran" },
              ],
              width: "w-44",
            },
            {
              label: "Kegiatan",
              name: "kegiatan",
              items: [
                { to: "/fasilitas/perpustakaan", label: "OSIS Sekolah" },
                { to: "/ekstrakulikuler", label: "Ekstrakulikuler" },
              ],
              width: "w-56",
            },
            {
              label: "Fasilitas & Layanan",
              name: "fasilitas",
              items: [
                { to: "/sarana", label: "Sarana & Prasarana" },
                { to: "/layananadministrasi", label: "Layanan Administasi" },
                { to: "/layananprestasi", label: "Layanan Prestasi" },
                { to: "/layananalumni", label: "Layanan Alumni" },
              ],
              width: "w-56",
            },
          ].map((menu) => (
            <li className="relative" key={menu.name}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDropdown(menu.name);
                }}
                className={`px-2 py-1 rounded-lg transition flex items-center gap-1 ${hoverLink}`}
              >
                {menu.label} <ChevronDown className="w-4 h-4" />
              </button>

              {openMenu === menu.name && (
                <ul
                  className={`absolute left-0 top-10 ${menu.width} shadow rounded-md p-0 z-50 ${dropdownBg}`}
                >
                  {menu.items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => window.scrollTo(0, 0)}
                        className={`block px-3 py-2 transition ${dropdownText} ${dropdownHover}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li>
            <Link
              to="/berita"
              onClick={() => window.scrollTo(0, 0)}
              className={`px-2 py-1 rounded-lg transition ${hoverLink}`}
            >
              Berita
            </Link>
          </li>
          <li>
            <Link
              to="/galeri"
              onClick={() => window.scrollTo(0, 0)}
              className={`px-2 py-1 rounded-lg transition ${hoverLink}`}
            >
              Galeri
            </Link>
          </li>
          <li>
            <Link
              to="/kontak"
              onClick={() => window.scrollTo(0, 0)}
              className={`px-2 py-1 rounded-lg transition ${hoverLink}`}
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
