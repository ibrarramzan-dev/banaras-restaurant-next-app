import Link from "next/link";
import cn from "classnames";
import { Cormorant_Upright } from "next/font/google";
import "@/styles/Banner.css";

const Cormorant_Upright_Font = Cormorant_Upright({
  subsets: ["latin"],
  weight: "700",
});

function Banner() {
  return (
    <div className="Banner-container">
      <div>
        <p className={cn("Banner-text-1", Cormorant_Upright_Font.className)}>
          Chase The New Flavour
        </p>
        <p className={cn("Banner-text-2", Cormorant_Upright_Font.className)}>
          Culinary Finesse With Gracious Service
        </p>
        <p className="Banner-text-3">Relish modern Indian-fusion</p>

        <Link href="/menu">
          <p className={cn("Banner-text-4", Cormorant_Upright_Font.className)}>
            Explore Menu
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
