import hero from "../assets/hero-bg2.png";
import gambar21 from "../img/gambar21.png";
import { useEffect, useState } from "react";
import { prestasiList } from "../services/api";

function Prestasi() {
    const [prestasiData, setPrestasiData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrestasi = async () => {
            try {
                const response = await prestasiList();
                setPrestasiData(response.data.data || []); // Pastikan sesuai response API
            } catch (error) {
                console.error("Gagal mengambil data prestasi:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPrestasi();
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
                            PRESTASI SISWA
                        </h1>
                        <h2 className="text-md font-medium">
                            SMAS KRISTEN BETHEL JAKARTA
                        </h2>
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="pt-30 pb-80 px-20">
                {loading ? (
                    <p className="text-center text-gray-600">Memuat data prestasi...</p>
                ) : prestasiData.length > 0 ? (
                    <div className="grid grid-cols-4 gap-14 px-10">
                        {prestasiData.map((prestasi, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow shadow-gray-400 p-4 text-center"
                            >
                                <img
                                    src={prestasi.foto ? prestasi.foto : gambar21}
                                    alt={prestasi.nama_prestasi}
                                    className="w-auto h-40 object-cover rounded-md mx-auto mb-5"
                                />
                                <h2 className="text-sm font-semibold text-gray-800">
                                    {prestasi.nama_prestasi}
                                </h2>
                                <p className="text-xs text-gray-600 pt-2 px-2">
                                    {prestasi.nama_siswa}
                                </p>
                                <p className="text-xs text-gray-600 pt-4">
                                    {new Date(prestasi.tanggal_prestasi).toLocaleDateString(
                                        "id-ID",
                                        { weekday: "long", day: "numeric", month: "long", year: "numeric" }
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">Tidak ada data prestasi.</p>
                )}
            </div>
        </div>
    );
}

export default Prestasi;
