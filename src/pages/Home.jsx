import Advantages from "../components/Home/Advantages";
import BestServices from "../components/Home/BestServices";
import Faq from "../components/Home/Faq";
import HeroSection from "../components/Home/HeroSection";
import HowItWorks from "../components/Home/HowItWorks";

function Home() {
  return (
    <section className="">
      <HeroSection />
      <Advantages />
      <BestServices />
      <HowItWorks />
      <Faq />
    </section>
  );
}
export default Home;
