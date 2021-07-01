import React from 'react'
import SmukierzLayout from '../../components/page_template/SmukierzLayout'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import Card from '../../components/Alumni/AlumniCard'

import Banner from "../../images/17an.jpg"
import Kehidupan from '../../images/kegiatan/STN.jpg'


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
                    img={ Kehidupan } 
                    alt="Kehidupan Selama Menjadi SMUKIERZ" 
                    desc='"Hidup penuh keseimbangan"'
                    title="Kehidupan Selama Menjadi SMUKIERZ" 
                    dir="/smukierz"
                />
                <Card
                    img={ Kehidupan } 
                    alt="Kehidupan Selama Menjadi SMUKIERZ" 
                    desc='"Hidup penuh keseimbangan"'
                    title="Kehidupan Selama Menjadi SMUKIERZ" 
                    dir="/smukierz"
                />
                <Card
                    img={ Kehidupan } 
                    alt="Kehidupan Selama Menjadi SMUKIERZ" 
                    desc='"Hidup penuh keseimbangan"'
                    title="Kehidupan Selama Menjadi SMUKIERZ" 
                    dir="/smukierz"
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
