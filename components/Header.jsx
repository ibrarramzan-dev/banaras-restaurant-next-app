import Image from "next/image";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";
import Logo from "@/public/assets/images/banaras-logo.png";
import TopBar from "./TopBar";
import MenuDropdown from "./MenuDropdown";
import "@/styles/Header.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "500",
});

function Header() {
  return (
    <header>
      <TopBar />
      <div className="Header-container">
        <div className="Header-logo">
          <Link href="/">
            <Image src={Logo} alt="Banaras xpress" width={204} />
          </Link>
        </div>

        <div className="Header-nav">
          <ul className={EB_Garamond_Font.className}>
            <Link href="/">
              <li>HOME</li>
            </Link>

            <Link href="/about">
              <li className="Header-nav-item">ABOUT</li>
            </Link>

            <li className="Header-nav-item">
              <MenuDropdown arrow="˅" />
            </li>

            <Link href="/contacts">
              <li className="Header-nav-item">CONTACTS</li>
            </Link>
          </ul>
        </div>

        <Link href="/contacts">
          <div className="Header-book-table">
            <p>BOOK TABLE</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
