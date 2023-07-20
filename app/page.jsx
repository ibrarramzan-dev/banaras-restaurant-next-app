import Banner from "@/components/Banner";
import Story from "@/components/Story";
import Standards from "@/components/Standards";
import Founded from "@/components/Founded";
import Menu from "@/components/Menu";
import styles from "@/styles/Page.css";

function Home() {
  return (
    <div className="Home-container">
      <Banner />
      <Story />
      <Standards />
      <Founded />
      <Menu />
    </div>
  );
}

export default Home;
