import React from 'react'
import Header from './Header';
import banner from './Assets/img/banner.jpg'
import { GameSection, GameSidebar, GameSideBarItem, GameListSection, GameList, GameIndividual, TopSearchBar } from "./componentsCollection";
import GameProvider from './GameProvider';
import Footer from './Footer';
import Testimonial from './Testimonial';
import blackjack from './Assets/img/icons/blackjack.png'
import baccarat from './Assets/img/icons/baccarat.png'
import teenpati from './Assets/img/icons/poker.png'
import andarbahar from './Assets/img/icons/cards.png'

// Blackjack
import blackjack_img from './Assets/img/cards/blackjack/Platiplus-BJ.jpg'
import BJ_Platiplus_hover from './Assets/img/cards/blackjack/hover/BJ-Platiplus.jpg'

import Ezugi_BJ_Auto_split_img from './Assets/img/cards/blackjack/Ezugi-BJ-Auto-split.jpg'
import BJ_Ezugi_hover from './Assets/img/cards/blackjack/hover/BJ-Ezugi.jpg'

import Evoplay_BJ_lucky_sevens_img from './Assets/img/cards/blackjack/Evoplay-BJ-lucky-sevens.jpg'
import Evoplay_BJ_lucky_sevens_hover from './Assets/img/cards/blackjack/hover/Evoplay-BJ-lucky-sevens.jpg'

import Ezugi_Live_Bj_img from './Assets/img/cards/blackjack/Ezugi-Live-Bj.jpg'
import Ezugi_Live_Bj_hover from './Assets/img/cards/blackjack/hover/Ezugi-Live-Bj.jpg'

import XPG_BJ_img from './Assets/img/cards/blackjack/XPG-BJ.jpg'
import XPG_BJ_hover from './Assets/img/cards/blackjack/hover/XPG-BJ.jpg'

import Vivo_Gaming_Unlimited_BJ_img from './Assets/img/cards/blackjack/Vivo-Gaming-Unlimited-BJ.jpg'
import Vivo_Gaming_Unlimited_BJ_hover from './Assets/img/cards/blackjack/hover/Vivo-Gaming-Unlimited-BJ.jpg'

import Playson_High_img from './Assets/img/cards/blackjack/Playson-High.jpg'
import Playson_High_hover from './Assets/img/cards/blackjack/hover/Playson-High.jpg'

import Onetouch_BJ_Suppreme_img from './Assets/img/cards/blackjack/Onetouch-BJ-Suppreme.jpg'
import Onetouch_BJ_Suppreme_hover from './Assets/img/cards/blackjack/hover/Onetouch-BJ-Suppreme.jpg'

import Platiplus_Bj_Vip_img from './Assets/img/cards/blackjack/Platiplus--Bj-Vip.jpg'
import Platiplus_Bj_Vip_img_hover from './Assets/img/cards/blackjack/hover/Platiplus--Bj-Vip.jpg'

import BGaming_Mutli_Bj_img from './Assets/img/cards/blackjack/BGaming-Mutli-Bj.jpg'
import BGaming_Mutli_Bj_img_hover from './Assets/img/cards/blackjack/hover/BGaming-muti-pro.jpg'

import Vivi_Gaming_BJ_img from './Assets/img/cards/blackjack/Vivi-Gaming-BJ.jpg'
import Vivi_Gaming_BJ_img_hover from './Assets/img/cards/blackjack/hover/Vivo-Gaming-BJ.jpg'

import Playson_med_img from './Assets/img/cards/blackjack/Playson-med.jpg'
import Playson_med_img_hover from './Assets/img/cards/blackjack/hover/Playson-med.jpg'

import Bgaming_Mutihand_img from './Assets/img/cards/blackjack/Bgaming-Mutihand.jpg'
import Bgaming_Mutihand_img_hover from './Assets/img/cards/blackjack/hover/Bgaming-Mutihand.jpg'

import Playson_Low_img from './Assets/img/cards/blackjack/Playson-Low.jpg'
import Playson_Low_img_hover from './Assets/img/cards/blackjack/hover/Playson-Low.jpg'

