import React from 'react'
import PengumumanLayout from '../../components/page_template/PengumumanLayout'

import PLS from '../../images/pengumuman/PLS.png'

import Banner from "../../images/bannerKegiatan.jpg"


export default function PengumumanPage() {
    const title = "Pengumuman"
    const content = (
        <div className="container mx-auto"> 
            <div className="m-3">
                <img src={ PLS} className="object-cover w-full rounded-lg shadow-xl" alt="PLS" />
                <div className="p-2">
                    <h2 className="font-semibold text-center text-3xl">Pengenalan Lingkungan Sekolah</h2>
                    <p className="text-center mb-6">New Journey, New Adventure</p>
                </div>
            </div>
            <p className="justify-center text-justify p-2">
            Hello SMUKIERS, welcome to SMAK 1!
            <br /> <br />
            It's our pleasure to welcome all of you as part of SMAK 1 Family.
            <br /> <br />
            We proudly present : <br />
            CRESENT 2021 : THE CHOSEN ONES ASSEMBLE <br />
            Collaboration with Solidarity in Care, Patience, and Loyalty <br />
            <br />
            We gladly invite you to join our zoom meeting. <br />
            <br />
            Don't forget to mark your calendars on these two dates :
            <br /> <br />
            Briefing :  <br />
            📅 : Friday, 9th July 2021 <br />
            ⏰ : 08.00 AM - 10.00 AM <br />
            📍 : Zoom <br /> <br />

            Orientation Week : <br />
            📅 : 12th July 2021 - 15th July 2021 <br />
            ⏰ : 06.30 AM - 01.00 PM <br />
            📍 : Zoom <br /> <br />

            See you soon!! <br />
            Stay healthy and stay safe!!! <br /> <br />

            #PLS2021 #CRESCENT2021 #THECHOSENONESASSEMBLE  
            </p>
        </div>
    )
    return (
        <PengumumanLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}