import React from 'react'
import Header from './Header';
import banner from './Assets/img/banner.jpg'
import { Link } from 'react-router-dom';
import GameProvider from './GameProvider';
import Footer from './Footer';
import Testimonial from './Testimonial';
import blackjack from './Assets/img/icons/blackjack.png'
import baccarat from './Assets/img/icons/baccarat.png'
import teenpati from './Assets/img/icons/poker.png'
import andarbahar from './Assets/img/icons/cards.png'
import casino from './Assets/img/icons/casinowar.png'
import casinoHoldem from './Assets/img/icons/holdem.png'
import blackjack_img from './Assets/img/cards/Platiplus-BJ.jpg'
import BJ_Platiplus_hover from './Assets/img/cards/hover/BJ-Platiplus.jpg'

import Ezugi_BJ_Auto_split_img from './Assets/img/cards/Ezugi-BJ-Auto-split.jpg'
import BJ_Ezugi_hover from './Assets/img/cards/hover/BJ-Ezugi.jpg'

import Evoplay_BJ_lucky_sevens_img from './Assets/img/cards/Evoplay-BJ-lucky-sevens.jpg'
import Evoplay_BJ_lucky_sevens_hover from './Assets/img/cards/hover/Evoplay-BJ-lucky-sevens.jpg'

import Ezugi_Live_Bj_img from './Assets/img/cards/Ezugi-Live-Bj.jpg'
import Ezugi_Live_Bj_hover from './Assets/img/cards/hover/Ezugi-Live-Bj.jpg'

import XPG_BJ_img from './Assets/img/cards/XPG-BJ.jpg'
import XPG_BJ_hover from './Assets/img/cards/hover/XPG-BJ.jpg'

import Vivo_Gaming_Unlimited_BJ_img from './Assets/img/cards/Vivo-Gaming-Unlimited-BJ.jpg'
import Vivo_Gaming_Unlimited_BJ_hover from './Assets/img/cards/hover/Vivi-Gaming-Unlimited-BJ.jpg'

import Playson_High_img from './Assets/img/cards/Playson-High.jpg'
import Playson_High_hover from './Assets/img/cards/hover/Playson-High.jpg'

import Onetouch_BJ_Suppreme_img from './Assets/img/cards/Onetouch-BJ-Suppreme.jpg'
import Onetouch_BJ_Suppreme_hover from './Assets/img/cards/hover/Onetouch-BJ-Suppreme.jpg'

import Platiplus_Bj_Vip_img from './Assets/img/cards/Platiplus--Bj-Vip.jpg'
import Platiplus_Bj_Vip_img_hover from './Assets/img/cards/hover/Platiplus--Bj-Vip.jpg'

import BGaming_Mutli_Bj_img from './Assets/img/cards/BGaming-Mutli-Bj.jpg'
import BGaming_Mutli_Bj_img_hover from './Assets/img/cards/hover/BGaming-muti-pro.jpg'

import Vivi_Gaming_BJ_img from './Assets/img/cards/Vivi-Gaming-BJ.jpg'
import Vivi_Gaming_BJ_img_hover from './Assets/img/cards/hover/Vivo-Gaming-BJ.jpg'

import Playson_med_img from './Assets/img/cards/Playson-med.jpg'
import Playson_med_img_hover from './Assets/img/cards/hover/Playson-med.jpg'

import Bgaming_Mutihand_img from './Assets/img/cards/Bgaming-Mutihand.jpg'
import Bgaming_Mutihand_img_hover from './Assets/img/cards/hover/Bgaming-Mutihand.jpg'

import Playson_Low_img from './Assets/img/cards/Playson-Low.jpg'
import Playson_Low_img_hover from './Assets/img/cards/hover/Playson-Low.jpg'

import B_Gaming_Surrender_img from './Assets/img/cards/B-Gaming-Surrender.jpg'
import B_Gaming_Surrender_img_hover from './Assets/img/cards/hover/B-Gaming-Surrender.jpg'

import B_gaming_Db_img from './Assets/img/cards/B-gaming--Db.jpg'
import B_gaming_Db_img_hover from './Assets/img/cards/hover/B-gaming--Db.jpg'

