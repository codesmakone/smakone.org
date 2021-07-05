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
            title: "Badan Pengurus Harian",
            link:"/osis/bph",
            slug:"bph"
        },
        {
            id:3,
            title: "Bidang 1: Agama",
            link:"/osis/bidang1",
            slug:"bidang1"
        },
        {
            id:4,
            title: "Bidang 2: Budi Pekerti Luhur",
            link:"/osis/bidang2",
            slug:"bidang2"
        },
        {
            id:5,
            title: "Bidang 3: Wawasan Kebangsaan",
            link:"/osis/bidang3",
            slug:"bidang3"
        },
        {
            id:6,
            title: "Bidang 4: Prestasi Akademik dan IPTEK",
            link:"/osis/bidang4",
            slug:"bidang4"
        },
        {
            id:7,
            title: "Bidang 5: Demokrasi dan HAM",
            link:"/osis/bidang5",
            slug:"bidang5"
        },
        {
            id:8,
            title: "Bidang 6: Kewirausahaan",
            link:"/osis/bidang6",
            slug:"bidang6"
        },
        {
            id:9,
            title: "Bidang 7: Kesehatan Jasmani",
            link:"/osis/bidang7",
            slug:"bidang7"
        },
        {
            id:10,
            title: "Bidang 8: Sastra dan Budaya",
            link:"/osis/bidang8",
            slug:"bidang8"
        },        
        {
            id:11,
            title: "Bidang 9: TIK",
            link:"/osis/bidang9",
            slug:"bidang9"
        },
        {
            id:12,
            title: "Bidang 10: Bahasa Inggris",
            link:"/osis/bidang10",
            slug:"bidang10"
        }
    ]
    return (
        <MainContainer>
            <div>
                <HeroImage hero={hero} title={title} />
            </div>
            <MobileNavbar  data= {sideMenuItem}/>
            <div className="container mx-auto mt-24 px-7 lg:px-3 xl:px-0">
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
