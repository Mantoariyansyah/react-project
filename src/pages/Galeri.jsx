import hero from "../assets/hero-bg2.png";
import galeri1 from "../img/galeri1.png";
import galeri2 from "../img/galeri2.png";
import galeri3 from "../img/galeri3.png";
import galeri4 from "../img/galeri4.png";
import galeri5 from "../img/galeri5.png";
import galeri6 from "../img/galeri6.png";
import galeri7 from "../img/galeri7.png";
import galeri8 from "../img/galeri8.png";
import galeri9 from "../img/galeri9.png";
import galeri10 from "../img/galeri10.png";
import galeri11 from "../img/galeri11.png";
import galeri12 from "../img/galeri12.png";
import galeri13 from "../img/galeri13.png";
import galeri14 from "../img/galeri14.png";
import galeri15 from "../img/galeri15.png";
import galeri16 from "../img/galeri16.png";
import galeri17 from "../img/galeri17.png";
import galeri18 from "../img/galeri18.png";
import galeri19 from "../img/galeri19.png";
import galeri20 from "../img/galeri20.png";

function Galeri() {
    const galeriImages = [
        galeri1, galeri2, galeri3, galeri4, galeri5,
        galeri6, galeri7, galeri8, galeri9, galeri10,
        galeri11, galeri12, galeri13, galeri14, galeri15,
        galeri16, galeri17, galeri18, galeri19, galeri20
    ];

    return (
        <div>
            {/* Hero Section */}
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

            {/* Galeri Grid */}
            <div className="pb-60 px-20 pt-30">
                <div className="grid grid-cols-4 gap-6">
                    {galeriImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`galeri-${index + 1}`}
                            className="w-full h-auto object-cover"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Galeri;