import B_Gaming_Surrender_img from './Assets/img/cards/blackjack/B-Gaming-Surrender.jpg'
import B_Gaming_Surrender_img_hover from './Assets/img/cards/blackjack/hover/B-Gaming-Surrender.jpg'

import B_gaming_Db_img from './Assets/img/cards/blackjack/B-gaming--Db.jpg'
import B_gaming_Db_img_hover from './Assets/img/cards/blackjack/hover/B-gaming--Db.jpg'

import Banner_2_Changeable_img from './Assets/img/cards/blackjack/Banner-2-Changeable.jpg'

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

// Teen Pati
import Teen_Patti_0000_XPG_tp_img from './Assets/img/cards/Teen_Patti/Teen_Patti_0000_XPG_tp.jpg'
import Teen_Patti_0000_XPG_tp_img_hover from './Assets/img/cards/Teen_Patti/hover/Hover_0000_XPG_tp.jpg'

import Teen_Patti_0001_Ezugi_img from './Assets/img/cards/Teen_Patti/Teen_Patti_0001_Ezugi.jpg'
import Teen_Patti_0001_Ezugi_img_hover from './Assets/img/cards/Teen_Patti/hover/Hover_0001_Ezugi.jpg'

import Teen_Patti_0002_Evoplay_Pokerr_tp_img from './Assets/img/cards/Teen_Patti/Teen_Patti_0002_Evoplay_Pokerr_tp.jpg'
import Teen_Patti_0002_Evoplay_Pokerr_tp_img_hover from './Assets/img/cards/Teen_Patti/hover/Hover_0002_Evoplay_Pokerr_tp.jpg'

import Teen_Patti_0003_Superspade_2020_tp_img from './Assets/img/cards/Teen_Patti/Teen_Patti_0003_Superspade_2020_tp.jpg'
import Teen_Patti_0003_Superspade_2020_tp_img_hover from './Assets/img/cards/Teen_Patti/hover/Hover_0003_Superspade_2020_tp.jpg'

import Teen_Patti_0004_Superspade_tp_img from './Assets/img/cards/Teen_Patti/Teen_Patti_0004_Superspade_tp.jpg'
import Teen_Patti_0004_Superspade_tp_img_hover from './Assets/img/cards/Teen_Patti/hover/Hover_0004_Superspade_tp.jpg'

//Andar Bahar
import Andar_bahar_0000_XPG_AB_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0000_XPG_AB.jpg'
import Andar_bahar_0000_XPG_AB_img_hover from './Assets/img/cards/Andar_Bahar/hover/Hover_0000_XPG-AB.jpg'

import Andar_bahar_0001_Vivo_Gaming_Ab_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0001_Vivo_Gaming_Ab.jpg'
import Andar_bahar_0001_Vivo_Gaming_Ab_img_hover from './Assets/img/cards/Andar_Bahar/hover/Hover_0001_Vivo Gaming-Ab.jpg'

import Andar_bahar_0002_Superspade_ab_NC_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0002_Superspade_ab_NC.jpg'
import Andar_bahar_0002_Superspade_ab_NC_img_hover from './Assets/img/cards/Andar_Bahar/hover/Hover_0002_Superspade-ab-NC.jpg'

import Andar_bahar_0003_Superspade_Speed_Ab_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0003_Superspade_Speed_Ab.jpg'
import Andar_bahar_0003_Superspade_Speed_Ab_img_hover from './Assets/img/cards/Andar_Bahar/hover/Hover_0003_Superspade-Speed-Ab.jpg'

import Andar_bahar_0004_Onetouvh_AB_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0004_Onetouvh_AB.jpg'
import Andar_bahar_0004_Onetouvh_AB_img_hover from './Assets/img/cards/Andar_Bahar/hover/Hover_0004_Onetouvh-AB.jpg'

import Andar_bahar_0005_Onetouh_AB_M_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0005_Onetouh_AB_M.jpg'
import Andar_bahar_0005_Onetouh_AB_M_img_hover from './Assets/img/cards/Andar_Bahar/hover/Hover_0005_Onetouh-AB-M.jpg'

