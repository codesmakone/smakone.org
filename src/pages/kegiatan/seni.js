import React from 'react'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import KegiatanList from '../../components/kegiatan/KegiatanList'
import KegiatanLayout from '../../components/page_template/KegiatanLayout'

import Seni from '../../images/kegiatan/Seni.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function SeniPage() {
    const title = "Ada Apa Aja Sih di SMAK 1?"
    const content = (
        <div className="container mx-auto"> 
            <KegiatanSection
                title="Seni"
                subtitle='"Ekspresikan dirimu lewat cara yang mempesona"'
                img={Seni}
            />
            <div className="pb-5">
                <div className="text-2xl text-left grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-10 px-10">
                    <KegiatanList name="Animasi" />
                    <KegiatanList name="Bahasa Korea" />
                    <KegiatanList name="Beauty Class" />
                    <KegiatanList name="Fotografi" />
                    <KegiatanList name="Manga" />
                    <KegiatanList name="Master of Ceremony" />
                    <KegiatanList name="Mini Orchestra" />
                    <KegiatanList name="Paduan Suara" />
                    <KegiatanList name="Teater" />
                    <KegiatanList name="Web Design" />
                </div>
            </div>
        </div>
    )
    return (
        <KegiatanLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}
