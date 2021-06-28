import React from 'react'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
// import KegiatanList from '../../components/kegiatan/KegiatanList'
import KegiatanLayout from '../../components/page_template/KegiatanLayout'

import ONECAST from '../../images/kegiatan/onecast.png'

import Banner from "../../images/bannerKegiatan.jpg"


export default function OnecastPage() {
    const title = "Ada Apa Aja Sih di SMAK 1?"
    const content = (
        <div className="container mx-auto"> 
            <KegiatanSection
                title="ONECAST"
                subtitle='"Perluas wawasanmu!"'
                img={ONECAST}
                alt="ONECAST"
            />
            <p className="justify-center text-justify p-2">
                ONECAST merupakan podcast resmi dari OSIS SMAK 1 PENABUR Jakarta, yang dibawakan  
                oleh peserta didik SMAK 1. Podcast ini dapat didengarkan secara gratis di Spotify oleh siapa 
                saja. Topik-topik yang akan dibahas dalam setiap podcast akan beragam dan bergantung pada 
                tema besar dari masing-masing bidang OSIS. Setiap bulan akan ada sepuluh(10) episode baru 
                melihat suatu masalah dari perspektif yang berbeda.
            </p>
            <p className="justify-center text-justify p-2">
            Jadwal pengunggahan setiap episode akan bergantung pada masing-masing bidang OSIS. Bagi 
            siswa-siswi SMAK 1 yang ingin menjadi bagian dari ONECAST, dapat mendaftarkan diri di awal 
            tahun ajaran dengan periode kerja 1 tahun.  
            </p>
        </div>
    )
    return (
        <KegiatanLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}