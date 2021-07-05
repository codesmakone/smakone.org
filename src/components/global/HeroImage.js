import React,{useState,useEffect} from 'react'
import { Parallax } from 'react-parallax';
export default function HeroImage({title,hero,opacity = 60,color="blue-900"}) {
    return (
    <div>
        <Parallax bgImage={hero}  blur={0} className="min-h-250 lg:min-h-500 xl:min-h-screen relative" bgImageAlt="SMAK 1 Flag Ceremony Team" strength={100} bgImageStyle={{top:"-100px"}}>
            <div className={`min-h-250 lg:min-h-500 xl:min-h-screen bg-${color} bg-opacity-${opacity}  filter blur-3xl justify-center items-center`}>
            </div>
            <div className="absolute lg:-m-10 md:-m-10 -m-20 top-1/2 inset-x-1/4">
                <h1 className="text-7xl top-9 text-white font-bold block max-w-4xl text-center">{title}</h1>
            </div>   
        </Parallax>    
        <div class="absolute bottom-0 xl:visible invisible left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path style={{fill:"rgb(254,254,255)"}} fill-opacity="1" d="M0,256L80,240C160,224,320,192,480,202.7C640,213,800,267,960,272C1120,277,1280,235,1360,213.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </div>
    </div>
    )
}
//bg-gradient-to-b from-transparent to-gray-500 bg-opacity-70

//<div className="lg:min-h-500 xl:min-h-screen bg-gradient-to-b from-transparent to-purple-500 bg-opacity-70 bg-opacity-60 filter blur-3xl justify-center items-center">

