import Image from "next/image";
import logo from "../assets/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

function Navbar() {
  return (
    // before:bg-[linear-gradient(to_bottom,#000_30%,rgba(0,0,0,0))]
    <div className="bg-black before:content-[''] before:h-7 before:w-full before:absolute before:top-[calc(100%)] relative before:bg-[linear-gradient(to_bottom,#000,rgba(0,0,0,0))] before:z-10">
      <div className="px-4">
        <div className="flex items-center justify-between py-4 py-">
          <div className="relative">
            <div className="absolute bottom-0 w-full top-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-[6px]"></div>
            <Image className="relative w-12 h-12" src={logo} alt="logo" />
          </div>
          <div className="inline-flex items-center justify-center w-10 h-10 border border-white rounded-lg border-opacity-30 sm:hidden">
            <MenuIcon className="text-white" />
          </div>

          <nav className="items-center hidden gap-6 sm:flex">
            <a
              href="#"
              className="text-white transition text-opacity-60 hover:text-opacity-100"
            >
              About
            </a>
            <a
              href="#"
              className="text-white transition text-opacity-60 hover:text-opacity-100"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white transition text-opacity-60 hover:text-opacity-100"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-white transition text-opacity-60 hover:text-opacity-100"
            >
              Help
            </a>
            <a
              href="#"
              className="text-white transition text-opacity-60 hover:text-opacity-100"
            >
              Customers
            </a>
            <button className="px-4 py-2 bg-white rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
