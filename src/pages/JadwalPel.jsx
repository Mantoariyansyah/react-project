import hero from "../assets/hero-bg2.png";
import gambar23 from "../img/gambar23.png";
import { useEffect, useState } from "react";
import { jadPel } from "../services/api";

function JadwalPel() {
  const [fileUrl, setFileUrl] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchJadwal = async () => {
      try {
        setLoading(true);
        const response = await jadPel(); 
       
        setFileUrl(response.data.file_url);
      } catch (err) {
        console.error("Gagal memuat jadwal:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJadwal();
  }, []);

  const handleDownload = () => {
    if (!fileUrl) {
      alert("File jadwal belum tersedia.");
      return;
    }
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "Jadwal-Pelajaran.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

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
            <h2 className="text-md font-medium">
              SMAS KRISTEN BETHEL JAKARTA
            </h2>
          </div>
        </div>
      </div>

      {/* content2 */}
      <div className="pt-30 pb-40">
        <div className="flex items-center justify-center ">
          <img src={gambar23} alt="" className="w-[60%]" />
        </div>

        <div className="flex items-center justify-center pt-8">
          <button
            onClick={handleDownload}
            disabled={loading}
            className="bg-[#101524] hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold text-sm"
          >
            {loading ? "Loading..." : "Download"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default JadwalPel;
