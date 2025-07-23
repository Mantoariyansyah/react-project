import hero from "../assets/hero-bg2.png";
import alumniImg from "../assets/img/alumni.png";

function Alumni() {
  const alumniList = Array(12).fill({
    name: "Anggi Sondang",
    university: "UPN Veteran Jakarta",
    major: "Sistem Informasi",
    img: alumniImg,
  });

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
            <h1 className="text-2xl font-semibold leading-snug mb-3">
              ALUMNI SEKOLAH
            </h1>
            <h2 className="text-md font-medium">
              SMAS KRISTEN BETHEL JAKARTA
            </h2>
          </div>
        </div>
      </div>

      {/* Alumni Grid */}
      <div className="pt-30 pb-20 px-20">
        <div className="grid grid-cols-4 gap-10 px-10">
          {alumniList.map((alumni, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow shadow-gray-400 p-4 text-center"
            >
              <img
                src={alumni.img}
                alt={alumni.name}
                className="w-auto h-40 object-cover rounded-md mx-auto mb-5"
              />
              <h2 className="text-sm font-semibold text-gray-800">
                {alumni.name}
              </h2>
              <p className="text-xs text-gray-600 pt-2">
                {alumni.university}
              </p>
              <p className="text-xs text-gray-600">{alumni.major}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Alumni;
