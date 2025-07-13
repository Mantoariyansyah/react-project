import hero from "../assets/hero-bg2.png";




function Jurusan() {

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
                            JURUSAN
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="pt-20 pb-20">

                <h1 className="text-xl font-bold text-[#133E87] text-center">
                    <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[9.2ch] after:bg-[#FEF600] after:rounded-full">
                        ILMU PENGETAHUAN ALAM
                    </span>
                </h1>

                <div className="flex items-center justify-center pt-14">
                    <img src="/src/img/gambar19.png" alt="" className="w-[80%]" />
                </div>

                <div className="px-[123px] space-y-4 pt-8">
                    <p className="text-medium font-normal">Jurusan IPA di SMAS Kristen Bethel Jakarta dirancang untuk siswa yang memiliki minat dalam sains, teknologi, dan penalaran logis. Di jurusan ini, siswa akan mendalami mata pelajaran seperti Matematika, Fisika, Kimia, dan Biologi yang dikemas dengan pendekatan praktis dan aplikatif.</p>
                     <p className="text-medium font-bold">Kenapa memilih jurusan IPA di SMAS Kristen Bethel Jakarta?</p>
                       
                        <ul className="list-disc pl-7 mt-2 space-y-2">
                            <li>
                                <span className="font-medium">Fasilitas Lengkap:</span> Membangun kebiasaan beribadah dan menerapkan 5S (Senyum, Sapa, Salam, Sopan, Santun).
                            </li>
                            <li>
                                <span className="font-medium">Kegiatan Menarik:</span> Siswa diajak melakukan penelitian ilmiah, proyek sains, dan kunjungan edukatif ke institusi sains.
                            </li>
                            <li>
                                <span className="font-medium">Peluang Luas:</span> Jurusan ini mempersiapkan siswa untuk melanjutkan ke perguruan tinggi di bidang kedokteran, teknik, farmasi, dan sains lainnya.
                            </li>
                        </ul>

                     <p className="text-medium font-normal">Melalui bimbingan tenaga pendidik yang profesional, siswa tidak hanya belajar teori tetapi juga mengembangkan keterampilan kritis dan kreatif yang akan berguna dalam menghadapi tantangan masa depan.</p>
                </div>
            </div>

             {/* content3 */}
            <div className="pb-40">

                <h1 className="text-xl font-bold text-[#133E87] text-center">
                    <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[9.2ch] after:bg-[#FEF600] after:rounded-full">
                        ILMU PENGETAHUAN SOSIAL
                    </span>
                </h1>

                <div className="flex items-center justify-center pt-14">
                    <img src="/src/img/gambar20.png" alt="" className="w-[80%]" />
                </div>

                <div className="px-[123px] space-y-4 pt-8">
                    <p className="text-medium font-normal">Jurusan IPS di SMAS Kristen Bethel Jakarta adalah pilihan tepat bagi siswa yang tertarik pada bidang sosial, ekonomi, budaya, dan sejarah. Di jurusan ini, siswa akan belajar mendalam tentang Geografi, Sejarah, Sosiologi, dan Ekonomi, dengan pendekatan yang relevan dengan kehidupan sehari-hari.</p>
                     <p className="text-medium font-bold">Kenapa memilih jurusan IPS di SMAS Kristen Bethel Jakarta?</p>
                       
                        <ul className="list-disc pl-7 mt-2 space-y-2">
                            <li>
                                <span className="font-medium">Kontekstual dan Menarik:</span> Pembelajaran mengaitkan konsep sosial dengan isu-isu global seperti ekonomi digital, tata kelola lingkungan, dan hubungan internasional.
                            </li>
                            <li>
                                <span className="font-medium">Proyek Kreatif: </span> Siswa aktif dalam kegiatan simulasi pasar, debat sosial, hingga penelitian lapangan.
                            </li>
                            <li>
                                <span className="font-medium">Karir yang Menjanjikan:</span> Jurusan ini membuka peluang besar untuk melanjutkan studi di bidang hukum, bisnis, komunikasi, hubungan internasional, dan lainnya.
                            </li>
                        </ul>

                     <p className="text-medium font-normal">Didukung dengan pengajaran interaktif dan berbasis proyek, siswa IPS dipersiapkan untuk menjadi generasi yang kritis, kreatif, dan berwawasan luas. Melalui bimbingan tenaga pendidik yang profesional, siswa tidak hanya belajar teori tetapi juga mengembangkan keterampilan kritis dan kreatif yang akan berguna dalam menghadapi tantangan masa depan.</p>
                </div>
            </div>


        </div>

    );
}

export default Jurusan;