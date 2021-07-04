import React from 'react'
import HeroImage from '../global/HeroImage'
import MobileNavbar from '../sidebar/MobileNavbar'
import Sidebar from '../sidebar/Sidebar'
import MainContainer from './MainContainer'

export default function AlumniLayout({title, hero, content}) {
    const sideMenuItem = [
        {
            id:1,
            title: "Billy Stevanus",
            link:"/alumni/billy"
        },
        {
            id:2,
            title: "Scott Moses",
            link:"/alumni/scott",
        },
        {
            id:3,
            title: "Nicole Charlene",
            link:"/alumni/nicole"
        }
    ]
    return (
        <MainContainer>
            <div>
                <HeroImage hero={hero} title={title} />
            </div>
            <MobileNavbar  data= {sideMenuItem}/>
            <div className="container mx-auto mt-16 lg:mt-24 px-7 lg:px-3 xl:px-0">
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