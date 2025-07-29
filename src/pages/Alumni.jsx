import hero from "../assets/hero-bg2.png";
import alumnie from "../img/alumni.png";
import { useEffect, useState } from "react";
import { aloemni } from "../services/api";

function Alumni() {
    const [alumniData, setAlumniData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAlumni = async () => {
            try {
                const response = await aloemni();
                setAlumniData(response.data.data || []); // Sesuaikan dengan struktur API
            } catch (error) {
                console.error("Gagal mengambil data alumni:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAlumni();
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
                            ALUMNI SEKOLAH
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="pt-30 pb-20 px-20">
                {loading ? (
                    <p className="text-center text-gray-600">Memuat data alumni...</p>
                ) : alumniData.length > 0 ? (
                    <div className="grid grid-cols-4 gap-20 px-10">
                        {alumniData.map((alumni, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow shadow-gray-400 p-4 text-center"
                            >
                                <img
                                    src={alumni.foto ? alumni.foto : alumnie}
                                    alt={alumni.nama_lengkap}
                                    className="w-auto h-40 object-cover rounded-md mx-auto mb-5"
                                />
                                <h2 className="text-sm font-semibold text-gray-800">
                                    {alumni.nama_lengkap}
                                </h2>
                                <p className="text-xs text-gray-600 pt-2">
                                    {alumni.instansi_sekarang}
                                </p>
                                <p className="text-xs text-gray-600">
                                    {alumni.bidang_sekarang}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">Tidak ada data alumni.</p>
                )}
            </div>
        </div>
    );
}

export default Alumni;
