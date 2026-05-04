import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import InvestmentCase from "../components/sections/InvestmentCase";
import WealthApproach from "../components/sections/WealthApproach";
import Studio from "../components/sections/Studio";
import Location from "../components/sections/Location";
import Proximity from "../components/sections/Proximity";
import Amenities from "../components/sections/Amenities";
import FloorPlan from "../components/sections/FloorPlan";
import Gallery from "../components/sections/Gallery";
import Developer from "../components/sections/Developer";
import Enquiry from "../components/sections/Enquiry";
import Footer from "../components/sections/Footer";

export default function Landing() {
  return (
    <main
      data-testid="landing-page"
      className="relative bg-forest text-sage min-h-screen overflow-hidden"
    >
      <Navbar />
      <Hero />
      <InvestmentCase />
      <WealthApproach />
      <Studio />
      <Location />
      <Proximity />
      <Amenities />
      <FloorPlan />
      <Developer />
      <Gallery />
      <Enquiry />
      <Footer />
    </main>
  );
}