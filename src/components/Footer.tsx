import Icon1 from "@/assets/icons/footer-icon-1.svg";
import Icon2 from "@/assets/icons/footer-icon-2.svg";
import Icon3 from "@/assets/icons/footer-icon-3.svg";
import Icon4 from "@/assets/icons/footer-icon-4.svg";
import Icon5 from "@/assets/icons/footer-icon-5.svg";
import Icon6 from "@/assets/icons/footer-icon-6.svg";

function Footer() {
  return (
    <footer className="py-5 bg-black border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-[#808080] text-center">
            @ 2024 Your Company, Inc. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <Icon1 />
            </li>
            <li>
              <Icon2 />
            </li>
            <li>
              <Icon3 />
            </li>
            <li>
              <Icon4 />
            </li>
            <li>
              <Icon5 />
            </li>
            <li>
              <Icon6 />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
