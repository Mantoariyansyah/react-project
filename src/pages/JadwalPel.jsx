import hero from "../assets/hero-bg2.png";


function JadwalPel() {
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
                            JADWAL PELAJARAN
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="pt-30 pb-40">

                <div className="flex items-center justify-center ">
                    <img src="/src/img/gambar23.png" alt="" className="w-[60%]" />
                </div>

                <div className="flex items-center justify-center pt-8">
                    <button className="bg-[#101524] hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                        Download
                    </button>
                </div>
            </div>
        </div>

    );
}

export default JadwalPel;