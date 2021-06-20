import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'


export default function MainContainer({children}) {
    return (
        <div className="font-sans bg-gray-50 bg-opacity-10 text-gray-700">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
