import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import Standards from "@/components/Standards";
import Founded from "@/components/Founded";
import Dash from "@/public/assets/images/dash.png";
import "@/styles/about.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function About() {
  return (
    <section className={EB_Garamond_Font.className}>
      <div className="About-container">
        <p className="page-heading">About Us</p>
        <div>
          <Image src={Dash} alt="Dash" />
        </div>
        <p className="About-text">
          Banaras Xpress introduces a fusion of culinary finesse with gracious
          service. With a delightful array of aromatic dishes, slow cooked with
          handpicked masalas, Banaras Xpress brings to you the grand cuisine of
          India in a truly comforting ambiance. At our Indian Restaurant in
          Sterling, Virginia, you will embark on an epicurean journey to
          discover a variety of Indian cuisine, handcrafted and perfected by our
          chef, whether to celebrate a special occasion or create new memories
          with your loved ones. Established in 2023, Banaras Xpress serves
          authentic Indian cuisine. Years after working in the restaurant
          business, chef and part owner Deepak Sarin wants to bring his unique
          taste with a focus on delivering a comfortable and welcoming
          experience to our guests in the Sterling, Ashburn, Leesburg, Herdon
          area. It is our mission to serve delicious authentic Indian food at
          reasonable prices in a clean, comfortable, and welcoming environment.
          We also aim to consistently provide our guests with impeccable service
          by demonstrating efficiency, professionalism, and warmth in everything
          that we do. Our vision is to be the leading Indian restaurant in the
          Sterling area and surrounding. We will be distinguished by the quality
          of our food and services and the exceptional customer service that we
          provide to every person we serve.
        </p>
      </div>

      <Standards />
      <Founded />
    </section>
  );
}

export default About;
