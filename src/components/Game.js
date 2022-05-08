import React,{useEffect} from 'react';
import skul from '../assets/images/logo/skul.gif'
import Frame from '../assets/images/logo/Frame.png'
import Frame1 from '../assets/images/logo/Frame (1).png'
import Frame2 from '../assets/images/logo/Frame 338.png'
import GamePic from '../assets/images/bg/game.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Game = () => {

    useEffect(() => {
      AOS.init();
    }, [])
    return (
        <div className="game__section" style={{
            backgroundImage: `url(${GamePic})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            objectFit: "cover"
}}>
                <div className="container">
                    <div className="game__inner">
                        <div className="title">
                                <img width={'100%'} src={skul} alt=""/><br/>
                                <p data-aos="fade-up"  data-aos-duration="1000">About</p>
                                <div  data-aos="fade-up"  data-aos-duration="2000" className="offer_section_button" style={{maxWidth: "450px", marginBottom: " 154px"}}>
                                    <button>The Game</button>
                                </div>
                        </div>
                        <div className="para__section d-md-none mb-5" data-aos="fade-up"  data-aos-duration="3000">
                                <p className="para1 mb-4 mb-md-5"> SOLANVERSE is an AI-powered fighting defence in which anyone can earn rewards such as tokens and NFTs through competent gameplay and contributions to the ecosystem.</p>
                                <p className="para2 mb-4 mb-md-5">Players can engage in combat, gather resources, develop their characters, and establish their own land-based kingdoms. </p>
                                <p className="para3">The game will be powered by its official token, the SolanVerse token ($SLV). In-game characters can also be collected as NFTs in the game and exchanged for tokens in our official NFT marketplace. </p>
                        </div>


                        <div className="row align-items-center" data-aos="fade-up"  data-aos-duration="3000">
                                <div className="col-md-4 mb-5 mb-md-0">
                                    <div className="image__section">
                                        <img src={Frame} alt=""/>
                                        <h4>HIGH REWARDS</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-5 mb-md-0">
                                    <div className="image__section">
                                        <img src={Frame1} alt=""/>
                                        <h4>HIGH REWARDS</h4>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="image__section">
                                        <img src={Frame2} alt=""/>
                                        <h4>HIGH REWARDS</h4>
                                    </div>
                                </div>
                        </div>
                        <div className="para__section d-none d-md-block" data-aos="fade-up"  data-aos-duration="3000">
                                <p className="para1 mb-4 mb-md-5"> SOLANVERSE is an AI-powered fighting defence in which anyone can earn rewards such as tokens and NFTs through competent gameplay and contributions to the ecosystem.</p>
                                <p className="para2 mb-4 mb-md-5">Players can engage in combat, gather resources, develop their characters, and establish their own land-based kingdoms. </p>
                                <p className="para3">The game will be powered by its official token, the solanvrse token ($SLV). In-game characters can also be collected as NFTs in the game and exchanged for tokens in our official NFT marketplace. </p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Game;