import Banner_2_Changeable_img from './Assets/img/cards/Banner-2-Changeable.jpg'

import search_icon from './Assets/img/cards/search_icon.png'

const Cards = () => {
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

            {/* games part */}
            <div className="games__part">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 pr-0">
                            <div className="in__games">
                                <ul>
                                    <li>
                                        <Link to="">
                                            <img src={blackjack} alt="black jack" />
                                            Black Jack
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src={baccarat} alt="black jack" />
                                            baccarat
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src={teenpati} alt="black jack" />
                                            teen pati
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src={andarbahar} alt="black jack" />
                                            andar bahar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src={casino} alt="black jack" />
                                            casino war
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src={casinoHoldem} alt="black jack" />
                                            casino holde
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-10">
                            <div className="search_maindiv pr-0">

                                <div className="row searchbar_div">
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control search_your_game" placeholder="Search your game" />
                                    </div>
                                    <div className="col-sm-3">
                                        <select className="form-control search_dropdown">
                                            <option>blackjack</option>
                                            <option>Test 1</option>
                                            <option>Test 2</option>
                                            <option>Test 3</option>
                                            <option>Test 4</option>
                                            <option>Test 5</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-5 pr-0 search_div">
                                        <img src={search_icon} className="search_icon" alt="search" />
                                        <button className="btn search_btn">Search</button>
                                    </div>
                                </div>
                                <div className="banner_maindiv">
                                    <div className="gameImg_div">
                                        <img src={blackjack_img} alt="blackjack" className="blackjack_img_c gameImg" />
                                        <img src={BJ_Platiplus_hover} alt="blackjack" className="blackjack_img_c gameImg_Hover" />

                                    </div>
                                    <div className="gameImg_div search__banner_img_div">
                                        <img src={Banner_2_Changeable_img} alt="blackjack" className="search__banner_img" />
                                    </div>
                                </div>
                            </div>

                            <div className="row ml-0 Game_gridview">

                                <div className="col-sm-3 gameImg_div">
                                    <img src={Ezugi_BJ_Auto_split_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={BJ_Ezugi_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                                <div className="col-sm-3 gameImg_div">
                                    <img src={Evoplay_BJ_lucky_sevens_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={Evoplay_BJ_lucky_sevens_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                                <div className="col-sm-3 gameImg_div">
                                    <img src={Ezugi_Live_Bj_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={Ezugi_Live_Bj_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                                <div className="col-sm-3 gameImg_div">
                                    <img src={XPG_BJ_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={XPG_BJ_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                                <div className="col-sm-3 gameImg_div">
                                    <img src={Vivo_Gaming_Unlimited_BJ_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={Vivo_Gaming_Unlimited_BJ_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                                <div className="col-sm-3 gameImg_div">
                                    <img src={Playson_High_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={Playson_High_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                                <div className="col-sm-3 gameImg_div">
                                    <img src={Onetouch_BJ_Suppreme_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={Onetouch_BJ_Suppreme_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                                <div className="col-sm-3 gameImg_div">
                                    <img src={Platiplus_Bj_Vip_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={Platiplus_Bj_Vip_img_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                                <div className="col-sm-3 gameImg_div">
                                    <img src={BGaming_Mutli_Bj_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={BGaming_Mutli_Bj_img_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                                <div className="col-sm-3 gameImg_div">
                                    <img src={Vivi_Gaming_BJ_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={Vivi_Gaming_BJ_img_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                                <div className="col-sm-3 gameImg_div">
                                    <img src={Playson_med_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={Playson_med_img_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                                <div className="col-sm-3 gameImg_div">
                                    <img src={Bgaming_Mutihand_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={Bgaming_Mutihand_img_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                                <div className="col-sm-3 gameImg_div">
                                    <img src={Playson_Low_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={Playson_Low_img_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                                <div className="col-sm-3 gameImg_div">
                                    <img src={B_Gaming_Surrender_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={B_Gaming_Surrender_img_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                                <div className="col-sm-3 gameImg_div">
                                    <img src={B_gaming_Db_img} alt="blackjack" width="100%" className="gameImg" />
                                    <img src={B_gaming_Db_img_hover} alt="blackjack" width="100%" className="gameImg_Hover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GameProvider />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Cards
