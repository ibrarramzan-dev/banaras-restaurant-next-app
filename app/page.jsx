import Image from "next/image";
import { Cormorant_Upright } from "next/font/google";
import cn from "classnames";
import HeaderImg from "@/public/assets/images/header-img.png";
import Spoon from "@/public/assets/images/spoon.png";
import styles from "@/styles/page.module.css";

const Cormorant_Upright_Font = Cormorant_Upright({
  subsets: ["latin"],
  weight: "700",
});

function Home() {
  return (
    <div className={styles["Home-container"]}>
      <div className={styles["Home-sec-1-container"]}>
        <div className={styles["Home-sec-1-left-col"]}>
          <p
            className={cn(
              styles["Home-sec-1-left-col-text-1"],
              Cormorant_Upright_Font.className
            )}
          >
            Chase The New Flavour
          </p>
          <Image src={Spoon} alt="Spoon" objectFit="cover" priority />
          <p
            className={cn(
              styles["Home-sec-1-left-col-text-2"],
              Cormorant_Upright_Font.className
            )}
          >
            Culinary Finesse With Gracious Service
          </p>
          <p className={styles["Home-sec-1-left-col-text-3"]}>
            The New Dining Amazing Just Try It!
          </p>
          <p
            className={cn(
              styles["Home-sec-1-left-col-text-4"],
              Cormorant_Upright_Font.className
            )}
          >
            Explore Menu
          </p>
        </div>
        <div className="Home-sec-1-col">
          <Image
            src={HeaderImg}
            alt="Banaras Food"
            objectFit="cover"
            width={420}
            height={386}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
