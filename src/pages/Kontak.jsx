import hero from "../assets/hero-bg2.png";
import { useState } from "react";
import PopUpSuccess from "../components/PopUpSuccess";
import { kontakme } from "../services/api";

function Kontak() {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        nama_lengkap: "",
        email: "",
        no_telepon: "",
        isi_pesan: "",
    });
    const [loading, setLoading] = useState(false);

    // Handle input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Submit form ke API
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await kontakme(formData); // POST ke /contact-information
            setShowPopup(true);
            setFormData({ nama_lengkap: "", email: "", no_telepon: "", isi_pesan: "" });
        } catch (err) {
            console.error("Error:", err);
            alert("Gagal mengirim data kontak!");
        } finally {
            setLoading(false);
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
                            KONTAK
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="pt-30 pb-80 px-20">
                <form
                    className="max-w-md mx-auto p-6 bg-white rounded-lg shadow shadow-gray-400"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-black mb-1">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            name="nama_lengkap"
                            value={formData.nama_lengkap}
                            onChange={handleChange}
                            placeholder="Masukkan Nama Lengkap"
                            className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#101524]"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-black mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Masukkan Email"
                            className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#101524]"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-black mb-1">
                            No Telepon
                        </label>
                        <input
                            type="text"
                            name="no_telepon"
                            value={formData.no_telepon}
                            onChange={handleChange}
                            placeholder="Masukkan No Telepon"
                            className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#101524]"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-black mb-1">
                            Pesan & Kesan
                        </label>
                        <textarea
                            name="isi_pesan"
                            value={formData.isi_pesan}
                            onChange={handleChange}
                            placeholder="Masukkan Pesan & Kesan"
                            rows={4}
                            className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#101524]"
                            required
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#0F0F1C] text-white px-6 py-2 rounded-md hover:bg-[#1a1a2e] transition"
                        >
                            {loading ? "Mengirim..." : "Kirim"}
                        </button>
                    </div>
                </form>

                {/* popup selesai */}
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

export default Kontak;
