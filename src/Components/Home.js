import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Why from "./Why";
import Experience from "./Experience";
import GameProvider from "./GameProvider";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import WinnersList from "./WinnersList";
import Testimonial from "./Testimonial";
import Header from "./Header";



const Home = () => {

  return (
    < div className="home" >
      <Header />
      <HeroBanner />
      <WinnersList />

      {/* why gamepitara */}
      <Why />

      {/* experience */}
      <Experience />

      {/* gameprovider */}
      <GameProvider />

      {/* Footer */}
      <Testimonial />
      <Footer />
    </div >
  );
};

export default Home;
