import React from 'react'
import Header from './Header';
import banner from './Assets/img/poker/banner.jpg'
import { GameSection, GameSidebar, GameSideBarItem, GameListSection, GameList, GameIndividual, TopSearchBar } from "./componentsCollection";
import GameProvider from './GameProvider';
import Footer from './Footer';
import Testimonial from './Testimonial';
import AllGame_icon from './Assets/img/poker/Icons/all-games.png'
import Casino_Holdem_icon from './Assets/img/poker/Icons/Casino-Holdem.png'

// Poker
import Poker_0000_XPG_texas_holdem_Poker_img from './Assets/img/poker/poker_img/image/Poker_0000_XPG_texas_holdem_Poker.jpg'
import Hover_0000_XPG_texas_holdem_Poker_img_hover from './Assets/img/poker/poker_img/hover/Hover_0000_XPG_texas_holdem_Poker.jpg'

import Poker_0001_VivoGaming_CasinoHoldem_img from './Assets/img/poker/poker_img/image/Poker_0001_VivoGaming_CasinoHoldem.jpg'
import Hover_0001_VivoGaming_CasinoHoldem from './Assets/img/poker/poker_img/hover/Hover_0001_VivoGaming_CasinoHoldem.jpg'

import Poker_0002_Superspade_Gaming_3_card_Poker_img from './Assets/img/poker/poker_img/image/Poker_0002_Superspade_Gaming_3_card_Poker.jpg'
import Hover_0002_Superspade_Gaming_3_card_Poker from './Assets/img/poker/poker_img/hover/Hover_0002_Superspade_Gaming_3_card_Poker.jpg'

import Poker_0003_Spadegaming_Win_Three_Cards_Poker_img from './Assets/img/poker/poker_img/image/Poker_0003_Spadegaming_Win_Three_Cards_Poker.jpg'
import Hover_0003_Spadegaming_Win_Three_Cards_Poker from './Assets/img/poker/poker_img/hover/Hover_0003_Spadegaming_Win_Three_Cards_Poker.jpg'

import Poker_0004_OneTouch_HighHandHoldEm_Poker_img from './Assets/img/poker/poker_img/image/Poker_0004_OneTouch_HighHandHoldEm_Poker.jpg'
import Hover_0004_OneTouch_HighHandHoldEm_Poker from './Assets/img/poker/poker_img/hover/Hover_0004_OneTouch_HighHandHoldEm_Poker.jpg'

import Poker_0005_OneTouch_InBetweenPoker_img from './Assets/img/poker/poker_img/image/Poker_0005_OneTouch_InBetweenPoker.jpg'
import Hover_0005_OneTouch_InBetweenPoker from './Assets/img/poker/poker_img/hover/Hover_0005_OneTouch_InBetweenPoker.jpg'

import Poker_0006_OneTouch_RussianPoker from './Assets/img/poker/poker_img/image/Poker_0006_OneTouch_RussianPoker.jpg'
import Hover_0006_OneTouch_RussianPoker from './Assets/img/poker/poker_img/hover/Hover_0006_OneTouch_RussianPoker.jpg'

import Poker_0007_OneTouch_HoldEm_Poker from './Assets/img/poker/poker_img/image/Poker_0007_OneTouch_HoldEm_Poker.jpg'
import Hover_0007_OneTouch_HoldEm_Poker from './Assets/img/poker/poker_img/hover/Hover_0007_OneTouch_HoldEm_Poker.jpg'

import Poker_0008_EZU_casinoholdem_Poker from './Assets/img/poker/poker_img/image/Poker_0008_EZU_casinoholdem_Poker.jpg'
import Hover_0008_EZU_casinoholdem_Poker from './Assets/img/poker/poker_img/hover/Hover_0008_EZU_casinoholdem_Poker.jpg'

import Poker_0009_Evoplay_Texas_Holdem from './Assets/img/poker/poker_img/image/Poker_0009_Evoplay_Texas_Holdem.jpg'
import Hover_0009_Evoplay_Texas_Holdem from './Assets/img/poker/poker_img/hover/Hover_0009_Evoplay_Texas_Holdem.jpg'

import Poker_0010_Evoplay_Oasis_Poker from './Assets/img/poker/poker_img/image/Poker_0010_Evoplay_Oasis_Poker.jpg'
import Hover_0010_Evoplay_Oasis_Poker from './Assets/img/poker/poker_img/hover/Hover_0010_Evoplay_Oasis_Poker.jpg'

