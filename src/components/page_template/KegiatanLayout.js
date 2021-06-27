import React from 'react'
import HeroImage from '../global/HeroImage'
import MobileNavbar from '../sidebar/MobileNavbar'
import Sidebar from '../sidebar/Sidebar'
import MainContainer from './MainContainer'

export default function AlumniLayout({title, hero, content}) {
    const sideMenuItem = [
        {
            id:1,
            title: "Ada Apa Aja Sih di SMAK 1?",
            link:"/kegiatan"
        },
        {
            id:2,
            title: "Smakonecup",
            link:"/kegiatan/smakonecup",
        },
        {
            id:3,
            title: "Soundscape",
            link:"/kegiatan/soundscape"
        },
        {
            id:4,
            title: "SMUKIEZ Theater Night",
            link:"/kegiatan/stn"
        },
        {
            id:5,
            title: "KR1ZA",
            link:"/kegiatan/kr1za"
        },
        {
            id:6,
            title: "Seni",
            link:"/kegiatan/seni"
        },
        {
            id:7,
            title: "Science Club",
            link:"/kegiatan/scj"
        },
        {
            id:8,
            title: "Pramuka",
            link:"/kegiatan"
        },
        {
            id:9,
            title: "ONECAST",
            link:"/kegiatan"
        },
        {
            id:10,
            title: "The Duke of Edinburgh International Award",
            link:"/kegiatan/dofe"
        },
        {
            id:11,
            title: "Model United Nation dan English Debate Society",
            link:"/kegiatan/muneds"
        },
        {
            id:12,
            title: "Ekstrakulikuler Lainnya",
            link:"/kegiatan/lainnya"
        }
    ]
    return (
        <MainContainer>
            <div>
                <HeroImage hero={hero} title={title} />
            </div>
            <MobileNavbar  data= {sideMenuItem}/>
            <div className="container mx-auto mt-16 lg:mt-24 px-7 lg:px-3 xl:px-0">
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