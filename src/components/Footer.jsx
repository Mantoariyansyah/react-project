import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Import gambar
// import logo from "/src/assets/logo.png";
import twett from "../assets/img/twett.png";
import fb from "../assets/img/fb.png";
import instagram from "../assets/img/instagram.png";
import gmail from "../assets/img/gmail.png";

function Footer() {
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

    return (
        <footer className="bg-[#0B0F1A] text-white pt-10 pb-6 px-32">
            <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-16">
                <div>
                    <img
                        src="/src/assets/logo.png"
                        alt="Logo"
                        className="w-24 mb-4"
                    />
                    <p className="text-sm leading-relaxed mb-4 font-light">
                        SMAS Kristen Bethel Jakarta merupakan salah satu sekolah jenjang SMA
                        berstatus swasta berpredikat “A” yang ada di Provinsi DKI Jakarta.
                    </p>

                    <div className="flex gap-3 mt-4">
                        {[
                            { href: "/", src: twett, alt: "Twitter" },
                            { href: "/", src: fb, alt: "Facebook" },
                            { href: "/", src: instagram, alt: "Instagram" },
                            { href: "/", src: gmail, alt: "Email" },
                        ].map((item, index) => (
                            <Link
                                to={item.href}
                                key={index}
                                className="w-7 h-7 flex items-center justify-center border-2 border-[#FEF600] text-yellow-400 rounded-md hover:border-yellow-500 hover:text-[#101524] transition"
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-5 h-5 object-contain"
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="pl-20">
                    <h3 className="text-lg font-bold text-[#FEF600] mb-4">Jelajah</h3>
                    <ul className="space-y-2 text-sm font-medium">
                        <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#FEF600]">Home</Link></li>
                        <li><Link to="/profil" className="hover:text-[#FEF600]">Profil Sekolah</Link></li>
                        <li><Link to="/jurusan" className="hover:text-[#FEF600]">Akademik</Link></li>
                        <li><Link to="/berita" className="hover:text-[#FEF600]">Berita</Link></li>
                        <li><Link to="/galeri" className="hover:text-[#FEF600]">Galeri</Link></li>
                        <li><Link to="/sarana" className="hover:text-[#FEF600]">Fasilitas & Layanan</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-[#FEF600] mb-4">Kontak</h3>
                    <p className="text-sm mb-2 font-light">Telepon : (021) 5707687</p>
                    <p className="text-sm font-light">
                        Jl. K.S. Tubun No.95 1, <br />
                        RT.1/RW.4, Petamburan, <br />
                        Kecamatan Tanah Abang, Kota Jakarta Pusat, <br />
                        Daerah Khusus Ibukota Jakarta 10260.
                    </p>
                </div>
            </div>

            <hr className="border-gray-500 my-6 border-1" />
            <p className="text-center text-sm text-[#FEF600] font-light">
                Copyright © SMAS Kristen Bethel Jakarta. All right Reserved.
            </p>
        </footer>
    );
}

export default Footer;
