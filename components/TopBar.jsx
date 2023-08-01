import Image from "next/image";
import LocationIcon from "@/public/assets/images/location.png";
import TelephoneIcon from "@/public/assets/images/telephone.png";
import FbIcon from "@/public/assets/images/fb.png";
import InstaIcon from "@/public/assets/images/insta.png";
import YoutubeIcon from "@/public/assets/images/youtube.png";
import LunchHours from "./LunchHours";
import DinnerHours from "./DinnerHours";
import "@/styles/TopBar.css";

function TopBar() {
  return (
    <div className="Topbar-container">
      <div className="Topbar-address-container">
        <Image src={LocationIcon} alt="Location" width={12} />
        <p>46300 Potomac Run Plaza #120, Sterling, VA 20164</p>
      </div>
      <div className="Topbar-hours-container">
        <p>
          <b>Lunch Hours</b>
        </p>
        <p>
          <LunchHours />
        </p>
      </div>
      <div className="Topbar-hours-container">
        <p>
          <b>Dinner Hours</b>
        </p>
        <div>
          <DinnerHours />
        </div>
      </div>
      <div className="Topbar-number-container">
        <Image src={TelephoneIcon} alt="Telephone" width={16} />
        <p className="Topbar-number">(703) 429-1994</p>
      </div>
      <div className="Topbar-socials-container">
        <Image src={FbIcon} alt="Fb" width={22} />
        <Image src={InstaIcon} alt="Instagram" width={22} />
        <Image src={YoutubeIcon} alt="YouTube" width={22} />
      </div>
    </div>
  );
}

export default TopBar;
