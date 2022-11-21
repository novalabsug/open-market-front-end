import react, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <main id="landing-page">
      <div className="flx">
        <Navbar />
        <MainContent />
      </div>
    </main>
  );
};

export default Home;
