import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import Dash from "@/public/assets/images/dash-white.png";
import Testimonial from "./Testimonial";
import TestimonialAvatar1 from "@/public/assets/images/Testimonials-avatar-1.jpg";
import TestimonialAvatar2 from "@/public/assets/images/Testimonials-avatar-2.jpg";
import "@/styles/Testimonials.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function Testimonials() {
  return (
    <section
      className={cn(EB_Garamond_Font.className, "Testimonials-container")}
    >
      <p className="Testimonials-heading-1">Our Visitors Just Love</p>
      <p className="Testimonials-heading-2">Our Food!</p>
      <div className="Testimonials-dash-wrapper">
        <Image src={Dash} alt="Dash" />
      </div>

      <div className="Testimonials-wrapper">
        <Testimonial avatar={TestimonialAvatar1} alt="Testimonial Avatar 1" />
        <Testimonial avatar={TestimonialAvatar2} alt="Testimonial Avatar 2" />
      </div>
    </section>
  );
}

export default Testimonials;
