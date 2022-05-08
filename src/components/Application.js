import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

import app1 from '../assets/images/logo/app1.png';
import app2 from '../assets/images/logo/app2.png';
import app3 from '../assets/images/logo/app3.png';
import app4 from '../assets/images/logo/app4.png';
import app5 from '../assets/images/logo/app5.png';
import ApplicationPic from '../assets/images/bg/application.png';
import SolanMobile from '../assets/solan-mobile.png';

const Application = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (

        <div className="application__section"
            style={{
                backgroundImage: `url(${ApplicationPic})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                objectFit: "cover"
            }}>
            <div className="container">
                <div className="apllication__inner">
                    <div className="title">
                        <p data-aos="fade-up" data-aos-duration="2000">Applications</p>
                        <div data-aos="fade-up" data-aos-duration="3000" className="offer_section_button">
                            <button>Solanverse Applications</button>
                        </div>
                    </div>
                    <div className="app__section" data-aos="fade-up" data-aos-duration="3000">
                        <div className="item1 mb-5 mb-md-0">
                            <div className="app">
                                <img src={app1} alt="" />
                            </div>
                            <p>Solan Pay</p>
                        </div>
                        <div className="item1 mb-5 mb-md-0">
                            <div className="app">
                                <img src={app2} alt="" />
                            </div>
                            <p>Solan Bets</p>
                        </div>
                        <div className="item1 mb-5 mb-md-0">
                            <div className="app">
                                <img src={app3} alt="" />
                            </div>
                            <p>Solan Lending</p>
                        </div>
                        <div className="item1 mb-5 mb-md-0">
                            <div className="app">
                                <img src={app4} alt="" />
                            </div>
                            <p>Solan Shop</p>
                        </div>
                        <div className="item1 mb-5 mb-md-0">
                            <div className="app">
                                <img src={app5} alt="" />
                            </div>
                            <p>Solan Travel</p>
                        </div>
                    </div>


                    <div className='solan-mobile d-md-none d-flex justify-content-center'>

                        <div>
                            <img src={SolanMobile} alt="" srcset="" />

                            <div className='text-white text-justify my-3 w-75 mx-auto'>
                                <i class="fa-solid fa-check"><span className='solan-mobile-text'>Solan Pay</span></i>
                                <br />
                                <i class="fa-solid fa-check"><span className='solan-mobile-text'>Solan Bets</span></i>
                                <br />
                                <i class="fa-solid fa-check"><span className='solan-mobile-text'>Solan Lending</span></i>
                                <br />
                                <i class="fa-solid fa-check"><span className='solan-mobile-text'>Solan Shop</span></i>
                                <br />
                                <i class="fa-solid fa-check"><span className='solan-mobile-text'>Solan Travel</span></i>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default Application;