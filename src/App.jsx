import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>Kode yang indah, lahir dari ketekunan.😊</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Sakha Ibadil Kirom
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya Mempunyai ketertarikan dalam bidang Programming dan Designer,
            terutama pada pembuatan Website dan Desain seperti Poster, Pamflet
            serta Banner, ketertarikan pada bidang ini sudah berlangsung selama
            1 tahun untuk semua bidang.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-125 md:ml-auto"
        />
      </div>

      {/* Tentang */}
      <div className="tentag mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Sakha Ibadil Kirom, seorang Full Stack Web
            Development dan Designer untuk UI/UX maupun Product Digital, saya
            percaya bahwa desain dan fungsionalitas harus berjalan beriringan,
            sehingga setipa proyek yang saya kembangakan tidak hanya terlihat
            menarik tetapi juga memberikan pengalaman pengguna yang optimal.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500"></span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500"></span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
