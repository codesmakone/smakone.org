import React from 'react'
import HeroImage from '../../global/HeroImage'
import MainContainer from './MainContainer'

export default function AboutLayout({children}) {
    return (
        <MainContainer>
            <div>
                <HeroImage />
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-12">
                    <div className="col-span-3">

                    </div>
                    <div className="col-span-9">
                        {children}
                    </div>
                </div>  
            </div>
        </MainContainer>
        
    )
}
