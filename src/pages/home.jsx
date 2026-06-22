import Features from "../components/home/Features";
import HeroSection from "../components/home/HeroSection";
import HowItWorks from "../components/home/HowItWorks";

const Home = () => {
  return (
    <div className="bg-background text-heading">
      <HeroSection />
      <Features />
      <HowItWorks />
    </div>
  );
};

export default Home;