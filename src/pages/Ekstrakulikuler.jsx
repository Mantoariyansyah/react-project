import hero from "../assets/hero-bg2.png";
import ekstra1 from "../img/ekstrakulikuler1.png";
import ekstra2 from "../img/ekstrakulikuler2.png";
import ekstra3 from "../img/ekstrakulikuler3.png";
import ekstra4 from "../img/ekstrakulikuler4.png";
import ekstra5 from "../img/ekstrakulikuler5.png";
import ekstra6 from "../img/ekstrakulikuler6.png";

function Ekstrakulikuler() {
    const ekstrakulikulerList = [
        { img: ekstra1, title: "Bola Basket" },
        { img: ekstra2, title: "Sepak Bola" },
        { img: ekstra3, title: "Kerohanian" },
        { img: ekstra4, title: "Paskibra" },
        { img: ekstra5, title: "Pramuka" },
        { img: ekstra6, title: "Bulu Tangkis" },
        { img: ekstra6, title: "Bola Basket" },
        { img: ekstra6, title: "Bola Basket" },
        { img: ekstra6, title: "Bola Basket" },
    ];

    return (
        <div>
            {/* Header */}
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
                            EKSTRAKULIKULER
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="pt-30 pb-80 px-20">
                <div className="grid grid-cols-3 gap-14 px-10">
                    {ekstrakulikulerList.map((item, index) => (
                        <div
                            className="bg-white rounded-xl shadow shadow-gray-400 p-4"
                            key={index}
                        >
                            <div className="text-center">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-auto object-cover rounded-md mx-auto mb-5"
                                />
                                <h2 className="text-md font-semibold text-[#101524]">{item.title}</h2>
                            </div>
                            <div className="text-sm text-[#101524] pt-2 px-2 space-y-2">
                                <div className="flex">
                                    <span className="w-[90px] font-bold">Pembimbing</span>
                                    <span>: Iyan Sopian, S.pd</span>
                                </div>
                                <div className="flex">
                                    <span className="w-[90px] font-bold">No. Tlpn</span>
                                    <span>: 085659390050</span>
                                </div>
                                <div className="flex">
                                    <span className="w-[90px] font-bold">Hari</span>
                                    <span>: Kamis</span>
                                </div>
                                <div className="flex">
                                    <span className="w-[90px] font-bold">Waktu</span>
                                    <span>: 14.00 - 16.00</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Ekstrakulikuler;
