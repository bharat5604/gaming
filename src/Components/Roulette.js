import React from 'react'
import Header from './Header';
import banner from './Assets/img/roulette/banner.jpg'
import { GameSection, GameSidebar, GameSideBarItem, GameListSection, GameList, GameIndividual, TopSearchBar } from "./componentsCollection";
import GameProvider from './GameProvider';
import Footer from './Footer';
import Testimonial from './Testimonial';
import AllGame_icon from './Assets/img/roulette/Icons/all-games.png'
import American_roulette_icon from './Assets/img/roulette/Icons/american.png'
import European_roulette_icon from './Assets/img/roulette/Icons/european.png'

// Roulette
import Roulette_0000_Yggdrasil_Roul_img from './Assets/img/roulette/roulette_game/image/Roulette_0000_Yggdrasil_Roul.jpg'
import Hover_0000_Yggdrasil_Roul_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0000_Yggdrasil_Roul.jpg'

import Roulette_0001_XPG_Roulette2_img from './Assets/img/roulette/roulette_game/image/Roulette_0001_XPG_Roulette2.jpg'
import Hover_0001_XPG_Roulette2_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0001_XPG_Roulette2.jpg'

import Roulette_0002_XPG_Roulett_img from './Assets/img/roulette/roulette_game/image/Roulette_0002_XPG_Roulette.jpg'
import Hover_0002_XPG_Roulette_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0002_XPG_Roulette.jpg'

import Roulette_0003_Vivo_Roulette_partners_img from './Assets/img/roulette/roulette_game/image/Roulette_0003_Vivo_Roulette_partners.jpg'
import Hover_0003_Vivo_Roulette_partners_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0003_Vivo_Roulette_partners.jpg'

import Roulette_0004_Vivo_Roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0004_Vivo_Roulette.jpg'

import Roulette_0005_VivoGaming_AutoRoulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0005_VivoGaming_AutoRoulette.jpg'
import Hover_0005_VivoGaming_AutoRoulette_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0005_VivoGaming_AutoRoulette.jpg'

import Roulette_0006_Super_Spade_Games_Roul_img from './Assets/img/roulette/roulette_game/image/Roulette_0006_Super_Spade_Games_Roul.jpg'
import Hover_0006_Super_Spade_Games_Roul_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0006_Super_Spade_Games_Roul.jpg'

import Roulette_0007_Playson_Roul_High_img from './Assets/img/roulette/roulette_game/image/Roulette_0007_Playson_Roul_High.jpg'
import Hover_0007_Playson_Roul_High_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0007_Playson_Roul_High.jpg'

import Roulette_0008_Playson_Roul_with_track_img from './Assets/img/roulette/roulette_game/image/Roulette_0008_Playson_Roul_with_track.jpg'
import Hover_0008_Play_on_Roul_with_track_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0008_Play_on_Roul_with_track.jpg'

import Roulette_0009_Playson_Roul_low_img from './Assets/img/roulette/roulette_game/image/Roulette_0009_Playson_Roul_low.jpg'
import Hover_0009_Play_on_Roul_low_hover from './Assets/img/roulette/roulette_game/hover/Hover_0009_Play_on_Roul_low.jpg'

import Roulette_0010_OneTouch_Roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0010_OneTouch_Roulette.jpg'
import Hover_0010_OneTouch_Roulette_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0010_OneTouch_Roulette.jpg'

import Roulette_0011_EZU_roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0011_EZU_roulette.jpg'
import Hover_0011_EZU_roulette_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0011_EZU_roulette.jpg'

import Roulette_0012_EZU_automaticroulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0012_EZU_automaticroulette.jpg'
import Hover_0012_EZU_automaticroulette_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0012_EZU_automaticroulette.jpg'

import Roulette_0013_EZU_rouletteportomaso_img from './Assets/img/roulette/roulette_game/image/Roulette_0013_EZU_rouletteportomaso.jpg'
import Hover_0013_EZU_rouletteportomaso_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0013_EZU_rouletteportomaso.jpg'

