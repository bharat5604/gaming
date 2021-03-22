import React from 'react'
import Header from './Header';
import banner from './Assets/img/banner.jpg'
import {Link} from 'react-router-dom';
import GameProvider from './GameProvider';
import Footer from './Footer';
import Testimonial from './Testimonial';
import blackjack from './Assets/img/icons/blackjack.png'
import baccarat from './Assets/img/icons/baccarat.png'
import teenpati from './Assets/img/icons/poker.png'
import andarbahar from './Assets/img/icons/cards.png'
import casino from './Assets/img/icons/casinowar.png'
import casinoHoldem from './Assets/img/icons/holdem.png'

const Cards = () => {
    return (
        <div className="cards">
            <Header />
            <div className="card__banner">
                <img src={banner} className="img-fluid" alt=""/>
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
                        <div className="col-md-3">
                            <div className="in__games">
                                <ul>
                                    <li>
                                        <Link to="">
                                            <img src={blackjack} alt="black jack"/>
                                            Black Jack
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src={baccarat} alt="black jack"/>
                                            baccarat
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src={teenpati} alt="black jack"/>
                                            teen pati
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src={andarbahar} alt="black jack"/>
                                            andar bahar
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src={casino} alt="black jack"/>
                                            casino war
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <img src={casinoHoldem} alt="black jack"/>
                                            casino holde
                                        </Link>
                                    </li>
                                </ul>
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
