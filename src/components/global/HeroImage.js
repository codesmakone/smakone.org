import React,{useState,useEffect} from 'react'
import { Parallax } from 'react-parallax';
export default function HeroImage({title,hero}) {
    return (
    <div>
        <Parallax bgImage={hero}  blur={0} className="lg:min-h-500 xl:min-h-screen relative" bgImageAlt="SMAK 1 Flag Ceremony Team" strength={100} bgImageStyle={{top:"-100px"}}>
            <div className="lg:min-h-500 xl:min-h-screen bg-gradient-to-b from-transparent to-gray-500 bg-opacity-70 filter blur-3xl justify-center items-center">
            </div>
            <div className="absolute top-1/2 inset-x-1/4">
                <h1 className="text-7xl top-9 text-white font-bold block max-w-4xl text-center">{title}</h1>
            </div>   
        </Parallax>    
        <div class="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path style={{fill:"rgb(254,254,255)"}} fill-opacity="1" d="M0,192L1440,288L1440,320L0,320Z"></path>
            </svg>
        </div>
    </div>
    )
}


