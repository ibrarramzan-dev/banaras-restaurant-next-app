import Image from "next/image";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";
import FbIcon from "@/public/assets/images/fb.png";
import InstaIcon from "@/public/assets/images/insta.png";
import YoutubeIcon from "@/public/assets/images/youtube.png";
import Logo from "@/public/assets/images/banaras-logo.png";
import LunchHours from "./LunchHours";
import DinnerHours from "./DinnerHours";
import FooterBottomBar from "./FooterBottomBar";
import MenuDropdown from "./MenuDropdown";
import "@/styles/Footer.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "500",
});

function Footer() {
  return (
    <footer>
      <div className="Footer-container">
        <div className="Footer-logo">
          <Link href="/">
            <Image src={Logo} alt="Banaras xpress" width={162} />
          </Link>
        </div>

        <div className="Footer-nav">
          <p className="Footer-heading">Links</p>

          <ul>
            <Link href="/">
              <li>HOME</li>
            </Link>

            <Link href="/about">
              <li className="Footer-nav-item">ABOUT</li>
            </Link>

            <li className="Footer-nav-item">
              <MenuDropdown arrow="^" />
            </li>

            <Link href="/contacts">
              <li className="Footer-nav-item">CONTACTS</li>
            </Link>
          </ul>
        </div>

        <div className="Footer-business-hours-wrapper">
          <p className="Footer-heading">Lunch Hours</p>
          <div className="Footer-business-hours-times-wrapper">
            <LunchHours />
          </div>
        </div>

        <div className="Footer-business-hours-wrapper">
          <p className="Footer-heading">Dinner Hours</p>
          <div className="Footer-business-hours-times-wrapper">
            <DinnerHours />
          </div>
        </div>

        <div className="Footer-socials-wrapper">
          <Image src={FbIcon} alt="Fb" width={27} />
          <Image src={InstaIcon} alt="Instagram" width={27} />
          <Image src={YoutubeIcon} alt="YouTube" width={27} />
        </div>
      </div>

      <FooterBottomBar />
    </footer>
  );
}

export default Footer;
