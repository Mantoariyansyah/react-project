import hero from "../assets/hero-bg.jpg";
import { Link } from "react-router-dom";
import gambar1 from "/src/img/gambar1.png";
import gambar2 from "../img/gambar2.png";
import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";
import gambar3 from "../img/gambar3.png";
import icon5 from "../img/icon5.png";
import icon6 from "../img/icon6.png";
import icon7 from "../img/icon7.png";
import icon8 from "../img/icon8.png";
import icon9 from "../img/icon9.png";
import gambar25 from "../img/gambar25.png";
import gambar4 from "../img/gambar4.png";
import gambar5 from "../img/gambar5.png";
import gambar6 from "../img/gambar6.png";
import gambar7 from "../img/gambar7.png";
import gambar8 from "../img/gambar8.png";
import gambar9 from "../img/gambar9.png";
import gambar10 from "../img/gambar10.png";
import gambar11 from "../img/gambar11.png";
import gambar12 from "../img/gambar12.png";
import gambar13 from "../img/gambar13.png";
import gambar14 from "../img/gambar14.png";
import icon10 from "../img/icon10.png";


function Home() {

  const gambarBerita = [gambar4, gambar5, gambar6];

  return (
    <div>

      {/* content1 */}
      <div
        className="h-screen bg-no-repeat bg-top bg-contain relative top-16"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "100% auto",
        }}
      >

        <div className="absolute inset-0 flex items-center px-20">
          <div className="text-white max-w-2xl">
            <p className="uppercase text-white font-bold mb-2 tracking-wider opacity-60">Home</p>
            <h1 className="text-2xl font-bold leading-snug mb-6 text-white">
              Selamat Datang di Official Website <br />
              Sekolah Menengah Atas Swasta Kristen  <br /> Bethel Jakarta
            </h1>
            <div className="flex gap-4">
              <button className="bg-[#FEF600] hover:bg-yellow-500 text-[#101524] px-4 py-2 rounded-lg font-semibold text-md">
                Hubungi Kami
              </button>
              <button className="bg-[#FEF600] hover:bg-yellow-500 text-[#101524] px-5 py-2 rounded-lg font-semibold text-md"><Link to="/daftarsiswa">
                Pendaftaran</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* content2 */}
      <div className="flex px-20 gap-10 pb-20 pt-16">

        <div className="w-1/2">
          <img src={gambar1} alt="gambar1" className="w-full shadow" />
        </div>


        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-4 text-[#101524]">
            Sambutan Kepala Sekolah <br />
            <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[7.0ch] after:bg-[#FEF600] after:rounded-full">
              SMAS Kristen Bethel Jakarta
            </span>
          </h1>

          <h2 className="text-xl font-semibold mt-7 text-[#101524]">Ong Lyanna Natadipraja</h2>

          <p className="text-md font-semibold mt-4">Shalom, salam sejahtera bagi kita semua.</p>

          <p className="text-md mt-2 leading-relaxed text-justify">
            Selamat datang di website SMAS Kristen Bethel Jakarta. Website ini hadir sebagai media informasi dan komunikasi
            untuk seluruh warga sekolah dan masyarakat umum. Dengan mengikuti perkembangan teknologi di era digital, kami
            berharap website ini dapat memudahkan akses informasi mengenai profil, kegiatan, dan prestasi SMAS Kristen Bethel
            Jakarta. Semoga website ini menjadi sarana yang bermanfaat dalam mendukung pendidikan dan pelayanan kami kepada
            masyarakat. Tuhan memberkati.
          </p>
        </div>
      </div>

      {/* content3 */}
      <div className="relative w-full">

        <img src={gambar2} alt="Background1" className="w-full h-auto" />


        <div className="absolute inset-0 flex justify-center items-center">
          <div className="grid grid-cols-4 gap-28">

            <div className="flex flex-col items-center text-center space-y-2">
              <img src={icon1} alt="Peserta Didik" className="w-36" />
              <h1 className="text-4xl font-bold text-white">65</h1>
              <h2 className="text-xl text-white">• Peserta Didik</h2>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <img src={icon2} alt="Tenaga Pendidik" className="w-36" />
              <h1 className="text-4xl font-bold text-white">12</h1>
              <h2 className="text-xl text-white">• Tenaga Pendidik</h2>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <img src={icon3} alt="Ruang Kelas" className="w-36" />
              <h1 className="text-4xl font-bold text-white">3</h1>
              <h2 className="text-xl text-white">• Ruang Kelas</h2>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <img src={icon4} alt="Jurusan" className="w-36" />
              <h1 className="text-4xl font-bold text-white">2</h1>
              <h2 className="text-xl text-white">• Jurusan</h2>
            </div>
          </div>
        </div>
      </div>

      {/* content4 */}
      <div className="pb-20 pt-20 flex gap-24 px-20 bg-[#D9D9D9]">
        <div className="w-[500px]">
          <img src={gambar3} alt="" className="w-full" />
        </div>

        <div className="w-1/2 text-[#101524]">
          <h1 className="text-2xl font-bold mb-6">
            <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[7.5ch] after:bg-[#FEF600] after:rounded-full">
              Mengapa
            </span> SMAS Kristen Bethel Jakarta?
          </h1>

          <div className="space-y-7 mt-16">
            <div className="flex items-center space-x-6">
              <img src={icon5} alt="" className="w-9 h-9" />
              <h2 className="text-lg font-medium">Akademik Berkualitas & Terarah</h2>
            </div>

            <div className="flex items-center space-x-6">
              <img src={icon6} alt="" className="w-9 h-9" />
              <h2 className="text-lg font-medium">Pengembangan Karakter Kristiani</h2>
            </div>

            <div className="flex items-center space-x-6">
              <img src={icon7} alt="" className="w-9 h-9" />
              <h2 className="text-lg font-medium">Fasilitas Penunjang yang Memadai</h2>
            </div>

            <div className="flex items-center space-x-6">
              <img src={icon8} alt="" className="w-9 h-9" />
              <h2 className="text-lg font-medium">Guru Profesional & Peduli</h2>
            </div>

            <div className="flex items-center space-x-6">
              <img src={icon9} alt="" className="w-9 h-9" />
              <h2 className="text-lg font-medium">Lingkungan Belajar Aman & Nyaman</h2>
            </div>
          </div>
        </div>
      </div>

      {/* content5 */}
      <div className="pb-20 px-20 pt-16">

        <h1 className="text-2xl font-bold mb-6 text-center pb-6 text-[#101524]">
          Proses Pendaftaran Siswa Baru <br /> <span className="relative inline-block after:absolute after:left-28 after:bottom-[-12px] after:h-[4px] after:w-[6ch] after:bg-[#FEF600] after:rounded-full">
            SMAS Kristen Bethel Jakarta
          </span>
        </h1>

        <div className="flex items-center justify-center">
          <img src={gambar25} alt="" className="w-[50%]" />
        </div>
      </div>

      {/* content6 */}
      <div className="pb-20 px-20">

        <h1 className="text-2xl font-bold mb-6 text-center pb-6 text-[#101524]">
          Berita & <span className="relative inline-block after:absolute after:left-6 after:bottom-[-12px] after:h-[4px] after:w-[6ch] after:bg-[#FEF600] after:rounded-full">
            Informasi
          </span>
        </h1>

        <div className="flex items-center justify-center space-x-10 text-[#101524]">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="w-90 h-[550px] flex flex-col justify-between rounded-lg shadow shadow-gray-400 p-5 bg-white"
            >

              <div>
                <img
                  src={gambarBerita[index]}
                  alt={`Berita ${index + 1}`}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
              </div>

              <h1 className="text-lg font-bold py-3 leading-snug">
                SMAS Kristen Bethel Jakarta Peringati Hari Pahlawan dengan Upacara
                Khidmat
              </h1>

              <p className="text-sm font-normal leading-relaxed">
                Dalam rangka memperingati Hari Pahlawan, SMAS Kristen Bethel Jakarta
                menggelar upacara bendera yang berlangsung dengan penuh khidmat di
                halaman sekolah pada Jumat pagi, 10 November 2023.
              </p>

              <p className="py-3 text-sm font-semibold text-gray-600">
                1 Oktober 2024
              </p>

              <div className="flex items-center justify-center mt-4">
                <button className="bg-[#101524] hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold text-md">
                  <Link to="/isiberita">Baca Selengkapnya</Link>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <button className="bg-[#101524] hover:bg-gray-800 text-white px-8 py-2 rounded-lg font-semibold text-md">
            <Link to="/berita">Lebih Lanjut</Link>
          </button>
        </div>
      </div>

      {/* content7 */}
      <div className="pb-20 flex items-center justify-center px-20">
        <div>
          <h1 className="text-2xl font-bold mb-6 text-[#101524]">
            SMAS <span className="relative inline-block after:absolute after:left-0 after:bottom-[-12px] after:h-[4px] after:w-[17.7ch] after:bg-[#FEF600] after:rounded-full">
              Kristen Bethel Jakarta
            </span>
          </h1>
          <div className="relative mt-10">
            <img src="/src/img/gambar8.png" alt="" className="w-72" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center p-20 space-y-5">
              <div className="flex items-center space-x-4">
                <img src="/src/img/icon10.png" alt="" className="w-5 h-5" />
                <h1 className="text-[#FEF600] font-bold">Beriman</h1>
              </div>
              <div className="flex items-center space-x-4">
                <img src="/src/img/icon10.png" alt="" className="w-5 h-5" />
                <h1 className="text-[#FEF600] font-bold">Berprestasi</h1>
              </div>
              <div className="flex items-center space-x-4">
                <img src="/src/img/icon10.png" alt="" className="w-5 h-5" />
                <h1 className="text-[#FEF600] font-bold">Melayani</h1>
              </div>
            </div>
          </div>

          <div className="relative mt-4 mx-20">
            <img src="/src/img/gambar7.png" alt="" className="w-72" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-center p-20 space-y-5">
              <div className="flex items-center space-x-4">
                <img src="/src/img/icon10.png" alt="" className="w-5 h-5" />
                <h1 className="text-[#FEF600] font-bold">Berkarakter</h1>
              </div>
              <div className="flex items-center space-x-4">
                <img src="/src/img/icon10.png" alt="" className="w-5 h-5" />
                <h1 className="text-[#FEF600] font-bold">Mandiri</h1>
              </div>
              <div className="flex items-center space-x-4">
                <img src="/src/img/icon10.png" alt="" className="w-5 h-5" />
                <h1 className="text-[#FEF600] font-bold">Berkolaborasi</h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-2">
            <img src="/src/img/gambar9.png" alt="" className="w-full" />
            <img src="/src/img/gambar10.png" alt="" className="w-full" />
            <img src="/src/img/gambar11.png" alt="" className="w-full" />
            <img src="/src/img/gambar12.png" alt="" className="w-full" />
            <img src="/src/img/gambar13.png" alt="" className="w-full" />
            <img src="/src/img/gambar14.png" alt="" className="w-full" />
          </div>

          <div className="mt-7 flex items-center justify-center">
            <button className="bg-[#101524] hover:bg-gray-800 text-md text-white px-8 py-2 rounded-lg font-semibold">
              <Link to="/galeri">Selengkapnya</Link>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;
