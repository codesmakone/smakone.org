import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'


export default function MainContainer({children}) {
    return (
        <div className="font-sans">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
