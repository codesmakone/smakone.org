import React from 'react'
import KegiatanList from '../../components/kegiatan/KegiatanList'
import KegiatanLayout from '../../components/page_template/KegiatanLayout'

import Banner from "../../images/bannerKegiatan.jpg"


export default function LainnyaPage() {
    const title = "Ada Apa Aja Sih di SMAK 1?"
    const content = (
        <div className="container mx-auto"> 
            <div>
                <h2 className="font-medium text-3xl lg:text-5xl mt-12 justify-center text-center mb-5">
                    Ekstrakulikuler Lainnya
                </h2>
            </div>
            <div className="pb-5">
                <div className="text-2xl text-left grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-10 px-10">
                    <KegiatanList name="Business Plan" />
                    <KegiatanList name="English Debate Society (EDS)" />
                    <KegiatanList name="Jurnalistik" />
                    <KegiatanList name="Multimedia" />
                    <KegiatanList name="Model United Nation" />
                    <KegiatanList name="Palang Merah Remaja" />
                    <KegiatanList name="Paskibra" />
                    <KegiatanList name="Youth Christian Community" />
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
