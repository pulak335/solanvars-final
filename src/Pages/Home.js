import React from 'react';
import Application from '../components/Application';
import Contract from '../components/Contract';
import FQAList from '../components/FQAque';
import Game from '../components/Game';
import Header from '../components/Header';
import Mission from '../components/Mission';
import Offer from '../components/Offer';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';
import PieChart from '../components/PieChart';
import About from '../components/about'
const Home = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Offer/>
            <Contract/>
            <Game/>
            <PieChart/>
            <Mission/>
            <Application/>
            <Roadmap/>
            <FQAList/>
            <Footer/>
        </div>
    );
};

export default Home;