import Roulette_0014_Evoplay_European_Roul_img from './Assets/img/roulette/roulette_game/image/Roulette_0014_Evoplay_European_Roul.jpg'
import Hover_0014_Evoplay_European_Roul_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0014_Evoplay_European_Roul.jpg'

import Roulette_0015_EvoPlay_AmericanRoulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0015_EvoPlay_AmericanRoulette.jpg'
import Hover_0015_EvoPlay_AmericanRoulette_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0015_EvoPlay_AmericanRoulette.jpg'

import Roulette_0016_BGaming_American_Roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0016_BGaming_American_Roulette.jpg'
import Hover_0016_BGaming_American_Roulette_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0016_BGaming_American_Roulette.jpg'

import Roulette_0017_BGaming_European_Roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0017_BGaming_European_Roulette.jpg'
import Hover_0017_BGaming_European_Roulette_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0017_BGaming_European_Roulette.jpg'

import Roulette_0018_BGaming_French_Roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0018_BGaming_French_Roulette.jpg'
import Hover_0018_BGaming_French_Roulette_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0018_BGaming_French_Roulette.jpg'

import Roulette_0019_BetSoft_EuropeanRoulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0019_BetSoft_EuropeanRoulette.jpg'
import Hover_0019_BetSoft_EuropeanRoulette_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0019_BetSoft_EuropeanRoulette.jpg'

import Roulette_0020_Betsoft_American_Roul_img from './Assets/img/roulette/roulette_game/image/Roulette_0020_Betsoft_American_Roul.jpg'
import Hover_0020_Betsoft_American_Roul_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0020_Betsoft_American_Roul.jpg'

import Roulette_0021_Belatra_American_Roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0021_Belatra_American_Roulette.jpg'
import Hover_0021_Belatra_American_Roulette_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0021_Belatra_American_Roulette.jpg'

import Roulette_0022_Belatra_European_Roulette_img from './Assets/img/roulette/roulette_game/image/Roulette_0022_Belatra_European_Roulette.jpg'
import Hover_0022_Belatra_European_Roulette_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0022_Belatra_European_Roulette.jpg'

import Roulette_0023_Amatic_img from './Assets/img/roulette/roulette_game/image/Roulette_0023_Amatic.jpg'
import Hover_0023_Amatic_img_hover from './Assets/img/roulette/roulette_game/hover/Hover_0023_Amatic.jpg'
import LoggedHeader from './LoggedHeader';

