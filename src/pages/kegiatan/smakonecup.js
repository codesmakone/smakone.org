import React from 'react'
import { Link } from 'gatsby'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import KegiatanLayout from '../../components/page_template/KegiatanLayout'

import SOC from '../../images/kegiatan/SOC.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function SmakonecupPage() {
    const title = "Ada Apa Aja Sih di SMAK 1?"
    const content = (
        <div className="container mx-auto"> 
            <KegiatanSection
                title="Smakeonecup"
                subtitle='"Acara tahunan yang penuh sinar matahari, keringat, dan kejutan"'
                img={SOC}
                alt="Smakonecup"
            />
            <p className="justify-center text-justify p-2">
                Banyak orang mengira di SMAK 1 itu hanya belajar, belajar, dan belajar. Memang benar sih kami banyak belajar, 
                tetapi belajarnya bukan hanya dalam bidang akademis. Dalam bidang non-akademis kami juga banyak belajar, loh. 
                SMAK 1 menyediakan berbagai club, ekstrakulikuler, banyak acara menarik seperti SMAK ONE CUP, dan sebagainya. 
            </p>
            <p className="justify-center text-justify p-2">
                Pertama, mengenai club di SMAK 1 PENABUR. Club di SMUKI itu sangat beragam dimulai dari club graphic design Monograph, 
                jurnalistik PENS1L, mini orchestra Smukiez Youth Chamber, band Cressendo, Smukiez Wind Ensemble, SMUKIEZ Choir, 
                English Debate Society, ONE Model United Nations, contemporary dance SEREN1TY, modern Dance F1RST, pramuka (siswa juga 
                bisa berpartisipasi menjadi dewan ambalan dan mengurus acara seperti PERJUSA, Raimuna, dan sebagainya), PMR, PASKIBRAKA 
                Flash One, club fotografi, Shutter One, radio club ONE FM yang mengisi jam istirahat warga sekolah dengan lagu-lagu 
                seru dan berita-berita terbaru dunia setiap dua minggu sekali, teater MASK yang tampil ketika Smukiez Theather Night 
                dan acara SMAK 1 lainnya, serta club olahraga KR1ZA yang terdiri dari bulutangkis, futsal, basket, voli, tenis meja, 
                dan banyak olahraga lainnya. Dengan banyaknya club yang disediakan, siswa-siswi dapat menikmati hobi bersama kawan-kawan 
                yang memiliki interest dalam bidang yang sama. 
            </p>
            <p className="justify-center text-justify px-2 pt-2 pb-12">
                Kedua, SMUKI juga menyediakan banyak ekstrakulikuleer menarik seperti bahasa korea, manga, animation, web design, 
                multimedia, master of ceremony, business plan, kolintang, pencak silat, dan lain sebagainya. Adapun pilihan ekskur 
                dapat berganti dari tahun ke tahun menyesuaikan dengan pihak sekolah. 
            </p>
            <div className="pb-12">
                <div className="text-center">
                    <Link className="text-white btn bg-purple-soc" target="blank" to="https://cup.smakone.org">
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
