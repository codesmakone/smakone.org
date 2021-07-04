import React from 'react'
import HeroImage from '../global/HeroImage'
import MobileNavbar from '../sidebar/MobileNavbar'
import Sidebar from '../sidebar/Sidebar'
import MainContainer from './MainContainer'

export default function AboutLayout({title, hero, content}) {
    const sideMenuItem = [
        {
            id:1,
            title: "Sekilas Pandang",
            link:"/about",
            slug:"overview"
        },
        {
            id:2,
            title: "Sejarah, Visi, dan Misi",
            link:"/about/sejarah",
            slug:"history"
        },
        {
            id:3,
            title: "Fasilitas",
            link:"/about/fasilitas",
            slug:"facility"
        },
        {
            id:4,
            title: "Logo",
            link:"/about/logo",
            slug:"logo"
        },
        {
            id:5,
            title: "Lagu Tema",
            link:"/about/songs",
            slug:"songs"
        },
        {
            id:6,
            title: "Guru dan Staff",
            link:"/about/staff",
            slug:"staff"
        }
    ]
    return (
        <MainContainer>
            <div>
                <HeroImage hero={hero} title={title} />
            </div>
            <MobileNavbar  data= {sideMenuItem}/>
            <div className="container mx-auto mt-16 lg:mt-16 px-7 lg:px-3 xl:px-0">
                <div className="grid grid-cols-12 gap-6">
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
