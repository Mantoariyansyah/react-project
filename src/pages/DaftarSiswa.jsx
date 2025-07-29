import hero from "../assets/hero-bg2.png";
import { useState } from "react";
import PopUpSuccess from "../components/PopUpSuccess";
import { daftarSiswa } from "../services/api";
import { jsPDF } from "jspdf";

function DaftarSiswa() {
   const [showPopup, setShowPopup] = useState(false);

    const [formData, setFormData] = useState({
        nama_lengkap: "",
        nisn: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        jenis_kelamin: "",
        email: "",
        no_telepon: "",
        alamat_lengkap: "",
        nama_ayah: "",
        pekerjaan_ayah: "",
        no_telepon_ayah: "",
        nama_ibu: "",
        pekerjaan_ibu: "",
        no_telepon_ibu: "",
        asal_sekolah: "",
        tahun_lulus: "",
        nilai_un: "",
        ijazah_smp: null,
    });

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, [id]: files[0] });
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }
            await daftarSiswa(formDataToSend); 
            setShowPopup(true);
        } catch (error) {
            console.error("Gagal mendaftar:", error);
            alert("Terjadi kesalahan saat mengirim data.");
        }
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text("Bukti Pendaftaran Siswa", 20, 20);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);

        // Tambahkan data form
        let y = 40;
        const addLine = (label, value) => {
            doc.text(`${label}: ${value || "-"}`, 20, y);
            y += 10;
        };

        addLine("Nama Lengkap", formData.nama_lengkap);
        addLine("NISN", formData.nisn);
        addLine("Tempat Lahir", formData.tempat_lahir);
        addLine("Tanggal Lahir", formData.tanggal_lahir);
        addLine("Jenis Kelamin", formData.jenis_kelamin === "male" ? "Laki-laki" : "Perempuan");
        addLine("Email", formData.email);
        addLine("No Telepon", formData.no_telepon);
        addLine("Alamat Lengkap", formData.alamat_lengkap);
        addLine("Nama Ayah", formData.nama_ayah);
        addLine("Pekerjaan Ayah", formData.pekerjaan_ayah);
        addLine("No Telepon Ayah", formData.no_telepon_ayah);
        addLine("Nama Ibu", formData.nama_ibu);
        addLine("Pekerjaan Ibu", formData.pekerjaan_ibu);
        addLine("No Telepon Ibu", formData.no_telepon_ibu);
        addLine("Asal SMP", formData.asal_sekolah);
        addLine("Tahun Lulus", formData.tahun_lulus);
        addLine("Nilai Rata-rata", formData.nilai_un);

        // Tanda tangan atau catatan
        y += 20;
        doc.setFontSize(10);
        doc.text("SMAS Kristen Bethel Jakarta", 20, y);
        y += 10;
        doc.text(`Tanggal Cetak: ${new Date().toLocaleDateString()}`, 20, y);

        // Simpan PDF
        doc.save("Bukti-Pendaftaran.pdf");
        window.location.href = "/";
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
                        <h2 className="text-md font-medium">
                            SMAS KRISTEN BETHEL JAKARTA
                        </h2>
                    </div>
                </div>
            </div>

            {/* content2 - Data Profil */}
            <div className="w-full flex justify-center pt-20 pb-52 bg-white">
                <form className="w-[60%]" onSubmit={handleSubmit}>
                    <h1 className="text-xl font-bold mb-6">
                        <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[8.5ch] after:bg-[#FEF600] after:rounded-full">
                            Data Profil
                        </span>
                    </h1>

                    <div className="grid grid-cols-2 gap-16">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="nama_lengkap" className="block text-sm font-medium text-[#101524] mb-1">
                                    Nama Lengkap <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nama_lengkap"
                                    value={formData.nama_lengkap}
                                    onChange={handleChange}
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
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
                                    value={formData.nisn}
                                    onChange={handleChange}
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                    placeholder="Masukkan NISN"
                                />
                            </div>
                            <div>
                                <label htmlFor="tempat_lahir" className="block text-sm font-medium text-[#101524] mb-1">
                                    Tempat Lahir <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="tempat_lahir"
                                    value={formData.tempat_lahir}
                                    onChange={handleChange}
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                    placeholder="Masukkan tempat lahir"
                                />
                            </div>
                            <div>
                                <label htmlFor="tanggal_lahir" className="block text-sm font-medium text-[#101524] mb-1">
                                    Tanggal Lahir <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    id="tanggal_lahir"
                                    value={formData.tanggal_lahir}
                                    onChange={handleChange}
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="jenis_kelamin" className="block text-sm font-medium text-[#101524] mb-1">
                                    Jenis Kelamin <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="jenis_kelamin"
                                    value={formData.jenis_kelamin}
                                    onChange={handleChange}
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                >
                                    <option value="">Pilih jenis kelamin</option>
                                    <option value="male">Laki-laki</option>
                                    <option value="female">Perempuan</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#101524] mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                    placeholder="Masukkan email"
                                />
                            </div>
                            <div>
                                <label htmlFor="no_telepon" className="block text-sm font-medium text-[#101524] mb-1">
                                    No Telepon <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="no_telepon"
                                    value={formData.no_telepon}
                                    onChange={handleChange}
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                    placeholder="Masukkan nomor telepon"
                                />
                            </div>
                            <div>
                                <label htmlFor="alamat_lengkap" className="block text-sm font-medium text-[#101524] mb-1">
                                    Alamat Lengkap <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="alamat_lengkap"
                                    value={formData.alamat_lengkap}
                                    onChange={handleChange}
                                    rows="2"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md resize-none"
                                    placeholder="Masukkan alamat lengkap"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* content3 - Data Orang Tua */}
                    <h1 className="text-xl font-bold my-6 pt-10">
                        <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[8.5ch] after:bg-[#FEF600] after:rounded-full">
                            Data Orang Tua
                        </span>
                    </h1>

                    <div className="grid grid-cols-2 gap-16">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="nama_ayah" className="block text-sm font-medium text-[#101524] mb-1">
                                    Nama Ayah <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nama_ayah"
                                    value={formData.nama_ayah}
                                    onChange={handleChange}
                                    placeholder="Masukkan Nama Ayah"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="pekerjaan_ayah" className="block text-sm font-medium text-[#101524] mb-1">
                                    Pekerjaan Ayah <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="pekerjaan_ayah"
                                    value={formData.pekerjaan_ayah}
                                    onChange={handleChange}
                                    placeholder="Masukkan Pekerjaan Ayah"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="no_telepon_ayah" className="block text-sm font-medium text-[#101524] mb-1">
                                    No Telepon Ayah <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="no_telepon_ayah"
                                    value={formData.no_telepon_ayah}
                                    onChange={handleChange}
                                    placeholder="Masukkan No Telepon Ayah"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="nama_ibu" className="block text-sm font-medium text-[#101524] mb-1">
                                    Nama Ibu <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nama_ibu"
                                    value={formData.nama_ibu}
                                    onChange={handleChange}
                                    placeholder="Masukkan Nama Ibu"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="pekerjaan_ibu" className="block text-sm font-medium text-[#101524] mb-1">
                                    Pekerjaan Ibu <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="pekerjaan_ibu"
                                    value={formData.pekerjaan_ibu}
                                    onChange={handleChange}
                                    placeholder="Masukkan Pekerjaan Ibu"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="no_telepon_ibu" className="block text-sm font-medium text-[#101524] mb-1">
                                    No Telepon Ibu <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="no_telepon_ibu"
                                    value={formData.no_telepon_ibu}
                                    onChange={handleChange}
                                    placeholder="Masukkan No Telepon Ibu"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                />
                            </div>
                        </div>
                    </div>

                    {/* content4 - Data Dokumen */}
                    <h1 className="text-xl font-bold my-6 pt-10">
                        <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[8.5ch] after:bg-[#FEF600] after:rounded-full">
                            Data Dokumen
                        </span>
                    </h1>

                    <div className="grid grid-cols-2 gap-16">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="asal_sekolah" className="block text-sm font-medium text-[#101524] mb-1">
                                    Asal SMP <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="asal_sekolah"
                                    value={formData.asal_sekolah}
                                    onChange={handleChange}
                                    placeholder="Masukkan Asal SMP"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="tahun_lulus" className="block text-sm font-medium text-[#101524] mb-1">
                                    Tahun Lulus <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="tahun_lulus"
                                    value={formData.tahun_lulus}
                                    onChange={handleChange}
                                    placeholder="Masukkan Tahun Lulus"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="nilai_un" className="block text-sm font-medium text-[#101524] mb-1">
                                    Nilai Rata-rata <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nilai_un"
                                    value={formData.nilai_un}
                                    onChange={handleChange}
                                    placeholder="Masukkan Nilai Rata-rata"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md"
                                />
                            </div>
                            <div>
                                <label htmlFor="ijazah_smp" className="block text-sm font-medium text-[#101524] mb-1">
                                    Unggah Ijazah SMP <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="file"
                                    id="ijazah_smp"
                                    onChange={handleChange}
                                    accept=".pdf"
                                    className="w-full text-sm text-gray-500 file:mr-4 file:py-1.5 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-[#101524] hover:file:bg-blue-100 border border-gray-400 rounded-md"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex item-center justify-end pt-4">
                        <button
                            type="submit"
                            className="bg-[#101524] hover:bg-gray-500 text-white px-5 py-2 rounded-lg font-semibold"
                        >
                            Kirim
                        </button>
                    </div>
                </form>
            </div>
  {showPopup && (
                <PopUpSuccess
                    title="Selamat Anda Berhasil Terdaftar di SMAS Kristen Bethel Jakarta"
                    message="Data pendaftaran Anda telah kami terima. Silakan unduh bukti pendaftaran."
                    buttonText="Download Bukti"
                    onDownload={handleDownloadPDF}
                />
            )}
        </div>
    );
}

export default DaftarSiswa;
