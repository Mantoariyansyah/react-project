import hero from "../assets/hero-bg2.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { beritaList } from "../services/api";

function Berita() {
    const [berita, setBerita] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBerita = async () => {
            try {
                const response = await beritaList();
                setBerita(response.data.data || []); // sesuaikan dengan struktur API
            } catch (error) {
                console.error("Gagal mengambil data berita:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBerita();
    }, []);

    return (
        <div>
            {/* HEADER */}
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
                            BERITA & INFORMASI
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="pb-60 px-20 pt-30 space-y-10">
                {loading ? (
                    <p className="text-center text-gray-600">Memuat berita...</p>
                ) : berita.length > 0 ? (
                    <div className="grid grid-cols-3 gap-10 text-[#101524]">
                        {berita.map((item, index) => (
                            <div
                                key={index}
                                className="w-90 h-[550px] flex flex-col justify-between rounded-lg shadow shadow-gray-400 p-5 bg-white"
                            >
                                <div>
                                    <img
                                        src={item.foto || "https://via.placeholder.com/400x200"}
                                        alt={item.judul_berita}
                                        className="w-full h-40 object-cover rounded-t-xl"
                                    />
                                </div>

                                <h1 className="text-lg font-bold py-3 leading-snug">
                                    {item.judul_berita}
                                </h1>

                                <p className="text-sm font-normal leading-relaxed line-clamp-3">
                                    {item.isi_berita}
                                </p>

                                <p className="py-3 text-sm font-semibold text-gray-600">
                                    {new Date(item.created_at).toLocaleDateString("id-ID", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>

                                <div className="flex items-center justify-center mt-4">
                                     <Link to={`/isiberita/${item.id}`}>
                                        <button className="bg-[#101524] hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold text-md">
                                            Baca Selengkapnya
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">Tidak ada berita tersedia.</p>
                )}
            </div>
        </div>
    );
}

export default Berita;
