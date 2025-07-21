import hero from "../assets/hero-bg2.png";


function Osis() {
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
                            OSIS
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
            <div className="flex items-center justify-center pt-24 pb-80">
                <img src="/src/img/Gambar26.png" alt="" className="w-[50%]" />
            </div>
        </div>

    );
}

export default Osis;