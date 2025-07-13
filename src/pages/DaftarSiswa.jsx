import hero from "../assets/hero-bg2.png";
import { useState } from "react";
import PopUpSuccess from "../components/PopUpSuccess";

function DaftarSiswa() {
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);
    };
    return (

        <div>
            {/* content1 */}
            <div
                className="min-h-[60vh] bg-no-repeat bg-top bg-contain relative"
                style={{
                    backgroundImage: `url(${hero})`,
                    backgroundSize: "100% auto",
                }}
            >
                <div className="absolute inset-0 flex items-start justify-center px-20 pt-40">
                    <div className="text-white max-w-2xl text-center">
                        <h1 className="text-2xl font-semibold leading-snug mb-3 text-white">
                            DAFTAR SISWA
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="w-full flex justify-center pt-20 bg-white">
                <form className="w-[60%]">

                    <h1 className="text-xl font-bold mb-6">
                        <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[8.5ch] after:bg-[#FEF600] after:rounded-full">
                            Data Profil
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
                        </div>
                    </div>
                </form>
            </div>

            {/* content3 */}
            <div className="w-full flex justify-center pt-10 bg-white">
                <form className="w-[60%]">

                    <h1 className="text-xl font-bold mb-6">
                        <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[8.5ch] after:bg-[#FEF600] after:rounded-full">
                            Data Orang Tua
                        </span>
                    </h1>

                    <div className="grid grid-cols-2 gap-16">
                        
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="nama" className="block text-sm font-medium text-[#101524] mb-1">
                                    Nama Ayah <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nama"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                    placeholder="Masukkan Nama Ayah"
                                />
                            </div>

                            <div>
                                <label htmlFor="nisn" className="block text-sm font-medium text-[#101524] mb-1">
                                    Pekerjaan <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nisn"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                    placeholder="Masukkan Pekerjaan"
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
                                <label htmlFor="nama" className="block text-sm font-medium text-[#101524] mb-1">
                                    Nama Ibu <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nama"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                    placeholder="Masukkan Nama Ibu"
                                />
                            </div>

                            <div>
                                <label htmlFor="nisn" className="block text-sm font-medium text-[#101524] mb-1">
                                    Pekerjaan <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nisn"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                    placeholder="Masukkan Pekerjaan"
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
                    </div>
                </form>
            </div>

            {/* content4 */}
            <div className="w-full flex justify-center pt-10 pb-60 bg-white">
                <form className="w-[60%]" onSubmit={handleSubmit}>

                    <h1 className="text-xl font-bold mb-6">
                        <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[8.5ch] after:bg-[#FEF600] after:rounded-full">
                            Data Dokumen
                        </span>
                    </h1>

                    <div className="grid grid-cols-2 gap-16">
                        
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="asalSekolah" className="block text-sm font-medium text-[#101524] mb-1">
                                    Asal Sekolah SMP <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nama"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                    placeholder="Masukkan Nama Sekolah"
                                />
                            </div>

                            <div>
                                <label htmlFor="tahunLulus" className="block text-sm font-medium text-[#101524] mb-1">
                                    Tahun Lulus <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="tahun"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                    placeholder="Masukkan Tahun Lulus"
                                />
                            </div>

                            <div>
                                <label htmlFor="nisn" className="block text-sm font-medium text-[#101524] mb-1">
                                    Nilai Rata - rata Raport / UN <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nilai"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                    placeholder="Masukkan Nilai"
                                />
                            </div>

                            <div>
                                <label htmlFor="fileDokumen" className="block text-sm font-medium text-[#101524] mb-1">
                                    File Ijazah SMP <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="file"
                                    id="fileDokumen"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="w-full text-sm text-gray-500
                                    file:mr-4 file:py-1.5 file:px-4
                                    file:rounded-md file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-gray-200 file:text-[#101524]
                                    hover:file:bg-blue-100
                                    border border-gray-400 rounded-md"
                                />
                            </div>
                        </div>

                        
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="fileDokumen" className="block text-sm font-medium text-[#101524] mb-1">
                                    Pas Foto Terbaru <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="file"
                                    id="fileDokumen"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="w-full text-sm text-gray-500
                                    file:mr-4 file:py-1.5 file:px-4
                                    file:rounded-md file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-gray-200 file:text-[#101524]
                                    hover:file:bg-blue-100
                                    border border-gray-400 rounded-md"
                                />
                            </div>

                            <div>
                                <label htmlFor="fileDokumen" className="block text-sm font-medium text-[#101524] mb-1">
                                    File Akte Kelahiran <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="file"
                                    id="fileDokumen"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="w-full text-sm text-gray-500
                                    file:mr-4 file:py-1.5 file:px-4
                                    file:rounded-md file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-gray-200 file:text-[#101524]
                                    hover:file:bg-blue-100
                                    border border-gray-400 rounded-md"
                                />
                            </div>

                            <div>
                                <label htmlFor="fileDokumen" className="block text-sm font-medium text-[#101524] mb-1">
                                    File Kartu Keluarga <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="file"
                                    id="fileDokumen"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="w-full text-sm text-gray-500
                                    file:mr-4 file:py-1.5 file:px-4
                                    file:rounded-md file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-gray-200 file:text-[#101524]
                                    hover:file:bg-blue-100
                                    border border-gray-400 rounded-md"
                                />
                            </div>

                            <div>
                                <label htmlFor="fileDokumen" className="block text-sm font-medium text-[#101524] mb-1">
                                    File Ktp Orang Tua <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="file"
                                    id="fileDokumen"
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    className="w-full text-sm text-gray-500
                                    file:mr-4 file:py-1.5 file:px-4
                                    file:rounded-md file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-gray-200 file:text-[#101524]
                                    hover:file:bg-blue-100
                                    border border-gray-400 rounded-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="bg-[#101524] hover:bg-gray-500 text-white px-5 py-2 rounded-lg font-semibold"
                        >
                            Kirim
                        </button>
                    </div>

                </form>

                {/* popupselesai */}
                {showPopup && (
                    <PopUpSuccess
                        onClose={() => setShowPopup(false)}
                        onDownload={() => {
                            
                            window.open("/", "_blank");
                        }}
                    />
                )}
            </div>





        </div>


    );

}

export default DaftarSiswa;