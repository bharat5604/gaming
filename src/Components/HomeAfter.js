import React from "react";
import Experience from "./Experience";
import Footer from "./Footer";
import GameProvider from "./GameProvider";
import HeroBanner from "./HeroBanner";
import LoggedHeader from "./LoggedHeader";
import Why from "./Why";
import WinnersList from "./WinnersList";
const HomeAfter = () => {
  return (
    <div className="home">
      <LoggedHeader />
      <HeroBanner />
      <div className="winning">
        <div className="container">
          <Why rightPart="should" classType="after" />
        </div>
      </div>

      <WinnersList classType="winners" conditionRender={true} />

      <Experience />
      <GameProvider />

      <Footer />
    </div>
  );
};

export default HomeAfter;
