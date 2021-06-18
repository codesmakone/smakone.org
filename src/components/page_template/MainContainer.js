import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import { ParallaxProvider } from 'react-scroll-parallax';


export default function MainContainer({children}) {
    return (
        <ParallaxProvider>
            <div className="font-sans">
                <Header/>
                {children}
                <Footer/>
            </div>
        </ParallaxProvider>
    )
}
