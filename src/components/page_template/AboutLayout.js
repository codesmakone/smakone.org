import React from 'react'
import HeroImage from '../global/HeroImage'
import Sidebar from '../sidebar/Sidebar'
import MainContainer from './MainContainer'

export default function AboutLayout({children}) {
    return (
        <MainContainer>
            <div>
                <HeroImage />
            </div>
            <div className="container mx-auto mt-24 md:px-10">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-3 border-r-2">
                        <Sidebar />
                    </div>
                    <div className="col-span-9">
                        {children}
                    </div>
                </div>  
            </div>
        </MainContainer>
        
    )
}
