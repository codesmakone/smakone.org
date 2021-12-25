import React from 'react'
import HeroImage from '../global/HeroImage'
import MobileNavbar from '../sidebar/MobileNavbar'
import Sidebar from '../sidebar/Sidebar'
import MainContainer from './MainContainer'

export default function EmagzLayout({title, hero, content}) {
    const sideMenuItem = [
        {
            id:1,
            title: "November's Youth",
            link:"/Emagz/1stissue",
            slug:"1st Issue"
        },
        {
            id:2,
            title: "Mindful Christmas",
            link:"/Emagz/2ndissue",
            slug:"2nd Issue"
        }
    ]
    return (
        <MainContainer>
            <div>
                <HeroImage hero={hero} title={title} />
            </div>
            <MobileNavbar  data= {sideMenuItem}/>
            <div className="container mx-auto mt-16 lg:mt-16 px-7 lg:px-3 xl:px-0">
                <div className="container grid grid-cols-12 gap-6">
                    <div className="hidden lg:block lg:col-span-3 border-r-2">
                        <Sidebar data= {sideMenuItem}/>
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                        {content}
                    </div>
                </div>  
            </div>
        </MainContainer>
        
    )
}