import Poker_0011_Evoplay_Teen_Patti_Poker_Indian from './Assets/img/poker/poker_img/image/Poker_0011_Evoplay_Teen_Patti_Poker_Indian.jpg'
import Hover_0011_Evoplay_Teen_Patti_Poker_Indian from './Assets/img/poker/poker_img/hover/Hover_0011_Evoplay_Teen_Patti_Poker_Indian.jpg'

import Poker_0012_BGaming_Casino_holdem from './Assets/img/poker/poker_img/image/Poker_0012_BGaming_Casino_holdem.jpg'
import Hover_0012_BGaming_Casino_holdem from './Assets/img/poker/poker_img/hover/Hover_0012_BGaming_Casino_holdem.jpg'

import Poker_0013_BGaming_Caribbean_Poker from './Assets/img/poker/poker_img/image/Poker_0013_BGaming_Caribbean_Poker.jpg'
import Hover_0013_BGaming_Caribbean_Poker from './Assets/img/poker/poker_img/hover/Hover_0013_BGaming_Caribbean_Poker.jpg'

import Poker_0014_BGaming_Oasis_poker from './Assets/img/poker/poker_img/image/Poker_0014_BGaming_Oasis_poker.jpg'
import Hover_0014_BGaming_Oasis_poker from './Assets/img/poker/poker_img/hover/Hover_0014_BGaming_Oasis_poker.jpg'

import Poker_0015_BGaming_Texas_holdem from './Assets/img/poker/poker_img/image/Poker_0015_BGaming_Texas_holdem.jpg'
import Hover_0015_BGaming_Texas_holdem from './Assets/img/poker/poker_img/hover/Hover_0015_BGaming_Texas_holdem.jpg'

import Poker_0016_BGaming_Trey_poker from './Assets/img/poker/poker_img/image/Poker_0016_BGaming_Trey_poker.jpg'
import Hover_0016_BGaming_Trey_poker from './Assets/img/poker/poker_img/hover/Hover_0016_BGaming_Trey_poker.jpg'

import Poker_0017_BGaming_Jacks_or_better_Video_Poker from './Assets/img/poker/poker_img/image/Poker_0017_BGaming_Jacks_or_better_Video_Poker.jpg'
import Hover_0017_BGaming_Jacks_or_better_Video_Poker from './Assets/img/poker/poker_img/hover/Hover_0017_BGaming_Jacks_or_better_Video_Poker.jpg'

import Poker_0018_BGaming_Wild_Texas_Video_Poker from './Assets/img/poker/poker_img/image/Poker_0018_BGaming_Wild_Texas_Video_Poker.jpg'
import Hover_0018_BGaming_Wild_Texas_Video_Poker from './Assets/img/poker/poker_img/hover/Hover_0018_BGaming_Wild_Texas_Video_Poker.jpg'

import Poker_0019_Betgames_6_poker from './Assets/img/poker/poker_img/image/Poker_0019_Betgames_6_poker.jpg'
import Hover_0019_Betgames_6_poker from './Assets/img/poker/poker_img/hover/Hover_0019_Betgames_6_poker.jpg'

import Poker_0020_Betgames_Bet_on_Poker from './Assets/img/poker/poker_img/image/Poker_0020_Betgames_Bet_on_Poker.jpg'
import Hover_0020_Betgames_Bet_on_Poker from './Assets/img/poker/poker_img/hover/Hover_0020_Betgames_Bet_on_Poker.jpg'

