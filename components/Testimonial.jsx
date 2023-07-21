import Image from "next/image";
import InvertedComma from "@/public/assets/images/inverted-comma.png";
import HyphenLong from "@/public/assets/images/hyphen-long.png";
import "@/styles/Testimonial.css";

function Testimonial({ avatar, alt }) {
  return (
    <div className="Testimonial-container">
      <div className="Testimonial-avatar-wrapper">
        <Image src={avatar} alt={alt} />
      </div>
      <div>
        <Image src={InvertedComma} alt="Inverted comma" />
      </div>
      <p className="Testimonial-text">
        I've been eating their business lunches for the past 7 years. Not even
        once have I had any unpleasant experience. And the dishes always taste
        fresh and good!
      </p>
      <p className="Testimonial-user-name">
        <Image src={HyphenLong} alt="Hyphen long" /> Amanda
      </p>
      <p className="Testimonial-posted-on-text">posted on TripAdvisor</p>
    </div>
  );
}

export default Testimonial;
