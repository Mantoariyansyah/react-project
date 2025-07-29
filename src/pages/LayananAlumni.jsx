import hero from "../assets/hero-bg2.png";
import { useState } from "react";
import PopUpSuccess from "../components/PopUpSuccess";
import { alumni } from "../services/api"; // Fungsi API POST alumni

function LayananAlumni() {
    const [showPopup, setShowPopup] = useState(false);

    // State form
    const [formData, setFormData] = useState({
        nama_lengkap: "",
        nisn: "",
        status_sekarang: "",
        instansi_sekarang: "",
        bidang_sekarang: "",
        foto: null,
    });

    // Handle input text/select
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle file input
    const handleFileChange = (e) => {
        setFormData({ ...formData, foto: e.target.files[0] });
    };

    // Submit ke API
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });

            await alumni(formDataToSend); // POST ke endpoint alumni
            setShowPopup(true);
        } catch (error) {
            console.error("Gagal mengirim data:", error);
            alert("Terjadi kesalahan saat mengirim data.");
        }
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
                            LAYANAN ALUMNI
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="w-full flex justify-center pb-80 pt-30 bg-white">
                <form className="w-[60%]" onSubmit={handleSubmit} encType="multipart/form-data">
                    <h1 className="text-xl font-bold mb-6">
                        <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[8.5ch] after:bg-[#FEF600] after:rounded-full">
                            Data Profil Alumni
                        </span>
                    </h1>

                    <div className="grid grid-cols-2 gap-16">
                        <div className="space-y-4">
                            {/* Nama Lengkap */}
                            <div>
                                <label htmlFor="nama_lengkap" className="block text-sm font-medium text-[#101524] mb-1">
                                    Nama Lengkap <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nama_lengkap"
                                    value={formData.nama_lengkap}
                                    onChange={handleChange}
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:outline-none"
                                    placeholder="Masukkan Nama Lengkap"
                                />
                            </div>

                            {/* NISN */}
                            <div>
                                <label htmlFor="nisn" className="block text-sm font-medium text-[#101524] mb-1">
                                    NISN <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nisn"
                                    value={formData.nisn}
                                    onChange={handleChange}
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:outline-none"
                                    placeholder="Masukkan NISN"
                                />
                            </div>

                            {/* Status Sekarang */}
                            <div>
                                <label htmlFor="status_sekarang" className="block text-sm font-medium text-[#101524] mb-1">
                                    Status Saat Ini <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="status_sekarang"
                                    value={formData.status_sekarang}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md bg-white focus:ring-2 focus:outline-none"
                                >
                                    <option value="">Pilih Status</option>
                                    <option value="mahasiswa">Mahasiswa</option>
                                    <option value="pekerja">Bekerja</option>
                                </select>
                            </div>

                            {/* Instansi */}
                            <div>
                                <label htmlFor="instansi_sekarang" className="block text-sm font-medium text-[#101524] mb-1">
                                    Instansi <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="instansi_sekarang"
                                    value={formData.instansi_sekarang}
                                    onChange={handleChange}
                                    placeholder="Masukkan Instansi"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            {/* Bidang */}
                            <div>
                                <label htmlFor="bidang_sekarang" className="block text-sm font-medium text-[#101524] mb-1">
                                    Bidang <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="bidang_sekarang"
                                    value={formData.bidang_sekarang}
                                    onChange={handleChange}
                                    placeholder="Masukkan Bidang"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:outline-none"
                                />
                            </div>

                            {/* Foto */}
                             <div>
                                <label htmlFor="fileDokumen" className="block text-sm font-medium text-[#101524] mb-2">
                                   Foto Alumni <span className="text-red-500">*</span>
                                </label>
                                <div className="relative w-full h-45 border border-gray-400 rounded-md p-4">
                                    <input
                                        type="file"
                                        id="fileDokumen"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={handleFileChange}
                                        className="absolute bottom-4 left-4 w-36 text-sm text-gray-500
                                        file:mr-2 file:py-1 file:px-3
                                        file:rounded-md file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-gray-200 file:text-[#101524]
                                        hover:file:bg-blue-100
                                        border border-gray-400 rounded-md"
                                    />
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="flex justify-end pt-4">
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

                {/* Popup selesai */}
                {showPopup && (
                    <PopUpSuccess
                        title="Selamat Data Anda Tersimpan di SMAS Kristen Bethel Jakarta"
                        message="Data telah kami terima dan akan segera diproses oleh tim administrasi"
                        buttonText="Selesai"
                        onDownload={() => {
                            window.location.href = "/";
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default LayananAlumni;
