import hero from "../assets/hero-bg2.png";
import { Link } from "react-router-dom";
import gambar4 from "../img/gambar4.png";
import gambar5 from "../img/gambar5.png";
import gambar6 from "../img/gambar6.png";



function Berita() {

    const gambarBerita = [gambar4, gambar5, gambar6];

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
                            BERITA & INFORMASI
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="pb-60 px-20 pt-30 space-y-10">


                <div className="flex items-center justify-center space-x-10 text-[#101524]">
                    {[1, 2, 3].map((item, index) => (
                        <div
                            key={index}
                            className="w-90 h-[550px] flex flex-col justify-between rounded-lg shadow shadow-gray-400 p-5 bg-white"
                        >
                            <div>
                                <img
                                    src={gambarBerita[index]}
                                    alt={`Berita ${index + 1}`}
                                    className="w-full h-40 object-cover rounded-t-xl"
                                />
                            </div>

                            <h1 className="text-lg font-bold py-3 leading-snug">
                                SMAS Kristen Bethel Jakarta Peringati Hari Pahlawan dengan Upacara
                                Khidmat
                            </h1>

                            <p className="text-sm font-normal leading-relaxed">
                                Dalam rangka memperingati Hari Pahlawan, SMAS Kristen Bethel Jakarta
                                menggelar upacara bendera yang berlangsung dengan penuh khidmat di
                                halaman sekolah pada Jumat pagi, 10 November 2023.
                            </p>

                            <p className="py-3 text-sm font-semibold text-gray-600">
                                1 Oktober 2024
                            </p>

                            <div className="flex items-center justify-center mt-4">
                                <Link to="/isiberita">
                                    <button className="bg-[#101524] hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold text-md">
                                        Baca Selengkapnya
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="flex items-center justify-center space-x-10 text-[#101524]">
                    {[4, 5, 6].map((item, index) => (
                        <div
                            key={index}
                            className="w-90 h-[550px] flex flex-col justify-between rounded-lg shadow shadow-gray-400 p-5 bg-white"
                        >
                            <div>
                                <img
                                    src={gambarBerita[index]}
                                    alt={`Berita ${index + 1}`}
                                    className="w-full h-40 object-cover rounded-t-xl"
                                />
                            </div>

                            <h1 className="text-lg font-bold py-3 leading-snug">
                                SMAS Kristen Bethel Jakarta Rayakan Hari Guru dengan Meriah
                            </h1>

                            <p className="text-sm font-normal leading-relaxed">
                                Suasana penuh kegembiraan mewarnai perayaan Hari Guru di SMAS Kristen Bethel Jakarta. Kegiatan ini diisi dengan berbagai penampilan siswa dan pemberian penghargaan kepada guru.
                            </p>

                            <p className="py-3 text-sm font-semibold text-gray-600">
                                25 November 2024
                            </p>

                            <div className="flex items-center justify-center mt-4">
                                <Link to="/isiberita">
                                    <button className="bg-[#101524] hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold text-md">
                                        Baca Selengkapnya
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="flex items-center justify-center space-x-10 text-[#101524]">
                    {[4, 5, 6].map((item, index) => (
                        <div
                            key={index}
                            className="w-90 h-[550px] flex flex-col justify-between rounded-lg shadow shadow-gray-400 p-5 bg-white"
                        >
                            <div>
                                <img
                                    src={gambarBerita[index]}
                                    alt={`Berita ${index + 1}`}
                                    className="w-full h-40 object-cover rounded-t-xl"
                                />
                            </div>

                            <h1 className="text-lg font-bold py-3 leading-snug">
                                SMAS Kristen Bethel Jakarta Rayakan Hari Guru dengan Meriah
                            </h1>

                            <p className="text-sm font-normal leading-relaxed">
                                Suasana penuh kegembiraan mewarnai perayaan Hari Guru di SMAS Kristen Bethel Jakarta. Kegiatan ini diisi dengan berbagai penampilan siswa dan pemberian penghargaan kepada guru.
                            </p>

                            <p className="py-3 text-sm font-semibold text-gray-600">
                                25 November 2024
                            </p>

                            <div className="flex items-center justify-center mt-4">
                                <Link to="/isiberita">
                                    <button className="bg-[#101524] hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold text-md">
                                        Baca Selengkapnya
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
}

export default Berita;