const Roulette = () => {
    return (
        <div className="cards">
            <Header />
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
                    <GameSideBarItem sideItem="casino_holdem" name="Casino Hold'em" ImgSrc={Casino_Holdem_icon} />
                </GameSidebar>

                <GameListSection>
                    <GameList TabName="allGame">
                        <GameIndividual Alt="Poker XPG texas holdem Poker" GameImg={Poker_0000_XPG_texas_holdem_Poker_img} GameImgHover={Hover_0000_XPG_texas_holdem_Poker_img_hover} />
                        <GameIndividual Alt="Poker VivoGaming CasinoHoldem" GameImg={Poker_0001_VivoGaming_CasinoHoldem_img} GameImgHover={Hover_0001_VivoGaming_CasinoHoldem} />
                        <GameIndividual Alt="Poker Superspade_Gaming 3 card Poker" GameImg={Poker_0002_Superspade_Gaming_3_card_Poker_img} GameImgHover={Hover_0002_Superspade_Gaming_3_card_Poker} />
                        <GameIndividual Alt="Poker Spadegaming Win Three Cards Poker" GameImg={Poker_0003_Spadegaming_Win_Three_Cards_Poker_img} GameImgHover={Hover_0003_Spadegaming_Win_Three_Cards_Poker} />
                        <GameIndividual Alt="Poker OneTouch HighHandHoldEm Poker" GameImg={Poker_0004_OneTouch_HighHandHoldEm_Poker_img} GameImgHover={Hover_0004_OneTouch_HighHandHoldEm_Poker} />
                        <GameIndividual Alt="Poker OneTouch InBetweenPoker" GameImg={Poker_0005_OneTouch_InBetweenPoker_img} GameImgHover={Hover_0005_OneTouch_InBetweenPoker} />
                        <GameIndividual Alt="Poker OneTouch RussianPoker " GameImg={Poker_0006_OneTouch_RussianPoker} GameImgHover={Hover_0006_OneTouch_RussianPoker} />
                        <GameIndividual Alt="Poker OneTouch HoldEm Poker" GameImg={Poker_0007_OneTouch_HoldEm_Poker} GameImgHover={Hover_0007_OneTouch_HoldEm_Poker} />
                        <GameIndividual Alt="Poker EZU casinoholdem Poker " GameImg={Poker_0008_EZU_casinoholdem_Poker} GameImgHover={Hover_0008_EZU_casinoholdem_Poker} />
                        <GameIndividual Alt="Poker Evoplay Texas Holdem" GameImg={Poker_0009_Evoplay_Texas_Holdem} GameImgHover={Hover_0009_Evoplay_Texas_Holdem} />
                        <GameIndividual Alt="Poker Evoplay Oasis Poker " GameImg={Poker_0010_Evoplay_Oasis_Poker} GameImgHover={Hover_0010_Evoplay_Oasis_Poker} />
                        <GameIndividual Alt="Poker Evoplay Teen Patti Poker Indian " GameImg={Poker_0011_Evoplay_Teen_Patti_Poker_Indian} GameImgHover={Hover_0011_Evoplay_Teen_Patti_Poker_Indian} />
                        <GameIndividual Alt="Poker BGaming Casino_holdem " GameImg={Poker_0012_BGaming_Casino_holdem} GameImgHover={Hover_0012_BGaming_Casino_holdem} />
                        <GameIndividual Alt="Poker BGaming Caribbean Poker " GameImg={Poker_0013_BGaming_Caribbean_Poker} GameImgHover={Hover_0013_BGaming_Caribbean_Poker} />
                        <GameIndividual Alt="Poker BGaming Oasis poker " GameImg={Poker_0014_BGaming_Oasis_poker} GameImgHover={Hover_0014_BGaming_Oasis_poker} />
                        <GameIndividual Alt="Poker BGaming Texasholdem " GameImg={Poker_0015_BGaming_Texas_holdem} GameImgHover={Hover_0015_BGaming_Texas_holdem} />
                        <GameIndividual Alt="Poker BGaming Trey poker " GameImg={Poker_0016_BGaming_Trey_poker} GameImgHover={Hover_0016_BGaming_Trey_poker} />
                        <GameIndividual Alt="Poker BGaming Jacks or better Video Poker " GameImg={Poker_0017_BGaming_Jacks_or_better_Video_Poker} GameImgHover={Hover_0017_BGaming_Jacks_or_better_Video_Poker} />
                        <GameIndividual Alt="Poker BGaming Wild Texas Video Poker " GameImg={Poker_0018_BGaming_Wild_Texas_Video_Poker} GameImgHover={Hover_0018_BGaming_Wild_Texas_Video_Poker} />
                        <GameIndividual Alt="Poker Betgames 6 poker" GameImg={Poker_0019_Betgames_6_poker} GameImgHover={Hover_0019_Betgames_6_poker} />
                        <GameIndividual Alt="Poker Betgames Bet on Poker" GameImg={Poker_0020_Betgames_Bet_on_Poker} GameImgHover={Hover_0020_Betgames_Bet_on_Poker} />
                    </GameList>

                    <GameList TabName="casino_holdem">
                        <GameIndividual Alt="Poker VivoGaming CasinoHoldem" GameImg={Poker_0001_VivoGaming_CasinoHoldem_img} GameImgHover={Hover_0001_VivoGaming_CasinoHoldem} />
                        <GameIndividual Alt="Poker EZU casinoholdem Poker " GameImg={Poker_0008_EZU_casinoholdem_Poker} GameImgHover={Hover_0008_EZU_casinoholdem_Poker} />
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
