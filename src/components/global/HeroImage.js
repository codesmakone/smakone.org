import React,{useState,useEffect} from 'react'
import { Parallax } from 'react-parallax';
export default function HeroImage({title,hero}) {
    return (
        <Parallax bgImage={hero} className="lg:min-h-500 xl:min-h-screen" bgImageAlt="SMAK 1 Flag Ceremony Team" strength={100} bgImageStyle={{top:"-100px"}}>
            <div className="lg:min-h-500 xl:min-h-screen bg-gray-700 bg-opacity-70 flex justify-center items-center">
                <h1 className="text-7xl top-9 text-white font-bold block max-w-4xl text-center">{title}</h1>
            </div>   
        </Parallax>    
    )
}
