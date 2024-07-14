import Image from "next/image";
import AcmeLogo from "@/assets/acme.png";
import ApexLogo from "@/assets/apex.png";
import CelestiaLogo from "@/assets/celestia.png";
import EchoLogo from "@/assets/echo.png";
import PulseLogo from "@/assets/pulse.png";
import QuantumLogo from "@/assets/quantum.png";

function LogoTicker() {
  return (
    <div className="text-white bg-black py-[72px] sm:py-24 md:before:content-[''] before:w-full before:h-40 before:absolute relative before:top-[-120px] before:bg-[linear-gradient(to_top,#000_30%,rgba(0,0,0,0))]">
      <div className="container">
        <h2 className="text-[#7A7A7A] text-lg text-center">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:right-0 after:top-0 before:left-0 before:top-0 before:bg-[linear-gradient(to_right,#000,rgba(0,0,0,0))] after:bg-[linear-gradient(to_right,rgba(0,0,0,0),#000)]">
          <div className="flex gap-16">
            <Image className="flex-none w-auto h-8" src={AcmeLogo} alt="" />
            <Image className="flex-none w-auto h-8" src={QuantumLogo} alt="" />
            <Image className="flex-none w-auto h-8" src={EchoLogo} alt="" />
            <Image className="flex-none w-auto h-8" src={CelestiaLogo} alt="" />
            <Image className="flex-none w-auto h-8" src={PulseLogo} alt="" />
            <Image className="flex-none w-auto h-8" src={ApexLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoTicker;
