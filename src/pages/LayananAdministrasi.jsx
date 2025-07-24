import hero from "../assets/hero-bg2.png";
import { useState } from "react";
import PopUpSuccess from "../components/PopUpSuccess";


function LayananAdministrasi() {
    const [layananDipilih, setLayananDipilih] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };
    return (

        <div>
            {/* content1 */}
            <div
                className="min-h-[60vh] bg-no-repeat bg-top bg-contain relative top-14"
                style={{
                    backgroundImage: `url(${hero})`,
                    backgroundSize: "100% auto",
                }}
            >
                <div className="absolute inset-0 flex items-start justify-center px-20 pt-40">
                    <div className="text-white max-w-2xl text-center">
                        <h1 className="text-2xl font-semibold leading-snug mb-3 text-white">
                            LAYANAN ADMINISTRASI
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            {layananDipilih === null && (
                <div className="flex items-center justify-center space-x-4 pt-30 pb-[40%]">
                    <button
                        onClick={() => setLayananDipilih("surat")}
                        className="bg-[#101524] hover:bg-gray-800 text-white px-20 py-10 rounded-lg font-semibold"
                    >
                        Surat Keterangan Siswa
                    </button>

                    <button
                        onClick={() => setLayananDipilih("beasiswa")}
                        className="bg-[#101524] hover:bg-gray-800 text-white px-6 py-10 rounded-lg font-semibold"
                    >
                        Permohonan Rekomendasi Beasiswa
                    </button>
                </div>
            )}


            {/* content3 */}
            {layananDipilih === "surat" && (

                <div className="w-full flex justify-center pb-[40%] pt-20 bg-white">
                    <form className="w-[60%]" onSubmit={handleSubmit}>

                        <h1 className="text-xl font-bold mb-6">
                            <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[8.5ch] after:bg-[#FEF600] after:rounded-full">
                                Data Keterangan Siswa
                            </span>
                        </h1>

                        <div className="grid grid-cols-2 gap-16">

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="nama" className="block text-sm font-medium text-[#101524] mb-1">
                                        Nama Lengkap <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nama"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                        placeholder="Masukkan Nama Lengkap"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#101524] mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                        placeholder="Masukkan email"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="telepon" className="block text-sm font-medium text-[#101524] mb-1">
                                        No Telepon <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="telepon"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                        placeholder="Masukkan nomor telepone"
                                    />
                                </div>


                            </div>


                            <div className="space-y-4">

                                <div>
                                    <label htmlFor="alamat" className="block text-sm font-medium text-[#101524] mb-1">
                                        Isi Pesan <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="alamat"
                                        rows="2"
                                        className="w-full px-3 py-8 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none resize-none"
                                        placeholder="Masukkan isi Keterangan"
                                    ></textarea>
                                </div>

                                <div className="flex justify-end pt-16 space-x-3">

                                    <button
                                        type="submit"
                                        onClick={() => setLayananDipilih(null)}
                                        className="bg-[#EF4444] hover:bg-red-600 text-white px-3 py-2 rounded-lg font-semibold"
                                    >
                                        Kembali
                                    </button>

                                    <button
                                        type="submit"

                                        className="bg-[#101524] hover:bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold"
                                    >
                                        Kirim
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            )}


            {/* content4 */}
            {layananDipilih === "beasiswa" && (
                <div className="w-full flex justify-center pb-[40%] pt-20 bg-white">
                    <form className="w-[60%]" onSubmit={handleSubmit}>

                        <h1 className="text-xl font-bold mb-6">
                            <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[8.5ch] after:bg-[#FEF600] after:rounded-full">
                                Data Keterangan Siswa
                            </span>
                        </h1>

                        <div className="grid grid-cols-2 gap-16">

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="nama" className="block text-sm font-medium text-[#101524] mb-1">
                                        Nama Lengkap <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nama"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                        placeholder="Masukkan Nama Lengkap"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#101524] mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                        placeholder="Masukkan email"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="telepon" className="block text-sm font-medium text-[#101524] mb-1">
                                        No Telepon <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="telepon"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                        placeholder="Masukkan nomor telepone"
                                    />
                                </div>


                            </div>


                            <div className="space-y-4">

                                <div>
                                    <label htmlFor="alamat" className="block text-sm font-medium text-[#101524] mb-1">
                                        Isi Pesan <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="alamat"
                                        rows="2"
                                        className="w-full px-3 py-8 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none resize-none"
                                        placeholder="Masukkan isi Keterangan Beasiswa"
                                    ></textarea>
                                </div>

                                <div className="flex justify-end pt-16 space-x-3">

                                    <button
                                        type="submit"
                                        onClick={() => setLayananDipilih(null)}
                                        className="bg-[#EF4444] hover:bg-red-600 text-white px-3 py-2 rounded-lg font-semibold"
                                    >
                                        Kembali
                                    </button>

                                    <button
                                        type="submit"

                                        className="bg-[#101524] hover:bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold"
                                    >
                                        Kirim
                                    </button>

                                </div>

                            </div>
                        </div>
                    </form>
                </div>

            )}

            {/* popup selesai */}
            {showPopup && (
                <PopUpSuccess
                    title="Selamat Data Anda Tersimpan di SMAS Kristen Bethel Jakarta"
                    message="Data telah kami terima dan akan segera di proses oleh tim administrasi"
                    buttonText="Selesai"
                    onDownload={() => {
                        // Tidak ada download, langsung ke home
                        window.location.href = "/";
                    }}
                />
            )}
        </div>

    );
}

export default LayananAdministrasi;