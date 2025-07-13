import hero from "../assets/hero-bg2.png";


function LayananPrestasi() {
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
                            LAYANAN PRESTASI
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="w-full flex justify-center pb-80 pt-30 bg-white">
                <form className="w-[60%]">

                    <h1 className="text-xl font-bold mb-6">
                        <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[8.5ch] after:bg-[#FEF600] after:rounded-full">
                            Data Profil Prestasi
                        </span>
                    </h1>

                    <div className="grid grid-cols-2 gap-16">

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="nama" className="block text-sm font-medium text-[#101524] mb-1">
                                    Nama Prestasi <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="nama"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                    placeholder="Masukkan Nama Lengkap"
                                />
                            </div>

                            <div>
                                <label htmlFor="kategoriPeserta" className="block text-sm font-medium text-[#101524] mb-1">
                                    Kategori Peserta <span className="text-red-500">*</span>
                                </label>

                                <select
                                    id="kategoriPeserta"
                                    className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md bg-white focus:ring-2 focus:[#101524] focus:outline-none"
                                    defaultValue=""
                                >
                                    <option value="" disabled hidden>Pilih Kategori Peserta</option>
                                    <option value="siswa">Siswa</option>
                                    <option value="tim">Tim</option>
                                </select>
                            </div>



                            <div>
                                <label htmlFor="tempat" className="block text-sm font-medium text-[#101524] mb-1">
                                    Nama Siswa <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="tempat"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                    placeholder="Masukkan tempat lahir"
                                />
                            </div>

                            <div>
                                <label htmlFor="tanggal" className="block text-sm font-medium text-[#101524] mb-1">
                                    Tanggal Prestasi <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    id="tanggal"
                                    className="w-full px-3 py-1.5 text-sm border border-gray-400 rounded-md focus:ring-2 focus:[#101524] focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">

                            <div>
                                <label htmlFor="fileDokumen" className="block text-sm font-medium text-[#101524] mb-2">
                                    Foto juara/Sertifikat <span className="text-red-500">*</span>
                                </label>
                                <div className="relative w-full h-40 border border-gray-400 rounded-md p-4">

                                    <input
                                        type="file"
                                        id="fileDokumen"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        className="absolute bottom-4 left-4 w-36 text-sm text-gray-500
                                        file:mr-2 file:py-1 file:px-3
                                        file:rounded-md file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-gray-200 file:text-[#101524]
                                        hover:file:bg-blue-100
                                        border border-gray-400 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end pt-20">
                                <button
                                    type="submit"
                                    className="bg-[#101524] hover:bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold"
                                >
                                    Kirim
                                </button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default LayananPrestasi;