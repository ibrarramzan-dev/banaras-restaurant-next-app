import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import "@/styles/FooterBottomBar.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "500",
});

function FooterBottomBar() {
  return (
    <div
      className={cn(EB_Garamond_Font.className, "FooterBottomBar-container")}
    >
      <p className="FooterBottomBar-brand-and-year">
        Banaras {new Date().getFullYear()}.
      </p>
      <div className="FooterBottomBar-address-phone-email-col">
        <p>Address: 46300 Potomac Run Plaza #120, Sterling, VA 20164</p>
        <hr color="#e8e8e8" />
        <p>Phone: (703) 429-1994</p>
        <hr color="#e8e8e8" />
        <p>Email: info@banarasxpress.com</p>
      </div>
    </div>
  );
}

export default FooterBottomBar;
