import React from 'react'
import HeroImage from '../global/HeroImage'
import MobileNavbar from '../sidebar/MobileNavbar'
import Sidebar from '../sidebar/Sidebar'
import MainContainer from './MainContainer'

export default function OsisLayout({title, hero, content}) {
    const sideMenuItem = [
        {
            id:1,
            title: "Tentang OSIS, Visi, Misi",
            link:"/osis",
            slug:"overview"
        },
        {
            id:2,
            title: "Anggota OSIS",
            link:"/osis/anggota",
            slug:"members"
        },
        {
            id:3,
            title: "Deskripsi Bidang",
            link:"/osis/deskripsi",
            slug:"description"
        }
    ]
    return (
        <MainContainer>
            <div>
                <HeroImage hero={hero} title={title} />
            </div>
            <MobileNavbar  data= {sideMenuItem}/>
            <div className="container mx-auto mt-24 px-7 lg:px-3 xl:px-0">
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
