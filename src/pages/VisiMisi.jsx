import hero from "../assets/hero-bg2.png";


function VisiMisi() {
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
                            VISI & MISI
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="bg-[#E6E6E7] pt-20 pb-10 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#133E87] mb-6">Visi</h2>
                    <p className="text-base md:text-lg text-[#373F41] font-semibold leading-relaxed">
                        Mewujudkan sumber daya manusia berkualitas dalam ilmu dan teknologi yang <br />
                        dilandasi iman Kristiani, berkarakter, berbudaya, cinta lingkungan, mandiri, berpikir kritis, <br />
                        berkebinnekaan global serta berwawasan.
                    </p>
                </div>
            </div>

            {/* content3 */}
            <div className="bg-white pb-10 pt-10 px-30">
                <h2 className="text-xl md:text-2xl font-bold text-[#133E87] mb-8">Indikator Visi</h2>

                <ol className="list-decimal space-y-6 text-gray-800 pl-5">
                    <li>
                        <p className="font-semibold">Unggul dalam Karakter Bangsa</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                              <li>Memiliki karakter Pelajar Pancasila dan pembelajar abad 21 dengan indikator:</li>
                        </ul>
                        <ul className="list-disc pl-12 mt-2 space-y-2">
                            <li>
                                <span className="font-medium">Beriman, bertakwa kepada Tuhan Yang Maha Esa, dan berakhlak mulia:</span><br />
                                Membangun kebiasaan beribadah dan menerapkan 5S (Senyum, Sapa, Salam, Sopan, Santun).
                            </li>
                            <li>
                                <span className="font-medium">Berkebhinekaan global:</span><br />
                                Membekali peserta didik dengan pengalaman lintas budaya baik nasional maupun internasional.
                            </li>
                            <li>
                                <span className="font-medium">Gotong royong:</span><br />
                                Mengembangkan sikap kepedulian, nasionalisme, patriotisme melalui aktivitas sosial dan cinta lingkungan.
                            </li>
                            <li>
                                <span className="font-medium">Mandiri:</span><br />
                                Mengembangkan dan memfasilitasi peserta didik untuk mencapai kompetensi akademik minimal serta mengembangkan bakat dan keterampilan hidup (life skill).
                            </li>
                            <li>
                                <span className="font-medium">Kreatif dan bernalar kritis:</span><br />
                                Mengembangkan pembelajaran berbasis HOTS (Higher Order Thinking Skills) dan membangun kemampuan literasi dasar yang berlandaskan kejujuran, bakat, dan minat peserta didik.
                            </li>
                        </ul>
                    </li>

                    <li>
                        <p className="font-semibold">Unggul dalam Kepercayaan Diri untuk Belajar dan Mengajar Berkualitas</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Meningkatkan nilai USBN (Ujian Sekolah Berstandar Nasional) dan ANBK (Asesmen Nasional Berbasis Komputer).</li>
                        </ul>
                    </li>

                    <li>
                        <p className="font-semibold">Unggul dalam Persaingan Melanjutkan Pendidikan ke Jenjang Lebih Tinggi dan Dunia Kerja</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Membekali siswa dengan kompetensi dan keterampilan yang relevan untuk melanjutkan pendidikan atau memasuki dunia kerja.</li>
                        </ul>

                    </li>

                    <li>
                        <p className="font-semibold">Unggul dalam Lomba Kesenian dan Olahraga</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Berprestasi di berbagai ajang lomba kesenian dan olahraga di tingkat lokal, nasional, maupun internasional.</li>
                        </ul>

                    </li>

                    <li>
                        <p className="font-semibold">Unggul dalam Kegiatan Rohani dan Ketaatan pada Firman Tuhan</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Melakukan 4M:</li>
                        </ul>
                        <ul className="list-disc pl-12 mt-2 space-y-1">
                            <li>Mendengarkan,</li>
                            <li>Merenungkan,</li>
                            <li>Melakukan,</li>
                            <li>Membagikan Firman Tuhan.</li>
                        </ul>
                    </li>
                </ol>
            </div>

            {/* content4 */}
            <div className="bg-[#E6E6E7] pt-10 pb-10 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#133E87] mb-6">Misi</h2>
                    <p className="text-base md:text-lg text-[#373F41] font-semibold leading-relaxed">
                        Menyiapkan sumber daya manusia masa depan yang menguasai ilmu pengetahuan
                        dan teknologi dan memiliki karakter profil pelajar Pancasila dan meningkatkan
                        profesionalisme tenaga kependidikan sesuai dengan perkembangan dunia pendidikan.
                    </p>
                </div>
            </div>

            {/* content5 */}
            <div className="bg-white pt-10 pb-30 px-30">
                <h2 className="text-xl md:text-2xl font-bold text-[#133E87] mb-8">Indikator Misi</h2>

                <ol className="list-decimal space-y-6 text-gray-800 pl-5">
                    <li>
                        <p className="font-semibold">Mengembangkan sumber daya manusia</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Beriman, inovatif, efektif, kreatif, komunikatif, kolaboratif, dan berkualitas.</li>
                        </ul>
                    </li>

                    <li>
                        <p className="font-semibold">Mengasah hati nurani</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Membentuk karakter yang jujur, disiplin, toleran, dan bertanggung jawab.</li>
                        </ul>
                    </li>

                    <li>
                        <p className="font-semibold">Menumbuhkan kepedulian terhadap lingkungan dan sesama</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Berdasarkan kesetaraan gender, ketekunan dalam beribadah, dan pelaksanaan Firman Tuhan melalui 4M:</li>
                        </ul>
                        <ul className="list-disc pl-12 mt-2 space-y-1">
                            <li>Mendengarkan,</li>
                            <li>Merenungkan,</li>
                            <li>Melaksanakan,</li>
                            <li>Membagikan</li>
                        </ul>
                    </li>

                    <li>
                        <p className="font-semibold">Mewujudkan individu yang berkontribusi pada kehidupan bermasyarakat, berbangsa, dan bernegara</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Melalui sikap dan tindakan yang mendukung kehidupan bersama yang harmonis.</li>
                        </ul>
                    </li>
                    
                    <li>
                        <p className="font-semibold">Membekali peserta didik</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Untuk berprestasi, menjadi lulusan berkualitas, dan siap melanjutkan pendidikan ke jenjang yang lebih tinggi.</li>
                        </ul>
                    </li>
                    
                    <li>
                        <p className="font-semibold">Meningkatkan profesionalisme tenaga kependidikan</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Melalui pelatihan dan pengembangan kompetensi yang relevan dengan perkembangan dunia pendidikan.</li>
                        </ul>
                    </li>
                </ol>
            </div>

        </div>
    );
}

export default VisiMisi;