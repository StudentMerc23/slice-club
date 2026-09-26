import Navbar from "./components/Navbar/Navbar";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import BrandIntro from "./components/BrandIntro/BrandIntro";
import About from "./components/About/About";
import Members from "./components/Members/Members";
import Latest from "./components/Latest/Latest";
import WhereWePlay from "./components/WhereWePlay/WhereWePlay";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <main className="site-container">
      <Navbar />
      <HeroSlider />
      <BrandIntro />
      <About />
      <Members />
      <Latest />
      <WhereWePlay />
      <SocialLinks />
      <Footer />
    </main>
  );
}

export default App;
