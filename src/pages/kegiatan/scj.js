import React from 'react'
import KegiatanList from '../../components/kegiatan/KegiatanList'
import KegiatanLayout from '../../components/page_template/KegiatanLayout'

import Banner from "../../images/bannerKegiatan.jpg"


export default function ScjPage() {
    const title = "Ada Apa Aja Sih di SMAK 1?"
    const content = (
        <div className="container mx-auto"> 
            <div className="pt-5">
                <h2 className="font-medium text-3xl lg:text-5xl mt-12 justify-center text-center mb-5">
                    Science Club
                </h2>
            </div>
            <div className="pb-5">
                <div className="text-2xl text-left grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-10 px-10">
                    <KegiatanList name="Astronomi" />
                    <KegiatanList name="Biologi" />
                    <KegiatanList name="Ekonomi" />
                    <KegiatanList name="Fisika" />
                    <KegiatanList name="Komputer" />
                    <KegiatanList name="Matematika" />
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
