import hero from "../assets/hero-bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";


import gedung from "../img/gambar15.png";
import aula from "../img/gambar16.png";
import kantin from "../img/gambar17.png";
import perpus from "../img/gambar18.png";
import lab from "../img/gambar18.png";
import gedungUtama from "../img/Foto Gedung Sekolah.png";


function Profil() {
    return (
        <div>
            {/* content1 */}
            <div
                className="h-screen bg-no-repeat bg-cover bg-center relative top-16"
                style={{
                    backgroundImage: `url(${hero})`,
                }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-semibold text-white mb-10 text-center">
                        PROFIL SMAS KRISTEN BETHEL JAKARTA
                    </h1>

                    <div className="w-full">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={3.5}
                            loop
                            navigation={{
                                prevEl: ".custom-prev",
                                nextEl: ".custom-next",
                            }}
                            className="relative w-full px-0"
                        >

                            <SwiperSlide>
                                <div className="bg-transparent rounded-lg overflow-hidden shadow-lg w-[70%] mx-auto">
                                    <img
                                        src={gedung}
                                        alt="Gedung"
                                        className="w-full object-cover object-center"
                                    />
                                    <p className="text-center py-2 font-light text-white text-sm">
                                        Gedung Sekolah
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-transparent rounded-lg overflow-hidden shadow-lg w-[70%] mx-auto">
                                    <img
                                        src={aula}
                                        alt="Aula"
                                        className="w-full object-cover object-center"
                                    />
                                    <p className="text-center py-2 font-light text-white text-sm">
                                        Aula Sekolah
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-transparent rounded-lg overflow-hidden shadow-lg w-[70%] mx-auto">
                                    <img
                                        src={kantin}
                                        alt="Kantin"
                                        className="w-full object-cover object-center"
                                    />
                                    <p className="text-center py-2 font-light text-white text-sm">
                                        Kantin
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-transparent rounded-lg  overflow-hidden shadow-lg w-[70%] mx-auto">
                                    <img
                                        src={perpus}
                                        alt="Perpus"
                                        className="w-full object-cover object-center"
                                    />
                                    <p className="text-center py-2 font-light text-white text-sm">
                                        Gedung Sekolah
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="bg-transparent rounded-lg  overflow-hidden shadow-lg w-[70%] mx-auto">
                                    <img
                                        src={lab}
                                        alt="Lab"
                                        className="w-full object-cover object-center"
                                    />
                                    <p className="text-center py-2 font-light text-white text-sm">
                                        Gedung Sekolah
                                    </p>
                                </div>
                            </SwiperSlide>


                            <button className="custom-prev absolute top-1/2 left-[130px] z-10 transform -translate-y-1/2 bg-[#FEF600] hover:bg-yellow-500 text-white rounded-md p-2 shadow">
                                <ChevronLeft className="w-6 h-6" />
                            </button>


                            <button className="custom-next absolute top-1/2 right-[130px] z-10 transform -translate-y-1/2 bg-[#FEF600] hover:bg-yellow-500 text-white rounded-md p-2 shadow">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </Swiper>
                    </div>
                </div>

            </div>

            {/* content2 */}
            <div className="pt-30 pb-20">
                <h1 className="text-3xl font-semibold text-[#101524] mb-14 text-center">
                    SMAS KRISTEN BETHEL JAKARTA
                </h1>
                <div className="flex items-center justify-center">
                  <img src={gedungUtama} alt="Gedung Utama" className="w-[80%]" />
                </div>
                <div className="px-[123px] pt-14 pb-10 space-y-8">
                    <p className="text-sm font-normal leading-snug tracking-wider">SMAS Kristen Bethel Jakarta adalah sebuah sekolah menengah atas swasta Kristen yang berlokasi di kawasan strategis di Petamburan, Jakarta Pusat. Sekolah ini berdiri dengan tujuan mulia untuk menjadi pusat pendidikan yang tidak hanya mengedepankan prestasi akademik, tetapi juga membentuk karakter siswa yang beriman, berintegritas, dan melayani sesuai dengan nilai-nilai Kristiani.</p>
                    <p className="text-sm font-normal leading-snug tracking-wider">SMAS Kristen Bethel Jakarta didirikan pada tahun 1989 sebagai bagian dari upaya untuk menyediakan pendidikan berkualitas dengan landasan nilai-nilai keimanan yang kokoh. Dalam perjalanannya, sekolah ini terus berkembang berkat dedikasi para pendiri, tenaga pendidik, dan dukungan penuh dari komunitas Kristen setempat. Pada awal berdirinya, SMAS Kristen Bethel Jakarta hanya memiliki beberapa kelas dan jumlah siswa yang terbatas. Namun, seiring waktu, sekolah ini berkembang pesat baik dari segi fasilitas maupun kualitas pendidikan.</p>
                    <p className="text-sm font-normal leading-snug tracking-wider">Hingga saat ini, SMAS Kristen Bethel Jakarta telah memiliki akreditasi "A" dan menjadi salah satu sekolah unggulan di wilayahnya. Dengan tenaga pendidik yang profesional dan berkompeten, SMAS Kristen Bethel Jakarta terus memberikan kontribusi dalam mencetak generasi muda yang tidak hanya cerdas secara intelektual, tetapi juga memiliki hati yang melayani serta mampu menjadi terang dan garam bagi masyarakat..</p>
                    <p className="text-sm font-normal leading-snug tracking-wider">Melalui fasilitas yang lengkap, lingkungan belajar yang kondusif, dan berbagai kegiatan ekstrakurikuler yang mendukung pengembangan bakat dan minat siswa, SMAS Kristen Bethel Jakarta berkomitmen untuk menciptakan lulusan yang siap bersaing di dunia global, namun tetap berpijak pada nilai-nilai Kristiani. Dengan semangat melayani dan kasih Kristus, sekolah ini terus menjalankan visinya sebagai lembaga pendidikan yang memberdayakan siswa untuk menjadi pemimpin masa depan yang berintegritas dan berkarakter.</p>
                    <p className="text-sm font-normal leading-snug tracking-wider">"Beriman, Berprestasi, Melayani" adalah moto yang menjadi nafas dalam setiap aktivitas di SMAS Kristen Bethel Jakarta. Kiranya sekolah ini terus menjadi berkat bagi seluruh siswa, orang tua, dan masyarakat luas.</p>
                </div>
            </div>
        </div>



    );
}

export default Profil;