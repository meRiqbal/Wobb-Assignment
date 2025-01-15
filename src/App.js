import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CampaignManager from "./components/CampaignManager";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <CampaignManager />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
