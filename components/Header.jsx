import Image from "next/image";
import styles from "@/styles/header.module.css";
import Logo from "@/public/assets/images/banaras-logo.png";

function Header() {
  return (
    <header className={styles["Header-container"]}>
      <div className={styles["Header-logo"]}>
        <Image src={Logo} alt="Banaras xpress" width={204} />
      </div>

      <div className={styles["Header-nav"]}>
        <ul>
          <li>Home</li>
          <li className={styles["Header-nav-item-separator"]}>.</li>
          <li className={styles["Header-nav-item"]}>Menu</li>
          <li className={styles["Header-nav-item-separator"]}>.</li>
          <li className={styles["Header-nav-item"]}>About</li>
          <li className={styles["Header-nav-item-separator"]}>.</li>
          <li className={styles["Header-nav-item"]}>Contact</li>
        </ul>
      </div>

      <div className={styles["Header-book-table"]}>
        <p>Book Table</p>
      </div>
    </header>
  );
}

export default Header;
