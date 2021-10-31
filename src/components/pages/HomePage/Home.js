import React from 'react';
import '../../../App.css'
import Cards from '../../Cards';
import Footer from '../../Footer';
import Hero from '../../Hero';
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data'
import { SliderData } from '../../../data/SliderData';


function Home () {
    return (
        <>
        <Hero slides={SliderData}/>
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