const Navbar = () => {
  return (
    <div className="navbar py-7 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-3xl font-bold">Portofolio</h1>
      </div>
      <ul className="menu flex items-center gap-10 fixed left-1/2 sm:static -translate-x-1/2 md:-translate-x-0">
        <li>
          <a href="#" className="text-lg font-medium">
            Beranda
          </a>
        </li>
        <li>
          <a href="#" className="text-lg font-medium">
            Tentang
          </a>
        </li>
        <li>
          <a href="#" className="text-lg font-medium">
            Proyek
          </a>
        </li>
        <li>
          <a href="#" className="text-lg font-medium">
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
