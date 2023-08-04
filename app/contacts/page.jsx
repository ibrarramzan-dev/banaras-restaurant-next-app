import Link from "next/link";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import LocationIcon from "@/public/assets/images/location-grey.png";
import TelephoneIcon from "@/public/assets/images/telephone-grey.png";
import EmailIcon from "@/public/assets/images/email-grey.png";
import Dash from "@/public/assets/images/dash.png";
import "@/styles/contacts.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function Contacts() {
  return (
    <div className={cn(EB_Garamond_Font.className, "Contacts-container")}>
      <p className="page-heading">Contact Details</p>
      <div>
        <Image src={Dash} alt="Dash" />
      </div>

      <p className="Contacts-book-seat-message">
        Please contact us now to Book a seat. Get your seat early!
      </p>

      <div className="Contacts-text-container">
        <div className="Contacts-text-wrapper">
          <Image src={LocationIcon} alt="Location" width={22} />{" "}
          <p>46300 Potomac Run Plaza #120, Sterling, VA 20164</p>
        </div>

        <div className="Contacts-text-wrapper">
          <Image src={TelephoneIcon} alt="Telephone" width={22} />{" "}
          <p>
            <Link href="tel:(703) 429-1994" title="Dial us">
              (703) 429-1994
            </Link>
          </p>
        </div>

        <div className="Contacts-text-wrapper">
          <Image src={EmailIcon} alt="Email" width={22} />{" "}
          <p>
            <Link href="mailto:info@banarasxpress.com" title="Email us">
              info@banarasxpress.com
            </Link>
          </p>
        </div>
        <br />

        <p className="Contacts-text-we-are-open">
          <u>
            We are <b>open:</b>
          </u>{" "}
          <span>🕓</span>
        </p>
        <div className="Contacts-text-open-timings-wrapper">
          <p>Mon – Thu: 11:00 AM – 9:30 PM</p>
          <p>Fri – Sun: 11:00 AM – 10:30 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
