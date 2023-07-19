import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import cn from "classnames";
import Dash from "@/public/assets/images/dash.png";
import StoryImg1 from "@/public/assets/images/Story-img-1.jpg";
import StoryImg2 from "@/public/assets/images/Story-img-2.jpg";
import StoryImg3 from "@/public/assets/images/Story-img-3.jpg";
import "@/styles/Story.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function Story() {
  return (
    <section className="Story-container">
      <div className="Story-left-col">
        <div>
          <p
            className={cn(EB_Garamond_Font.className, "Story-left-col-text-1")}
          >
            The Banaras xpress
          </p>
          <p
            className={cn(EB_Garamond_Font.className, "Story-left-col-text-2")}
          >
            Multi Cuisine Restaurant
          </p>
          <div>
            <Image src={Dash} alt="Dash" />
          </div>
          <p className="Story-left-col-text-3">
            It is our mission to serve delicious authentic Indian food at
            reasonable prices in a clean, comfortable, and welcoming
            environment. We also aim to consistently provide our guests with
            impeccable service by demonstrating efficiency, professionalism, and
            warmth in everything that we do. Our vision is to be the leading
            Indian restaurant in the Sterling area and surrounding. We will be
            distinguished by the quality of our food and services and the
            exceptional customer service that we provide to every person we
            serve.
          </p>
        </div>
      </div>

      <div className="Story-right-col">
        <div className="Story-right-col-img-col-1">
          <div>
            <Image
              src={StoryImg1}
              alt="Story Image 1"
              className="Story-right-col-img-1"
            />
          </div>
          <div>
            <Image
              src={StoryImg2}
              alt="Story Image 2"
              className="Story-right-col-img-2"
            />
          </div>
        </div>
        <div className="Story-right-col-img-col-2">
          <Image
            src={StoryImg3}
            alt="Story Image 3"
            className="Story-right-col-img-3"
          />
        </div>
      </div>
    </section>
  );
}

export default Story;
