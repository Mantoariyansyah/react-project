import hero from "../assets/hero-bg2.png";
import { useState } from "react";
import PopUpSuccess from "../components/PopUpSuccess";
import { layananpres } from "../services/api"; // API untuk prestasi

function LayananPrestasi() {
    const [showPopup, setShowPopup] = useState(false);

    // State form
    const [formData, setFormData] = useState({
        nama_prestasi: "",
        tingkat_lomba: "",
        kategori_peserta: "",
        nama_siswa: "",
        tanggal_prestasi: "",
        foto: null,
    });

    // Handle input text/select
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle file upload
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

            await layananpres(formDataToSend); // POST ke API
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
                            LAYANAN PRESTASI
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
                            Data Profil Prestasi
                        </span>
                    </h1>

                    <div className="grid grid-cols-2 gap-16">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="nama_prestasi" className="block text-sm font-medium text-[#101524] mb-1">
                                    Nama Prestasi <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nama_prestasi"
                                    value={formData.nama_prestasi}
                                    onChange={handleChange}
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                    placeholder="Masukkan Nama Prestasi"
                                />
                            </div>

                            <div>
                                <label htmlFor="tingkat_lomba" className="block text-sm font-medium text-[#101524] mb-1">
                                    Tingkat Prestasi <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="tingkat_lomba"
                                    value={formData.tingkat_lomba}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md bg-white"
                                >
                                    <option value="">Pilih Tingkat Prestasi</option>
                                    <option value="sekolah">Sekolah</option>
                                    <option value="kecamatan">Kecamatan</option>
                                    <option value="kabupaten/kota">Kabupaten/Kota</option>
                                    <option value="provinsi">Provinsi</option>
                                    <option value="nasional">Nasional</option>
                                    <option value="internasional">Internasional</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="kategori_peserta" className="block text-sm font-medium text-[#101524] mb-1">
                                    Kategori Peserta <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="kategori_peserta"
                                    value={formData.kategori_peserta}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md bg-white"
                                >
                                    <option value="">Pilih Kategori Peserta</option>
                                    <option value="individu">Individu</option>
                                    <option value="tim">Tim</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="nama_siswa" className="block text-sm font-medium text-[#101524] mb-1">
                                    Nama Siswa <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nama_siswa"
                                    value={formData.nama_siswa}
                                    onChange={handleChange}
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                    placeholder="Masukkan Nama Siswa"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="tanggal_prestasi" className="block text-sm font-medium text-[#101524] mb-1">
                                    Tanggal Prestasi <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    id="tanggal_prestasi"
                                    value={formData.tanggal_prestasi}
                                    onChange={handleChange}
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                />
                            </div>

                            <div>
                                <label htmlFor="fileDokumen" className="block text-sm font-medium text-[#101524] mb-2">
                                    Foto juara/Sertifikat <span className="text-red-500">*</span>
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

                            <div className="flex justify-end pt-2">
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

                {/* popup selesai */}
                {showPopup && (
                    <PopUpSuccess
                        title="Selamat Data Anda Tersimpan di SMAS Kristen Bethel Jakarta"
                        message="Data telah kami terima dan akan segera diproses oleh tim administrasi"
                        buttonText="Selesai"
                        onDownload={() => (window.location.href = "/")}
                    />
                )}
            </div>
        </div>
    );
}

export default LayananPrestasi;
