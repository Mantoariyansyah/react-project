import hero from "../assets/hero-bg2.png";


function Sarana() {
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
                            SARANA & PRASARANA
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="pt-30 pb-80 px-20">
                <div className="grid grid-cols-3 gap-14 px-10">
                
                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-5">
                        <div className="text-center relative">
                            <img src="/src/img/sarana4.png" alt="Guru" className="w-auto object-cover rounded-md mx-auto" />
                            <div className="bg-[#101524] rounded-lg mx-auto right-0 left-0 absolute bottom-0">
                                <h2 className="text-md font-semibold text-white">CCTV</h2>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4">
                        <div className="text-center relative">
                            <img src="/src/img/sarana3.png" alt="Guru" className="w-auto object-cover rounded-md mx-auto" />
                            <div className="bg-[#101524] rounded-lg mx-2 right-0 left-0 absolute bottom-0">
                                <h2 className="text-md font-semibold text-white">Taman Sekolah</h2>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4">
                        <div className="text-center relative">
                            <img src="/src/img/sarana2.png" alt="Guru" className="w-auto object-cover rounded-md mx-auto" />
                            <div className="bg-[#101524] rounded-lg mx-2 right-0 left-0 absolute bottom-0">
                                <h2 className="text-md font-semibold text-white">Lab Ipa</h2>
                            </div>
                        </div>
                    </div>


                  <div className="bg-white rounded-xl shadow shadow-gray-400 p-4">
                        <div className="text-center relative">
                            <img src="/src/img/sarana1.png" alt="Guru" className="w-auto object-cover rounded-md mx-auto" />
                            <div className="bg-[#101524] rounded-lg mx-2 right-0 left-0 absolute bottom-0">
                                <h2 className="text-md font-semibold text-white">CCTV</h2>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4">
                        <div className="text-center relative">
                            <img src="/src/img/sarana1.png" alt="Guru" className="w-auto object-cover rounded-md mx-auto" />
                            <div className="bg-[#101524] rounded-lg mx-2 right-0 left-0 absolute bottom-0">
                                <h2 className="text-md font-semibold text-white">Taman Sekolah</h2>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4">
                        <div className="text-center relative">
                            <img src="/src/img/sarana1.png" alt="Guru" className="w-auto object-cover rounded-md mx-auto" />
                            <div className="bg-[#101524] rounded-lg mx-2 right-0 left-0 absolute bottom-0">
                                <h2 className="text-md font-semibold text-white">Lab Ipa</h2>
                            </div>
                        </div>
                    </div>


                   <div className="bg-white rounded-xl shadow shadow-gray-400 p-5">
                        <div className="text-center relative">
                            <img src="/src/img/sarana4.png" alt="Guru" className="w-auto object-cover rounded-md mx-auto" />
                            <div className="bg-[#101524] rounded-lg mx-auto right-0 left-0 absolute bottom-0">
                                <h2 className="text-md font-semibold text-white">CCTV</h2>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4">
                        <div className="text-center relative">
                            <img src="/src/img/sarana3.png" alt="Guru" className="w-auto object-cover rounded-md mx-auto" />
                            <div className="bg-[#101524] rounded-lg mx-2 right-0 left-0 absolute bottom-0">
                                <h2 className="text-md font-semibold text-white">Taman Sekolah</h2>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4">
                        <div className="text-center relative">
                            <img src="/src/img/sarana2.png" alt="Guru" className="w-auto object-cover rounded-md mx-auto" />
                            <div className="bg-[#101524] rounded-lg mx-2 right-0 left-0 absolute bottom-0">
                                <h2 className="text-md font-semibold text-white">Lab Ipa</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default Sarana;