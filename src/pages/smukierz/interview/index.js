import React from 'react'
import SmukierzLayout from '../../../components/page_template/SmukierzLayout'
import KegiatanSection from '../../../components/kegiatan/KegiatanSection'
import Card from '../../../components/Alumni/AlumniCard'

import Banner from "../../../images/17an.jpg"
import Michael from '../../../images/Card/MichaelAbimanyu.jpg'
import Gabriela from '../../../images/Card/GabrielaErin.jpg'
import Darren from '../../../images/Card/DarrenJonathan.jpg'



export default function AfterPage() {
    const title = "Kehidupan SMUKIERZ"
    const content = (
        <div className="container mx-auto"> 
            <KegiatanSection
                title="Dengar Dari Smukierz"
                subtitle='"Pengalaman nyata penuh keseruan"'
            />
            <div className="grid grid-cols-3 gap-4 mb-12">
                <Card
                    img={ Michael } 
                    alt="Michael Abimanyu" 
                    desc='"Pianis sekaligus musisi andalan SMUKIERZ"'
                    title="Michael Abimanyu" 
                    dir="./michael"
                />
                <Card
                    img={ Gabriela } 
                    alt="Gabriela Erin" 
                    desc='"Matematikawan dengan puluhan mendali"'
                    title="Gabriela Erin" 
                    dir="./gabriela"
                />
                <Card
                    img={ Darren } 
                    alt="Darren Jonathan" 
                    desc='"Pebulutangkis cerdas dengan smash yang mematikan"'
                    title="Darren Jonathan" 
                    dir="./darren"
                />
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
