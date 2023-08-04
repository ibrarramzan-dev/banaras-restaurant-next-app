import { EB_Garamond } from "next/font/google";
import StandardBox from "./StandardBox";
import "@/styles/Standards.css";

const EB_Garamond_Font = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
});

function Standards() {
  return (
    <section className="Standards-container">
      <h3 className={EB_Garamond_Font.className}>Our Standards</h3>

      <div className="Standards-content-wrapper">
        <StandardBox
          heading="Casually Indian"
          content="With our menu being centered around the traditional Indian dishes, we have fine fusion of Indian, American and Mexican food..."
        />
        <StandardBox
          heading="American Comfort"
          content="Despite being a Indian Multi-Cuisine restaurant, visiting our place feels just as casual as any traditional American restaurant would feel..."
        />
        <StandardBox
          heading="Event-friendly"
          content="If you're considering celebrating a personal or a business occasion at our restaurant, our big Party and Dinner halls will be ready for you to make your special day memorable!"
        />
      </div>
    </section>
  );
}

export default Standards;
