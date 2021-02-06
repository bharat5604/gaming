import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Why from "./Why";
import Experience from "./Experience";
import GameProvider from "./GameProvider";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import WinnersList from "./WinnersList";

const Home = () => {
  return (
    <div className="home">
      <HeroBanner />
      <WinnersList />

      {/* why gamepitara */}
      <Why />

      {/* experience */}
      <Experience />

      {/* gameprovider */}
      <GameProvider />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
