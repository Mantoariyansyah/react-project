import hero from "../assets/hero-bg2.png";
import { Link } from "react-router-dom";


function Galeri() {
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
                            GALERI
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="pb-60 px-20 pt-30">
                <div className="grid grid-cols-4 gap-6">
                    <img src="/src/img/galeri1.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri2.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri3.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri4.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri5.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri6.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri7.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri8.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri9.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri10.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri11.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri12.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri13.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri14.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri15.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri16.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri17.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri18.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri19.png" alt="" className="w-full h-auto object-cover" />
                    <img src="/src/img/galeri20.png" alt="" className="w-full h-auto object-cover" />
                </div>
            </div>



        </div>
    );
}

export default Galeri;