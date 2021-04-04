import React from 'react'
import Header from './Header';
import banner from './Assets/img/banner.jpg'
import { GameSection, GameSidebar, GameSideBarItem, GameListSection, GameList, GameIndividual, TopSearchBar } from "./componentsCollection";
import GameProvider from './GameProvider';
import Footer from './Footer';
import Testimonial from './Testimonial';
import blackjack from './Assets/img/icons/blackjack.png';
import Roulette_icon from './Assets/img/Roulette-banner.png'

// Baccart
import b_opt_0000_XPG_Gaming_bcrt_2_img from './Assets/img/cards/Baccarat/b_opt_0000_XPG_Gaming_bcrt_2.jpg'
import b_opt_0000_XPG_Gaming_bcrt_2_img_hover from './Assets/img/cards/Baccarat/hover/Hover_0000_XPG_Gaming_bcrt_2.jpg'

import b_opt_0001_XPG_Gaming_img from './Assets/img/cards/Baccarat/b_opt_0001_XPG_Gaming.jpg'
import b_opt_0001_XPG_Gaming_img_hover from './Assets/img/cards/Baccarat/hover/Hover_0001_XPG_Gaming.jpg'

import b_opt_0002_Vivo_Gaming_img from './Assets/img/cards/Baccarat/b_opt_0002_Vivo_Gaming.jpg'
import b_opt_0002_Vivo_Gaming_img_hover from './Assets/img/cards/Baccarat/hover/Hover_0002_Vivo_Gaming.jpg'

import b_opt_0003_Superspade_Gaming_img from './Assets/img/cards/Baccarat/b_opt_0003_Superspade_Gaming.jpg'
import b_opt_0003_Superspade_Gaming_img_hover from './Assets/img/cards/Baccarat/hover/Hover_0003_Supe_spade_Gaming.jpg'

import b_opt_0004_EZU_baccarat_img from './Assets/img/cards/Baccarat/b_opt_0004_EZU_baccarat.jpg'
import b_opt_0004_EZU_baccarat_img_hover from './Assets/img/cards/Baccarat/hover/Hover_0004_EZU_baccarat.jpg'

import b_opt_0005_EZU_baccaratko_img from './Assets/img/cards/Baccarat/b_opt_0005_EZU_baccaratko.jpg'
import b_opt_0005_EZU_baccaratko_img_hover from './Assets/img/cards/Baccarat/hover/Hover_0005_EZU_baccaratko.jpg'

import b_opt_0006_EZU_baccaratsuper6_img from './Assets/img/cards/Baccarat/b_opt_0006_EZU_baccaratsuper6.jpg'
import b_opt_0006_EZU_baccaratsuper6_img_hover from './Assets/img/cards/Baccarat/hover/Hover_0006_EZU_baccaratsuper6.jpg'

import b_opt_0007_EZU_baccaratnocommission_img from './Assets/img/cards/Baccarat/b_opt_0007_EZU_baccaratnocommission.jpg'
import b_opt_0007_EZU_baccaratnocommission_img_hover from './Assets/img/cards/Baccarat/hover/Hover_0007_EZU_baccaratnocommission.jpg'

import b_opt_0008_EZU_baccaratqueenco_img from './Assets/img/cards/Baccarat/b_opt_0008_EZU_baccaratqueenco.jpg'
import b_opt_0008_EZU_baccaratqueenco_img_hover from './Assets/img/cards/Baccarat/hover/Hover_0008_EZU_baccaratqueenco.jpg'

import b_opt_0009_Evoplay_Bacrt777_img from './Assets/img/cards/Baccarat/b_opt_0009_Evoplay_Bacrt777.jpg'
import b_opt_0009_Evoplay_Bacrt777_img_hover from './Assets/img/cards/Baccarat/hover/Hover_0009_Evoplay_Bacrt777.jpg'

import b_opt_0010_Bgaming_img from './Assets/img/cards/Baccarat/b_opt_0010_Bgaming.jpg'
import b_opt_0010_Bgaming_img_hover from './Assets/img/cards/Baccarat/hover/Hover_0010_Bgaming.jpg'

import b_opt_0011_Betgames_img from './Assets/img/cards/Baccarat/b_opt_0011_Betgames.jpg'
import b_opt_0011_Betgames_img_hover from './Assets/img/cards/Baccarat/hover/Hover_0011_Betgames.jpg'

const Roulette = () => {
    return (
        <div className="cards">
            <Header />
            <div className="card__banner">
                <img src={banner} className="img-fluid" alt="" />
                <div className="container">
                    <div className="abs">
                        <h3>PLAY MOST POPULAR</h3>
                        <span>card games available free here</span>
                    </div>
                </div>
            </div>

            <GameSection defaultTab="roulette">
                <GameSidebar>
                    <GameSideBarItem sideItem="roulette" name="roulette" ImgSrc={Roulette_icon} />
                </GameSidebar>

                <GameListSection>
                    <GameList TabName="roulette">
                        <GameIndividual Alt="XPG Gaming bcrt" GameImg={b_opt_0000_XPG_Gaming_bcrt_2_img} GameImgHover={b_opt_0000_XPG_Gaming_bcrt_2_img_hover} />
                        <GameIndividual Alt="XPG Gaming" GameImg={b_opt_0001_XPG_Gaming_img} GameImgHover={b_opt_0001_XPG_Gaming_img_hover} />
                        <GameIndividual Alt="Vivo Gaming" GameImg={b_opt_0002_Vivo_Gaming_img} GameImgHover={b_opt_0002_Vivo_Gaming_img_hover} />
                        <GameIndividual Alt="Superspade Gaming" GameImg={b_opt_0003_Superspade_Gaming_img} GameImgHover={b_opt_0003_Superspade_Gaming_img_hover} />
                        <GameIndividual Alt="EZU baccarat" GameImg={b_opt_0004_EZU_baccarat_img} GameImgHover={b_opt_0004_EZU_baccarat_img_hover} />
                        <GameIndividual Alt="EZU baccaratko" GameImg={b_opt_0005_EZU_baccaratko_img} GameImgHover={b_opt_0005_EZU_baccaratko_img_hover} />
                        <GameIndividual Alt="EZU baccaratsuper6" GameImg={b_opt_0006_EZU_baccaratsuper6_img} GameImgHover={b_opt_0006_EZU_baccaratsuper6_img_hover} />
                        <GameIndividual Alt="EZU baccaratnocommission" GameImg={b_opt_0007_EZU_baccaratnocommission_img} GameImgHover={b_opt_0007_EZU_baccaratnocommission_img_hover} />
                        <GameIndividual Alt="EZU baccaratqueenco" GameImg={b_opt_0008_EZU_baccaratqueenco_img} GameImgHover={b_opt_0008_EZU_baccaratqueenco_img_hover} />
                        <GameIndividual Alt="Evoplay Bacrt777" GameImg={b_opt_0009_Evoplay_Bacrt777_img} GameImgHover={b_opt_0009_Evoplay_Bacrt777_img_hover} />
                        <GameIndividual Alt="0010 Bgaming" GameImg={b_opt_0010_Bgaming_img} GameImgHover={b_opt_0010_Bgaming_img_hover} />
                        <GameIndividual Alt="0011 Betgames" GameImg={b_opt_0011_Betgames_img} GameImgHover={b_opt_0011_Betgames_img_hover} />
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
