import Image from "next/image";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import FbIcon from "@/public/assets/images/fb.png";
import InstaIcon from "@/public/assets/images/insta.png";
import YoutubeIcon from "@/public/assets/images/youtube.png";
import Logo from "@/public/assets/images/banaras-logo.png";
import FooterBottomBar from "./FooterBottomBar";
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
              <div className="Footer-nav-item-dropdown">
                <span className="Footer-nav-item-dropdown-btn">
                  MENU
                  <span
                    style={{
                      fontSize: "0.72rem",
                      height: "0.1rem",
                    }}
                  >
                    ^
                  </span>
                </span>

                <div className="Footer-nav-item-dropdown-content">
                  <Link href="/menu/appetizers">Appetizers</Link>
                  <Link href="/menu/foods">Foods</Link>
                  <Link href="/menu/drinks">Drinks</Link>
                </div>
              </div>
            </li>

            <Link href="/contacts">
              <li className="Footer-nav-item">CONTACTS</li>
            </Link>
          </ul>
        </div>

        <div className="Footer-business-hours-wrapper">
          <p className="Footer-heading">Lunch Hours</p>
          <div className="Footer-business-hours-times-wrapper">
            <p>Mon – Thu: 11:00 AM – 2:30 PM</p>
            <p>Fri – Sun: 11:00 AM – 3:00 PM</p>
          </div>
        </div>

        <div className="Footer-business-hours-wrapper">
          <p className="Footer-heading">Dinner Hours</p>
          <div className="Footer-business-hours-times-wrapper">
            <p>Mon – Thu: 11:00 AM – 2:30 PM</p>
            <p>Fri – Sun: 11:00 AM – 3:00 PM</p>
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
