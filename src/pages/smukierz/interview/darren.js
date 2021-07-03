import React from 'react'
import SmukierzLayout from '../../../components/page_template/SmukierzLayout'
import AlumniArticle from '../../../components/alumni/AlumniArticle'

import Darren from '../../../images/Card/DarrenJonathan.jpg'
import Banner from "../../../images/17an.jpg"

export default function DarrenPage() {
    const title = "Kehidupan SMUKIERZ"
    const content = (
        <div className="grid grid-cols-1 gap-3 py-5">
            <div className="pb-20">
            <img src={ Darren } className="lg:h-96 mx-auto rounded-lg" alt="Darren Jonathan" />
            <h1 className="text-center mt-5 font-bold text-5xl">
                Darren Jonathan
            </h1>
            <p className="text-center mb-8">"Pebulutangkis cerdas dengan smash yang mematikan"</p>
            <AlumniArticle>
                Michael Abimanyu merupakan siswa SMAK 1 yang dikenal karena kemampuan bermain musiknya yang luar biasa. Michael tertarik ke dalam musik pada usia 
                tiga tahun. Ketika ia mendengar suara piano di rumah teman ayahnya, Michael yang berusia tiga tahun terkagum dengan indahnya melodi dari piano 
                tersebut. Ayahnya sadar akan ketertarikan dan bakat Michael. Saat berusia empat tahun, Michael mulai belajar piano klasik dari dasar dan mulai 
                mengikuti banyak kegiatan piano klasik, termasuk berkompetisi. 
            </AlumniArticle>
            </div>
        </div>
    )
    return (
        <SmukierzLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}