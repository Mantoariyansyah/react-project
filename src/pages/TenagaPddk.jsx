import hero from "../assets/hero-bg2.png";
import { useEffect, useState } from "react";
import { dataGuru } from "../services/api";

function TenagaPddk() {
    const [guruList, setGuruList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGuru = async () => {
            try {
                const response = await dataGuru();
                setGuruList(response.data.data || []); // Sesuaikan jika API beda struktur
            } catch (error) {
                console.error("Gagal mengambil data guru:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGuru();
    }, []);

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
                            TENAGA PENDIDIK
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="pt-30 pb-20 px-20">
                {loading ? (
                    <p className="text-center text-gray-600">Memuat data guru...</p>
                ) : guruList.length > 0 ? (
                    <div className="grid grid-cols-4 gap-20 px-10">
                        {guruList.map((guru, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow shadow-gray-400 p-4 text-center"
                            >
                                <img
                                    src={guru.foto ? guru.foto : "/default-guru.png"}
                                    alt={guru.nama_lengkap}
                                    className="w-auto h-40 object-cover rounded-md mx-auto mb-5"
                                />
                                <h2 className="text-sm font-semibold text-gray-800">{guru.nama_lengkap}</h2>
                                <p className="text-xs text-gray-600">{guru.nama_mapel}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">Tidak ada data guru.</p>
                )}
            </div>
        </div>
    );
}

export default TenagaPddk;
