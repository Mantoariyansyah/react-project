import hero from "../assets/hero-bg2.png";
import gambar24 from "../img/gambar24.png";
import gambar4 from "../img/gambar4.png";
import gambar5 from "../img/gambar5.png";
import gambar6 from "../img/gambar6.png";


function IsiBerita() {

    const gambarBerita = [gambar4, gambar5, gambar6];


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
                            BERITA & INFORMASI
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="pt-16 pb-20">
                <div className="text-center space-y-4">
                    <h1 className="text-2xl font-bold text-[#101524]">
                        Peringatan Hari Kesaktian Pancasila di SMAS Kristen Bethel Jakarta: <br />
                        Memupuk Semangat Kebangsaan
                    </h1>
                    <p className="text-medium">Selasa, 1 Oktober 2024</p>
                </div>


                <div className="pt-10">

                    <div className="px-[123px]  space-y-8">
                        <p className="text-sm font-normal leading-snug tracking-wider">SJakarta, 1 Oktober 2024 – Dalam rangka memperingati Hari Kesaktian Pancasila yang jatuh pada tanggal 1 Oktober, SMAS Kristen Bethel Jakarta menyelenggarakan upacara bendera sebagai bentuk penghormatan dan penghargaan terhadap nilai-nilai luhur Pancasila. Upacara yang berlangsung di halaman sekolah ini dihadiri oleh seluruh siswa, guru, dan staf sekolah dengan penuh khidmat.</p>
                        <p className="text-sm font-normal leading-snug tracking-wider">Upacara dimulai pukul 07.30 WIB dengan pembina upacara Kepala Sekolah, yang menyampaikan pesan penting tentang pentingnya memegang teguh nilai-nilai Pancasila dalam kehidupan sehari-hari. Dalam amanatnya, beliau menekankan bahwa Pancasila adalah landasan kehidupan berbangsa dan bernegara yang harus terus dijaga dan diamalkan oleh generasi muda.</p>
                        <div className="flex items-center justify-center">
                            <img
                                src={gambar24}
                                alt=""
                                className="w-[452px] h-[315px] rounded-md shadow"
                            />
                        </div>
                        <p className="text-sm font-normal leading-snug tracking-wider">Selain itu, upacara juga diisi dengan pembacaan teks Pancasila, janji siswa, dan doa bersama untuk mendoakan persatuan dan kesatuan bangsa Indonesia. Seluruh peserta upacara mengikuti kegiatan ini dengan tertib dan penuh semangat, mencerminkan rasa cinta tanah air dan semangat kebangsaan yang tinggi.</p>
                        <p className="text-sm font-normal leading-snug tracking-wider">M"Melalui kegiatan ini, kami ingin mengingatkan siswa bahwa Pancasila bukan hanya sebuah simbol, tetapi juga panduan moral dan etika dalam menjalani kehidupan. Sebagai generasi penerus bangsa, siswa harus memahami dan mengimplementasikan nilai-nilai Pancasila dalam kehidupan mereka," ujar Kepala Sekolah SMAS Kristen Bethel Jakarta.</p>
                        <p className="text-sm font-normal leading-snug tracking-wider">"Peringatan Hari Kesaktian Pancasila ini menjadi momen penting bagi seluruh warga SMAS Kristen Bethel Jakarta untuk merefleksikan pentingnya persatuan dan gotong royong dalam menjaga keutuhan bangsa. Diharapkan, kegiatan ini dapat semakin mempererat rasa cinta tanah air di kalangan siswa dan menjadi motivasi bagi mereka untuk terus berprestasi demi kejayaan bangsa Indonesia.
                            Tuhan memberkati Indonesia! Dirgahayu Pancasila!</p>
                    </div>

                </div>
            </div>

            {/* content3 */}
            <div className="pb-60 px-20">

                <h1 className="text-2xl font-bold mb-6 text-center pb-6 text-[#101524]">
                    <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[8ch] after:bg-[#FEF600] after:rounded-full">
                        Berita & Informasi Lainnya
                    </span>
                </h1>

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
                                <button onClick={() => {
                                    window.location.reload();
                                    setTimeout(() => window.scrollTo(0, 0), 0);
                                }} className="bg-[#101524] hover:bg-[#101524] text-white px-4 py-2 rounded-lg font-semibold text-md">
                                    baca selengkapnya
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