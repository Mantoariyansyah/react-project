import hero from "../assets/hero-bg2.png";
import guru1 from "../img/guru 1.png";
import guru2 from "../img/guru 2.png";
import guru3 from "../img/guru 3.png";

function TenagaPddk() {
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
                            TENAGA PENDIDIK
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="pt-30 pb-20 px-20">
                <div className="grid grid-cols-4 gap-20 px-10">
                    {/* Baris 1 */}
                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4 text-center">
                        <img src={guru1} alt="Guru" className="w-auto h-40 object-cover rounded-md mx-auto mb-5" />
                        <h2 className="text-sm font-semibold text-gray-800">Dra. Joyce Elvira Sihasale</h2>
                        <p className="text-xs text-gray-600">Guru Matematika</p>
                    </div>
                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4 text-center">
                        <img src={guru2} alt="Guru" className="w-auto h-40 object-cover rounded-md mx-auto mb-5" />
                        <h2 className="text-sm font-semibold text-gray-800">Dra. Joyce Elvira Sihasale</h2>
                        <p className="text-xs text-gray-600">Guru Matematika</p>
                    </div>
                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4 text-center">
                        <img src={guru3} alt="Guru" className="w-auto h-40 object-cover rounded-md mx-auto mb-5" />
                        <h2 className="text-sm font-semibold text-gray-800">Dra. Joyce Elvira Sihasale</h2>
                        <p className="text-xs text-gray-600">Guru Matematika</p>
                    </div>
                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4 text-center">
                        <img src={guru1} alt="Guru" className="w-auto h-40 object-cover rounded-md mx-auto mb-5" />
                        <h2 className="text-sm font-semibold text-gray-800">Dra. Joyce Elvira Sihasale</h2>
                        <p className="text-xs text-gray-600">Guru Matematika</p>
                    </div>

                    {/* Baris 2 */}
                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4 text-center">
                        <img src={guru1} alt="Guru" className="w-auto h-40 object-cover rounded-md mx-auto mb-5" />
                        <h2 className="text-sm font-semibold text-gray-800">Dra. Joyce Elvira Sihasale</h2>
                        <p className="text-xs text-gray-600">Guru Matematika</p>
                    </div>
                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4 text-center">
                        <img src={guru2} alt="Guru" className="w-auto h-40 object-cover rounded-md mx-auto mb-5" />
                        <h2 className="text-sm font-semibold text-gray-800">Dra. Joyce Elvira Sihasale</h2>
                        <p className="text-xs text-gray-600">Guru Matematika</p>
                    </div>
                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4 text-center">
                        <img src={guru3} alt="Guru" className="w-auto h-40 object-cover rounded-md mx-auto mb-5" />
                        <h2 className="text-sm font-semibold text-gray-800">Dra. Joyce Elvira Sihasale</h2>
                        <p className="text-xs text-gray-600">Guru Matematika</p>
                    </div>
                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4 text-center">
                        <img src={guru1} alt="Guru" className="w-auto h-40 object-cover rounded-md mx-auto mb-5" />
                        <h2 className="text-sm font-semibold text-gray-800">Dra. Joyce Elvira Sihasale</h2>
                        <p className="text-xs text-gray-600">Guru Matematika</p>
                    </div>


                </div>
                <div className="flex items-center justify-center pt-20 pb-60">
                    <div className="bg-white rounded-xl shadow shadow-gray-400 p-4 text-center">
                        <img src={guru1} alt="Guru" className="w-auto h-40 object-cover rounded-md mx-auto mb-5" />
                        <h2 className="text-sm font-semibold text-gray-800">Dra. Joyce Elvira Sihasale</h2>
                        <p className="text-xs text-gray-600">Guru Matematika</p>
                    </div>
                </div>

            </div>


        </div>

    );
}

export default TenagaPddk;