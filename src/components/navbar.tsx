import logo from "./../assets/logo.png";

function Navbar() {
  return (
    <div
      className="sticky top-0 z-10 flex w-full items-center  justify-between bg-primary  px-4	 py-2 text-offWhite drop-shadow-lg lg:px-global
"
    >
      <img src={logo} alt="Logo" className="w-24 lg:w-28" />
      <div className="flex justify-center gap-3">
        <a>About</a>
        <a>Funding</a>
        <a>Investigators</a>
      </div>
      <a className="flex flex-row items-center gap-1">Login</a>
    </div>
  );
}

export default Navbar;
