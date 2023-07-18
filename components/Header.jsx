import Image from "next/image";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import "@/styles/Header.css";
import Logo from "@/public/assets/images/banaras-logo.png";
import TopBar from "./TopBar";

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
          <Image src={Logo} alt="Banaras xpress" width={204} />
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
              <div className="avatar-dropdown">
                <span
                  className="avatar-dropdown-btn"
                  style={{ fontWeight: "bold" }}
                >
                  MENU{" "}
                  <span style={{ fontSize: "0.72rem", height: "0.1rem" }}>
                    ˅
                  </span>
                </span>

                <div className="avatar-dropdown-content">
                  <Link href="/menu/appetizers">Appetizers</Link>
                  <Link href="/menu/foods">Foods</Link>
                  <Link href="/menu/drinks">Drinks</Link>
                </div>
              </div>
            </li>

            <Link href="/contacts">
              <li className="Header-nav-item">CONTACTS</li>
            </Link>
          </ul>
        </div>

        <div className="Header-book-table">
          <p>BOOK TABLE</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
