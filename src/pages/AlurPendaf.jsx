import hero from "../assets/hero-bg2.png";
import gambar25 from "../img/gambar25.png";
import { Link } from "react-router-dom";

function AlurPendaf() {
   
    return (

        <div>
            {/* content1 */}
            <div
                className="min-h-[60vh] bg-no-repeat bg-top bg-contain relative"
                style={{
                    backgroundImage: `url(${hero})`,
                    backgroundSize: "100% auto",
                }}
            >
                <div className="absolute inset-0 flex items-start justify-center px-20 pt-40">
                    <div className="text-white max-w-2xl text-center">
                        <h1 className="text-2xl font-semibold leading-snug mb-3 text-white">
                            ALUR PENDAFTARAN
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

    
            {/* content2 */}
              <div className="pt-20 pb-40">
         
                         <div className="flex items-center justify-center ">
                           <img src={gambar25} alt="" className="w-[35%]" />
                         </div>
                        
                        <Link to="/daftarsiswa">
                          <div className="flex items-center justify-center pt-8">
                             <button  className="bg-[#101524] hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                                 Daftar
                             </button>
                         </div>
                        </Link>
                       
                     </div>





        </div>


    );

}

export default AlurPendaf;