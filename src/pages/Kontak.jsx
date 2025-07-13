import hero from "../assets/hero-bg2.png";


function Kontak() {
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
                            KONTAK
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="pt-30 pb-80 px-20">
                <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow shadow-gray-400">
             
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-black mb-1">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            placeholder="Masukkan Nama Lengkap"
                            className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#101524]"
                        />
                    </div>

                   
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-black mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Masukkan Email"
                            className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#101524]"
                        />
                    </div>

             
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-black mb-1">
                            No Telepone
                        </label>
                        <input
                            type="text"
                            placeholder="Masukkan No Telepone"
                            className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#101524]"
                        />
                    </div>

               
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-black mb-1">
                            Pesan & Kesan
                        </label>
                        <textarea
                            placeholder="Masukkan Pesan & Kesan"
                            rows={4}
                            className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#101524]"
                        ></textarea>
                    </div>

                 
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#0F0F1C] text-white px-6 py-2 rounded-md hover:bg-[#1a1a2e] transition"
                        >
                            Kirim
                        </button>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Kontak;