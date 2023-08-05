import Banner from "@/components/Banner";
import Story from "@/components/Story";
import Standards from "@/components/Standards";
import Founded from "@/components/Founded";
import Menu from "@/components/MenuSection";
import Section from "@/components/Section";
// import Testimonials from "@/components/Testimonials";
// import Gallery from "@/components/Gallery";

function Home() {
  return (
    <div>
      <Banner />
      <Story />
      <Standards />
      <Founded />
      <Menu />
      <Section />
      {/* <Testimonials />
      <Gallery /> */}
    </div>
  );
}

export default Home;