import Andar_bahar_0006_Ezugi_AB_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0006_Ezugi_AB.jpg'
import Andar_bahar_0006_Ezugi_AB_img_hover from './Assets/img/cards/Andar_Bahar/hover/Hover_0006_Ezugi -AB.jpg'

import Andar_bahar_0007_Ezugi_Andar_Bahar_Ott_img from './Assets/img/cards/Andar_Bahar/Andar_bahar_0007_Ezugi_Andar_Bahar_Ott.jpg'
import Andar_bahar_0007_Ezugi_Andar_Bahar_Ott_img_hover from './Assets/img/cards/Andar_Bahar/hover/Hover_0007_Ezugi-Andar Bahar-Ott.jpg'
import LoggedHeader from './LoggedHeader';

const Cards = () => {
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
                        <h3>PLAY MOST POPULAR</h3>
                        <span>card games available free here</span>
                    </div>
                </div>
            </div>

            <GameSection defaultTab="Black-Jack">
                <GameSidebar>
                    <GameSideBarItem sideItem="Black-Jack" name="Black Jack" ImgSrc={blackjack}  />
                    <GameSideBarItem sideItem="baccarat" name="baccarat" ImgSrc={baccarat} />
                    <GameSideBarItem sideItem="teen-pati" name="teenpati" ImgSrc={teenpati} />
                    <GameSideBarItem sideItem="andar-bahar" name="andar bahar" ImgSrc={andarbahar} />
                </GameSidebar>

                <GameListSection>
                    <GameList TabName="Black-Jack">
                        <GameIndividual Alt="Black-Jack" GameImg={blackjack_img} GameImgHover={BJ_Platiplus_hover} dataid="aad60e43266b22cf533ed73c720519f665d7fc0d"/>
                        <GameIndividual Alt="Evoplay BJ lucky sevens" GameImg={Evoplay_BJ_lucky_sevens_img} GameImgHover={Evoplay_BJ_lucky_sevens_hover} />
                        <div className="col-sm-6 gameImg_div">
                            <img src={Banner_2_Changeable_img} alt="Changeable" width="100%" height="210px" className="search__banner_img " />
                        </div>
                        <GameIndividual Alt="Ezugi BJ Auto split" GameImg={Ezugi_BJ_Auto_split_img} GameImgHover={BJ_Ezugi_hover} />
                        <GameIndividual Alt="Evoplay BJ lucky sevens" GameImg={Evoplay_BJ_lucky_sevens_img} GameImgHover={Evoplay_BJ_lucky_sevens_hover} />
                        <GameIndividual Alt="Ezugi Live Bj" GameImg={Ezugi_Live_Bj_img} GameImgHover={Ezugi_Live_Bj_hover} />
                        <GameIndividual Alt="XPG BJ" GameImg={XPG_BJ_img} GameImgHover={XPG_BJ_hover} />
                        <GameIndividual Alt="Vivo Gaming Unlimited BJ" GameImg={Vivo_Gaming_Unlimited_BJ_img} GameImgHover={Vivo_Gaming_Unlimited_BJ_hover} />
                        <GameIndividual Alt="Playson High" GameImg={Playson_High_img} GameImgHover={Playson_High_hover} />
                        <GameIndividual Alt="Onetouch BJ Suppreme" GameImg={Onetouch_BJ_Suppreme_img} GameImgHover={Onetouch_BJ_Suppreme_hover} />
                        <GameIndividual Alt="Platiplus Bj Vip" GameImg={Platiplus_Bj_Vip_img} GameImgHover={Platiplus_Bj_Vip_img_hover} />
                        <GameIndividual Alt="BGaming Mutli Bj" GameImg={BGaming_Mutli_Bj_img} GameImgHover={BGaming_Mutli_Bj_img_hover} />
                        <GameIndividual Alt="Vivi Gaming BJ" GameImg={Vivi_Gaming_BJ_img} GameImgHover={Vivi_Gaming_BJ_img_hover} />
                        <GameIndividual Alt="Playson med" GameImg={Playson_med_img} GameImgHover={Playson_med_img_hover} />
                        <GameIndividual Alt="Bgaming Mutihand" GameImg={Bgaming_Mutihand_img} GameImgHover={Bgaming_Mutihand_img_hover} />
                        <GameIndividual Alt="Playson Low" GameImg={Playson_Low_img} GameImgHover={Playson_Low_img_hover} />
                        <GameIndividual Alt="B Gaming Surrender" GameImg={B_Gaming_Surrender_img} GameImgHover={B_Gaming_Surrender_img_hover} />
                        <GameIndividual Alt="B gaming Db" GameImg={B_gaming_Db_img} GameImgHover={B_gaming_Db_img_hover} />
                    </GameList>

                    <GameList TabName="baccarat">
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

                    <GameList TabName="teen-pati">
                        <GameIndividual Alt="Teen Patti XPG tp" GameImg={Teen_Patti_0000_XPG_tp_img} GameImgHover={Teen_Patti_0000_XPG_tp_img_hover} />
                        <GameIndividual Alt="Teen Patti Ezugi" GameImg={Teen_Patti_0001_Ezugi_img} GameImgHover={Teen_Patti_0001_Ezugi_img_hover} />
                        <GameIndividual Alt="Teen Patti Evoplay Pokerr tp" GameImg={Teen_Patti_0002_Evoplay_Pokerr_tp_img} GameImgHover={Teen_Patti_0002_Evoplay_Pokerr_tp_img_hover} />
                        <GameIndividual Alt="Superspade 2020 tp" GameImg={Teen_Patti_0003_Superspade_2020_tp_img} GameImgHover={Teen_Patti_0003_Superspade_2020_tp_img_hover} />
                        <GameIndividual Alt="Teen Patti Superspade tp" GameImg={Teen_Patti_0004_Superspade_tp_img} GameImgHover={Teen_Patti_0004_Superspade_tp_img_hover} />
                    </GameList>

                    <GameList TabName="andar-bahar">
                        <GameIndividual Alt="Andar bahar XPG AB" GameImg={Andar_bahar_0000_XPG_AB_img} GameImgHover={Andar_bahar_0000_XPG_AB_img_hover} />
                        <GameIndividual Alt="Andar bahar Vivo Gaming Ab" GameImg={Andar_bahar_0001_Vivo_Gaming_Ab_img} GameImgHover={Andar_bahar_0001_Vivo_Gaming_Ab_img_hover} />
                        <GameIndividual Alt="Andar bahar Superspade ab NC" GameImg={Andar_bahar_0002_Superspade_ab_NC_img} GameImgHover={Andar_bahar_0002_Superspade_ab_NC_img_hover} />
                        <GameIndividual Alt="Andar bahar Superspade Speed Ab" GameImg={Andar_bahar_0003_Superspade_Speed_Ab_img} GameImgHover={Andar_bahar_0003_Superspade_Speed_Ab_img_hover} />
                        <GameIndividual Alt="Andar bahar Onetouvh AB" GameImg={Andar_bahar_0004_Onetouvh_AB_img} GameImgHover={Andar_bahar_0004_Onetouvh_AB_img_hover} />
                        <GameIndividual Alt="Andar bahar Onetouh AB M" GameImg={Andar_bahar_0005_Onetouh_AB_M_img} GameImgHover={Andar_bahar_0005_Onetouh_AB_M_img_hover} />
                        <GameIndividual Alt="Andar bahar Ezugi AB" GameImg={Andar_bahar_0006_Ezugi_AB_img} GameImgHover={Andar_bahar_0006_Ezugi_AB_img_hover} />
                        <GameIndividual Alt="Andar bahar Ezugi Andar Bahar Ott" GameImg={Andar_bahar_0007_Ezugi_Andar_Bahar_Ott_img} GameImgHover={Andar_bahar_0007_Ezugi_Andar_Bahar_Ott_img_hover} />
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

export default Cards
