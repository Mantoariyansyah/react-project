import hero from "../assets/hero-bg2.png";




function Sejarah() {

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
                            SEJARAH
                        </h1>
                        <h2 className="text-md font-medium">SMAS KRISTEN BETHEL JAKARTA</h2>
                    </div>
                </div>
            </div>

            {/* content2 */}
                <div className="pt-20 pb-20">

                <div className="px-[123px]  space-y-8">
                    <p className="text-sm font-normal leading-snug tracking-wider">SMAS Kristen Bethel Jakarta adalah sebuah sekolah menengah atas swasta Kristen yang berlokasi di kawasan strategis di Petamburan, Jakarta Pusat. Sekolah ini berdiri dengan tujuan mulia untuk menjadi pusat pendidikan yang tidak hanya mengedepankan prestasi akademik, tetapi juga membentuk karakter siswa yang beriman, berintegritas, dan melayani sesuai dengan nilai-nilai Kristiani.</p>
                    <p className="text-sm font-normal leading-snug tracking-wider">SMAS Kristen Bethel Jakarta didirikan pada tahun 1989 sebagai bagian dari upaya untuk menyediakan pendidikan berkualitas dengan landasan nilai-nilai keimanan yang kokoh. Dalam perjalanannya, sekolah ini terus berkembang berkat dedikasi para pendiri, tenaga pendidik, dan dukungan penuh dari komunitas Kristen setempat. Pada awal berdirinya, SMAS Kristen Bethel Jakarta hanya memiliki beberapa kelas dan jumlah siswa yang terbatas. Namun, seiring waktu, sekolah ini berkembang pesat baik dari segi fasilitas maupun kualitas pendidikan.</p>
                    <p className="text-sm font-normal leading-snug tracking-wider">Hingga saat ini, SMAS Kristen Bethel Jakarta telah memiliki akreditasi "A" dan menjadi salah satu sekolah unggulan di wilayahnya. Dengan tenaga pendidik yang profesional dan berkompeten, SMAS Kristen Bethel Jakarta terus memberikan kontribusi dalam mencetak generasi muda yang tidak hanya cerdas secara intelektual, tetapi juga memiliki hati yang melayani serta mampu menjadi terang dan garam bagi masyarakat..</p>
                    <p className="text-sm font-normal leading-snug tracking-wider">Melalui fasilitas yang lengkap, lingkungan belajar yang kondusif, dan berbagai kegiatan ekstrakurikuler yang mendukung pengembangan bakat dan minat siswa, SMAS Kristen Bethel Jakarta berkomitmen untuk menciptakan lulusan yang siap bersaing di dunia global, namun tetap berpijak pada nilai-nilai Kristiani. Dengan semangat melayani dan kasih Kristus, sekolah ini terus menjalankan visinya sebagai lembaga pendidikan yang memberdayakan siswa untuk menjadi pemimpin masa depan yang berintegritas dan berkarakter.</p>
                    <p className="text-sm font-normal leading-snug tracking-wider">"Beriman, Berprestasi, Melayani" adalah moto yang menjadi nafas dalam setiap aktivitas di SMAS Kristen Bethel Jakarta. Kiranya sekolah ini terus menjadi berkat bagi seluruh siswa, orang tua, dan masyarakat luas.</p>
                </div>

                 <div className="flex items-center justify-center pt-14 pb-20">
                    <img src="/src/img/Gedungsejarah.png" alt="" className="w-[80%]" />
                </div>
            </div>

        </div>

    );
}

export default Sejarah;