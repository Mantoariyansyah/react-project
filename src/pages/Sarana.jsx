import hero from "../assets/hero-bg2.png";

// Import gambar-gambar sarana
import sarana1 from "../img/sarana1.png";
import sarana2 from "../img/sarana2.png";
import sarana3 from "../img/sarana3.png";
import sarana4 from "../img/sarana4.png";

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

                    {/* Setiap box menggunakan gambar import */}
                    {[ 
                        { img: sarana4, title: "CCTV" },
                        { img: sarana3, title: "Taman Sekolah" },
                        { img: sarana2, title: "Lab Ipa" },
                        { img: sarana1, title: "CCTV" },
                        { img: sarana1, title: "Taman Sekolah" },
                        { img: sarana1, title: "Lab Ipa" },
                        { img: sarana4, title: "CCTV" },
                        { img: sarana3, title: "Taman Sekolah" },
                        { img: sarana2, title: "Lab Ipa" },
                    ].map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow shadow-gray-400 p-4">
                            <div className="text-center relative">
                                <img
                                    src={item.img}
                                    alt="Sarana"
                                    className="w-auto object-cover rounded-md mx-auto"
                                />
                                <div className="bg-[#101524] rounded-lg mx-2 right-0 left-0 absolute bottom-0">
                                    <h2 className="text-md font-semibold text-white">{item.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Sarana;