const Roulette = () => {
    let auth;
    auth = JSON.parse(localStorage.getItem("auth"))
    return (
        <div className="cards">
             {
              !auth ? <Header /> :  <LoggedHeader />
            }
            <div className="card__banner">
                <img src={banner} className="img-fluid" alt="" />
                <div className="container">
                    <div className="abs">
                        <h3>ROULETTE</h3>
                        <span>Place Your Bets! Please</span>
                    </div>
                </div>
            </div>

            <GameSection defaultTab="allGame">
                <GameSidebar>
                    <GameSideBarItem sideItem="allGame" name="All Game" ImgSrc={AllGame_icon} />
                    <GameSideBarItem sideItem="american_roulette" name="American Roulette" ImgSrc={American_roulette_icon} />
                    <GameSideBarItem sideItem="european_roulette" name="European Roulette" ImgSrc={European_roulette_icon} />
                </GameSidebar>

                <GameListSection>
                    <GameList TabName="allGame">
                        <GameIndividual Alt="Roulette Yggdrasil Roul" GameImg={Roulette_0000_Yggdrasil_Roul_img} GameImgHover={Hover_0000_Yggdrasil_Roul_img_hover} />
                        <GameIndividual Alt="Roulette XPG Roulette2" GameImg={Roulette_0001_XPG_Roulette2_img} GameImgHover={Hover_0001_XPG_Roulette2_img_hover} />
                        <GameIndividual Alt="Roulette XPG Roulett" GameImg={Roulette_0002_XPG_Roulett_img} GameImgHover={Hover_0002_XPG_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette Vivo Roulette_partners" GameImg={Roulette_0003_Vivo_Roulette_partners_img} GameImgHover={Hover_0003_Vivo_Roulette_partners_img_hover} />
                        <GameIndividual Alt="Roulette Vivo Roulette" GameImg={Roulette_0004_Vivo_Roulette_img} GameImgHover={Roulette_0004_Vivo_Roulette_img} />
                        <GameIndividual Alt="Roulette VivoGaming AutoRoulette" GameImg={Roulette_0005_VivoGaming_AutoRoulette_img} GameImgHover={Hover_0005_VivoGaming_AutoRoulette_img_hover} />
                        <GameIndividual Alt="Roulette VivoGaming AutoRoulette" GameImg={Roulette_0006_Super_Spade_Games_Roul_img} GameImgHover={Hover_0006_Super_Spade_Games_Roul_img_hover} />
                        <GameIndividual Alt="Roulette Playson Roul High" GameImg={Roulette_0007_Playson_Roul_High_img} GameImgHover={Hover_0007_Playson_Roul_High_img_hover} />
                        <GameIndividual Alt="Roulette Playson Roul with track" GameImg={Roulette_0008_Playson_Roul_with_track_img} GameImgHover={Hover_0008_Play_on_Roul_with_track_img_hover} />
                        <GameIndividual Alt="Roulette Playson Roul low" GameImg={Roulette_0009_Playson_Roul_low_img} GameImgHover={Hover_0009_Play_on_Roul_low_hover} />
                        <GameIndividual Alt="Roulette OneTouch Roulette" GameImg={Roulette_0010_OneTouch_Roulette_img} GameImgHover={Hover_0010_OneTouch_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette EZU roulette" GameImg={Roulette_0011_EZU_roulette_img} GameImgHover={Hover_0011_EZU_roulette_img_hover} />
                        <GameIndividual Alt="Roulette EZU automaticroulette" GameImg={Roulette_0012_EZU_automaticroulette_img} GameImgHover={Hover_0012_EZU_automaticroulette_img_hover} />
                        <GameIndividual Alt="Roulette EZU rouletteportomaso" GameImg={Roulette_0013_EZU_rouletteportomaso_img} GameImgHover={Hover_0013_EZU_rouletteportomaso_img_hover} />
                        <GameIndividual Alt="Roulette Evoplay European Roul" GameImg={Roulette_0014_Evoplay_European_Roul_img} GameImgHover={Hover_0014_Evoplay_European_Roul_img_hover} />
                        <GameIndividual Alt="Roulette EvoPlay AmericanRoulette" GameImg={Roulette_0015_EvoPlay_AmericanRoulette_img} GameImgHover={Hover_0015_EvoPlay_AmericanRoulette_img_hover} />
                        <GameIndividual Alt="Roulette BGaming American Roulette" GameImg={Roulette_0016_BGaming_American_Roulette_img} GameImgHover={Hover_0016_BGaming_American_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette BGaming European Roulette" GameImg={Roulette_0017_BGaming_European_Roulette_img} GameImgHover={Hover_0017_BGaming_European_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette BGaming French Roulette" GameImg={Roulette_0018_BGaming_French_Roulette_img} GameImgHover={Hover_0018_BGaming_French_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette BetSoft EuropeanRoulette" GameImg={Roulette_0019_BetSoft_EuropeanRoulette_img} GameImgHover={Hover_0019_BetSoft_EuropeanRoulette_img_hover} />
                        <GameIndividual Alt="Roulette Betsoft American Roul" GameImg={Roulette_0020_Betsoft_American_Roul_img} GameImgHover={Hover_0020_Betsoft_American_Roul_img_hover} />
                        <GameIndividual Alt="Roulette Belatra American Roulette" GameImg={Roulette_0021_Belatra_American_Roulette_img} GameImgHover={Hover_0021_Belatra_American_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette Belatra European Roulette" GameImg={Roulette_0022_Belatra_European_Roulette_img} GameImgHover={Hover_0022_Belatra_European_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette Amatic" GameImg={Roulette_0023_Amatic_img} GameImgHover={Hover_0023_Amatic_img_hover} />
                    </GameList>

                    <GameList TabName="american_roulette">
                        <GameIndividual Alt="Roulette Yggdrasil Roul" GameImg={Roulette_0000_Yggdrasil_Roul_img} GameImgHover={Hover_0000_Yggdrasil_Roul_img_hover} />
                        <GameIndividual Alt="Roulette XPG Roulette2" GameImg={Roulette_0001_XPG_Roulette2_img} GameImgHover={Hover_0001_XPG_Roulette2_img_hover} />
                        <GameIndividual Alt="Roulette XPG Roulett" GameImg={Roulette_0002_XPG_Roulett_img} GameImgHover={Hover_0002_XPG_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette Vivo Roulette partners" GameImg={Roulette_0003_Vivo_Roulette_partners_img} GameImgHover={Hover_0003_Vivo_Roulette_partners_img_hover} />
                        <GameIndividual Alt="Roulette Vivo Roulette" GameImg={Roulette_0004_Vivo_Roulette_img} GameImgHover={Roulette_0004_Vivo_Roulette_img} />
                        <GameIndividual Alt="Roulette VivoGaming AutoRoulette" GameImg={Roulette_0005_VivoGaming_AutoRoulette_img} GameImgHover={Hover_0005_VivoGaming_AutoRoulette_img_hover} />
                        <GameIndividual Alt="Roulette Super Spade Games Roul" GameImg={Roulette_0006_Super_Spade_Games_Roul_img} GameImgHover={Hover_0006_Super_Spade_Games_Roul_img_hover} />
                        <GameIndividual Alt="Roulette OneTouch Roulette" GameImg={Roulette_0010_OneTouch_Roulette_img} GameImgHover={Hover_0010_OneTouch_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette EZU roulette" GameImg={Roulette_0011_EZU_roulette_img} GameImgHover={Hover_0011_EZU_roulette_img_hover} />
                        <GameIndividual Alt="Roulette EZU automaticroulette" GameImg={Roulette_0012_EZU_automaticroulette_img} GameImgHover={Hover_0012_EZU_automaticroulette_img_hover} />
                        <GameIndividual Alt="Roulette EZU rouletteportomaso" GameImg={Roulette_0013_EZU_rouletteportomaso_img} GameImgHover={Hover_0013_EZU_rouletteportomaso_img_hover} />
                        <GameIndividual Alt="Roulette EvoPlay AmericanRoulette" GameImg={Roulette_0015_EvoPlay_AmericanRoulette_img} GameImgHover={Hover_0015_EvoPlay_AmericanRoulette_img_hover} />
                        <GameIndividual Alt="Roulette BGaming American Roulette" GameImg={Roulette_0016_BGaming_American_Roulette_img} GameImgHover={Hover_0016_BGaming_American_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette Betsoft American Roul" GameImg={Roulette_0020_Betsoft_American_Roul_img} GameImgHover={Hover_0020_Betsoft_American_Roul_img_hover} />
                        <GameIndividual Alt="Roulette Belatra American Roulette" GameImg={Roulette_0021_Belatra_American_Roulette_img} GameImgHover={Hover_0021_Belatra_American_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette Amatic" GameImg={Roulette_0023_Amatic_img} GameImgHover={Hover_0023_Amatic_img_hover} />
                    </GameList>

                    <GameList TabName="european_roulette">
                        <GameIndividual Alt="Roulette Yggdrasil Roul" GameImg={Roulette_0000_Yggdrasil_Roul_img} GameImgHover={Hover_0000_Yggdrasil_Roul_img_hover} />
                        <GameIndividual Alt="Roulette XPG Roulette2" GameImg={Roulette_0001_XPG_Roulette2_img} GameImgHover={Hover_0001_XPG_Roulette2_img_hover} />
                        <GameIndividual Alt="Roulette XPG Roulett" GameImg={Roulette_0002_XPG_Roulett_img} GameImgHover={Hover_0002_XPG_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette Vivo Roulette partners" GameImg={Roulette_0003_Vivo_Roulette_partners_img} GameImgHover={Hover_0003_Vivo_Roulette_partners_img_hover} />
                        <GameIndividual Alt="Roulette Vivo Roulette" GameImg={Roulette_0004_Vivo_Roulette_img} GameImgHover={Roulette_0004_Vivo_Roulette_img} />
                        <GameIndividual Alt="Roulette VivoGaming AutoRoulette" GameImg={Roulette_0005_VivoGaming_AutoRoulette_img} GameImgHover={Hover_0005_VivoGaming_AutoRoulette_img_hover} />
                        <GameIndividual Alt="Roulette Super Spade Games Roul" GameImg={Roulette_0006_Super_Spade_Games_Roul_img} GameImgHover={Hover_0006_Super_Spade_Games_Roul_img_hover} />
                        <GameIndividual Alt="Roulette Playson Roul High" GameImg={Roulette_0007_Playson_Roul_High_img} GameImgHover={Hover_0007_Playson_Roul_High_img_hover} />
                        <GameIndividual Alt="Roulette Playson Roul with track" GameImg={Roulette_0008_Playson_Roul_with_track_img} GameImgHover={Hover_0008_Play_on_Roul_with_track_img_hover} />
                        <GameIndividual Alt="Roulette Playson Roul low" GameImg={Roulette_0009_Playson_Roul_low_img} GameImgHover={Hover_0009_Play_on_Roul_low_hover} />
                        <GameIndividual Alt="Roulette OneTouch Roulette" GameImg={Roulette_0010_OneTouch_Roulette_img} GameImgHover={Hover_0010_OneTouch_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette EZU roulette" GameImg={Roulette_0011_EZU_roulette_img} GameImgHover={Hover_0011_EZU_roulette_img_hover} />
                        <GameIndividual Alt="Roulette EZU automaticroulette" GameImg={Roulette_0012_EZU_automaticroulette_img} GameImgHover={Hover_0012_EZU_automaticroulette_img_hover} />
                        <GameIndividual Alt="Roulette EZU rouletteportomaso" GameImg={Roulette_0013_EZU_rouletteportomaso_img} GameImgHover={Hover_0013_EZU_rouletteportomaso_img_hover} />
                        <GameIndividual Alt="Roulette Evoplay European Roul" GameImg={Roulette_0014_Evoplay_European_Roul_img} GameImgHover={Hover_0014_Evoplay_European_Roul_img_hover} />
                        <GameIndividual Alt="Roulette BGaming European Roulette" GameImg={Roulette_0017_BGaming_European_Roulette_img} GameImgHover={Hover_0017_BGaming_European_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette BGaming French Roulette" GameImg={Roulette_0018_BGaming_French_Roulette_img} GameImgHover={Hover_0018_BGaming_French_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette BetSoft EuropeanRoulette" GameImg={Roulette_0019_BetSoft_EuropeanRoulette_img} GameImgHover={Hover_0019_BetSoft_EuropeanRoulette_img_hover} />
                        <GameIndividual Alt="Roulette Belatra European Roulette" GameImg={Roulette_0022_Belatra_European_Roulette_img} GameImgHover={Hover_0022_Belatra_European_Roulette_img_hover} />
                        <GameIndividual Alt="Roulette Amatic" GameImg={Roulette_0023_Amatic_img} GameImgHover={Hover_0023_Amatic_img_hover} />
                    </GameList>

                    <TopSearchBar />

                </GameListSection>
            </GameSection>

            <GameProvider />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Roulette
