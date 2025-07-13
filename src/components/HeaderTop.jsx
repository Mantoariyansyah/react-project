import logo from "../assets/logo.png";
import { MdEmail, MdPhone } from "react-icons/md";

function HeaderTop() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#101524] text-white flex justify-between items-center px-20 py-3">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <h1 className="text-[#FEF600] font-bold text-md">
          SMAS KRISTEN BETHEL JAKARTA
        </h1>
      </div>
      <div className="text-sm flex items-center gap-2 text-white">
      <div className="flex items-center gap-1">
        <MdEmail className="text-lg" />
        <span>smakbethelpetaburan4@gmail.com</span>
      </div>
      <span>|</span>
      <div className="flex items-center gap-1">
        <MdPhone className="text-lg" />
        <span>(021) 5707687</span>
      </div>
    </div>
    </header>
  );
}

export default HeaderTop;
