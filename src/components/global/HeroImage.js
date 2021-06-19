import React,{useState,useEffect} from 'react'
import { Parallax } from 'react-parallax';
import Banner from "../../images/banner2.jpg"
import Title from '../text_helper/Title';
export default function HeroImage() {
    return (
        <Parallax bgImage={Banner} className="lg:min-h-500 xl:min-h-700" bgImageAlt="SMAK 1 Flag Ceremony Team" strength={100} bgImageStyle={{top:"-200px"}}>    
        </Parallax>    
    )
}
