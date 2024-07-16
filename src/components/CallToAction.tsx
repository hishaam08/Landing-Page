import CTAIcon1 from "@/assets/CTA-Icon-1.png";
import CTAIcon2 from "@/assets/CTA-Icon-2.png";
import Image from "next/image";

function CallToAction() {
  return (
    <div className="text-white bg-black py-[74px] sm:py-24 text-center overflow-hidden">
      <div className="max-w-[540px] mx-auto px-4 relative">
        <Image
          src={CTAIcon1}
          alt="cta icon"
          className="absolute right-[calc(100%+24px)] -top-[100px]"
        />
        <Image
          src={CTAIcon2}
          alt="cta icon"
          className="absolute left-[calc(100%+36px)] top-6"
        />
        <h2 className="text-5xl font-bold tracking-tighter text-center sm:text-6xl">
          Get instant access
        </h2>
        <p className="mt-5 text-xl text-center text-white/30">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="flex flex-col sm:flex-row mt-10 gap-2.5">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 px-5 font-medium rounded-lg bg-white/20 placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button className="h-12 px-4 py-3 text-black bg-white rounded-lg">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
}

export default CallToAction;
