import Navbar from "../../components/common/Navbar";
import HeroSection from "../../components/public/HeroSection";
import TrustedCompanies from "../../components/public/TrustedCompanies";
import FeaturesSection from "../../components/public/FeaturesSection";
import Footer from "../../components/common/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustedCompanies />
      <FeaturesSection />
      <Footer />
    </>
  );
}

export default LandingPage;