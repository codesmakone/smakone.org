import React from 'react'
import HeroImage from '../global/HeroImage'
import MobileNavbar from '../sidebar/MobileNavbar'
import Sidebar from '../sidebar/Sidebar'
import MainContainer from './MainContainer'

export default function Ass1stLayout({title, hero, content}) {
    const sideMenuItem = [
        {
            id:1,
            title: "Overview",
            link:"/Ass1st"
        },
        {
            id:2,
            title: "Kedokteran",
            link:"/Ass1st/kedokteran",
        },
        {
            id:3,
            title: "Farmasi",
            link:"/Ass1st/farmasi"
        },
        {
            id:4,
            title: "Keguruan dan Pendidikan",
            link:"/Ass1st/guru"
        },
        {
            id:5,
            title: "Sosiologi",
            link:"/Ass1st/sosiologi"
        },
        {
            id:6,
            title: "Akuntansi",
            link:"/Ass1st/akuntansi"
        },
        {
            id:7,
            title: "Hukum",
            link:"/Ass1st/hukum"
        },
        {
            id:8,
            title: "Psikologi",
            link:"/Ass1st/psikologi"
        },
        {
            id:9,
            title: "Teknik Sipil",
            link:"/Ass1st/sipil"
        },
        {
            id:10,
            title: "Teknik Pertambangan",
            link:"/Ass1st/tambang"
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