import React from 'react';
import '../../../App.css'
import Cards from '../../Cards';
import Footer from '../../Footer';
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'


function Home () {
    return (
        <>
        <HeroSection {...homeObjOne}/>
        <HeroSection {...homeObjThree}/>
        <HeroSection {...homeObjTwo}/>
        <HeroSection {...homeObjFour}/>
        <Cards/>
        <Footer/> 
        </>
    )
}

export default Home;