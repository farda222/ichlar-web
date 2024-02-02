import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Herosection";
const Landing = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="mt-36 overflow-x-hidden px-3">
        <HeroSection />
      </div>

    </div>
  );
};
export default Landing;
