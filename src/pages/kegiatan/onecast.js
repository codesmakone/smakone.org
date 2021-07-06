import React from 'react'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import {Link} from 'gatsby'
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
            <div className="pb-12 pt-12">
                <div className="text-center">
                    <Link className="text-white btn bg-yellow-400" target="blank" to="https://open.spotify.com/show/19z2XBIe5VEyAx0UvhdTZe?si=HOok4DrNS-O1YKHXb4yceA&dl_branch=1">
                        Kenali Lebih Lanjut {">"}
                    </Link>
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