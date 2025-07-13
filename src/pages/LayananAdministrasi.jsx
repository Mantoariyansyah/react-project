import hero from "../assets/hero-bg2.png";
import { useState } from "react";


function LayananAdministrasi() {
    const [layananDipilih, setLayananDipilih] = useState(null);

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
                    <form className="w-[60%]">
                        
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
                                    <label htmlFor="nisn" className="block text-sm font-medium text-[#101524] mb-1">
                                        NISN <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nisn"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                        placeholder="Masukkan NISN"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="tempat" className="block text-sm font-medium text-[#101524] mb-1">
                                        Tempat Lahir <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="tempat"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                        placeholder="Masukkan tempat lahir"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="tanggal" className="block text-sm font-medium text-[#101524] mb-1">
                                        Tanggal Lahir <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="tanggal"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                    />
                                </div>

                            </div>


                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="gender" className="block text-sm font-medium text-[#101524] mb-1">
                                        Jenis Kelamin <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="gender"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                    >
                                        <option value="">Pilih jenis kelamin</option>
                                        <option value="L">Laki-laki</option>
                                        <option value="P">Perempuan</option>
                                    </select>
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

                                <div>
                                    <label htmlFor="alamat" className="block text-sm font-medium text-[#101524] mb-1">
                                        Alamat Lengkap <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="alamat"
                                        rows="2"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none resize-none"
                                        placeholder="Masukkan alamat lengkap"
                                    ></textarea>
                                </div>

                                <div className="flex justify-end pt-4 space-x-3">

                                      <button
                                        type="submit"
                                         onClick={() => setLayananDipilih(null)}
                                        className="bg-[#EF4444] hover:bg-red-600 text-white px-3 py-2 rounded-lg font-semibold"
                                    >
                                        Kembali
                                    </button>

                                    <button
                                        type="submit"
                                         onClick={() => setLayananDipilih(null)}
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
                    <form className="w-[60%]">

                        <h1 className="text-xl font-bold mb-6">
                            <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[8.5ch] after:bg-[#FEF600] after:rounded-full">
                                Data Profil Beasiswa
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
                                    <label htmlFor="nisn" className="block text-sm font-medium text-[#101524] mb-1">
                                        NISN <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nisn"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                        placeholder="Masukkan NISN"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="tempat" className="block text-sm font-medium text-[#101524] mb-1">
                                        Tempat Lahir <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="tempat"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                        placeholder="Masukkan tempat lahir"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="tanggal" className="block text-sm font-medium text-[#101524] mb-1">
                                        Tanggal Lahir <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="tanggal"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                    />
                                </div>

                            </div>


                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="gender" className="block text-sm font-medium text-[#101524] mb-1">
                                        Jenis Kelamin <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="gender"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                    >
                                        <option value="">Pilih jenis kelamin</option>
                                        <option value="L">Laki-laki</option>
                                        <option value="P">Perempuan</option>
                                    </select>
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

                                <div>
                                    <label htmlFor="alamat" className="block text-sm font-medium text-[#101524] mb-1">
                                        Alamat Lengkap <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="alamat"
                                        rows="2"
                                        className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none resize-none"
                                        placeholder="Masukkan alamat lengkap"
                                    ></textarea>
                                </div>

                                  <div className="flex justify-end pt-4 space-x-3">

                                      <button
                                        type="submit"
                                         onClick={() => setLayananDipilih(null)}
                                        className="bg-[#EF4444] hover:bg-red-600 text-white px-3 py-2 rounded-lg font-semibold"
                                    >
                                        Kembali
                                    </button>

                                    <button
                                        type="submit"
                                         onClick={() => setLayananDipilih(null)}
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

        </div>

    );
}

export default LayananAdministrasi;