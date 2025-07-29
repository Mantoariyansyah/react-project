import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import hero from "../assets/hero-bg2.png";
import { beritaDetail, beritaList } from "../services/api";

function IsiBerita() {
    const { id } = useParams();
    const [berita, setBerita] = useState(null);
    const [beritaLainnya, setBeritaLainnya] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Ambil detail berita
                const response = await beritaDetail(id);
                setBerita(response.data.data); // <- ambil object berita dari "data"

                // Ambil list berita lainnya
                const listResponse = await beritaList();
                const beritaArray = Array.isArray(listResponse.data.data) ? listResponse.data.data : [];

                setBeritaLainnya(beritaArray.filter((b) => b.id !== parseInt(id)));
            } catch (err) {
                console.error("Gagal mengambil detail berita", err);
            }
        };

        fetchData();
    }, [id]);


    if (!berita) {
        return <p className="text-center py-10">Memuat berita...</p>;
    }

    return (
        <div>
            {/* content1 */}
            <div
                className="min-h-[60vh] bg-no-repeat bg-top bg-contain relative"
                style={{ backgroundImage: `url(${hero})`, backgroundSize: "100% auto" }}
            >
                <div className="absolute inset-0 flex items-start justify-center px-20 pt-40">
                    <div className="text-white max-w-2xl text-center">
                        <h1 className="text-2xl font-semibold mb-3">BERITA & INFORMASI</h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 - Detail Berita */}
            <div className="pt-16 pb-20">
                <div className="text-center space-y-4">
                    <h1 className="text-2xl font-bold text-[#101524]">{berita.judul_berita}</h1>
                    <p className="text-medium">
                        {new Date(berita.created_at).toLocaleDateString()}
                    </p>
                </div>

                <div className="pt-10 px-[123px] space-y-8">
                    <div className="flex justify-center">
                        <img
                            src={berita.foto}
                            alt={berita.judul_berita}
                            className="w-[452px] h-[315px] rounded-md shadow"
                        />
                    </div>
                    <p className="text-sm font-normal leading-snug tracking-wider text-justify">
                        {berita.isi_berita}
                    </p>
                </div>
            </div>

            {/* content3 - Berita Lainnya */}
            <div className="pb-60 px-20">
                <h1 className="text-2xl font-bold mb-6 text-center pb-6 text-[#101524]">
                    <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[8ch] after:bg-[#FEF600] after:rounded-full">
                        Berita & Informasi Lainnya
                    </span>
                </h1>

                <div className="flex items-center justify-center space-x-10 text-[#101524]">
                    {beritaLainnya.slice(0, 3).map((item) => (
                        <div
                            key={item.id}
                            className="w-90 h-[550px] flex flex-col justify-between rounded-lg shadow shadow-gray-400 p-5 bg-white"
                        >
                            <img
                                src={item.foto}
                                alt={item.judul_berita}
                                className="w-full h-40 object-cover rounded-t-xl"
                            />
                            <h1 className="text-lg font-bold py-3 leading-snug">{item.judul_berita}</h1>
                            <p className="text-sm font-normal leading-relaxed">{item.isi_berita}</p>
                            <p className="py-3 text-sm font-semibold text-gray-600">
                                {new Date(item.created_at).toLocaleDateString()}
                            </p>
                            <div className="flex items-center justify-center mt-4">
                                <button
                                    onClick={() => (window.location.href = `/isiberita/${item.id}`)}
                                    className="bg-[#101524] hover:bg-[#101524] text-white px-4 py-2 rounded-lg font-semibold text-md"
                                >
                                    Baca Selengkapnya
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default IsiBerita;
