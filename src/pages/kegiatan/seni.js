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
                alt="Seni"
            />
             <p className="justify-center text-justify p-2">
                Didukung dengan fasilitas yang memadai, klub dan ekskul di bidang seni dan musik SMAK 1 PENABUR menyediakan wadah dan komunitas untuk mendukung perkembangan peserta didik yang memiliki minat untuk menjelajahi jiwa kreasinya. 
                Dengan bimbingan yang tepat dan berkualitas, siswa-siswi dengan potensi besar dapat merasakan kesempatan untuk bertanding pada kompetisi musik dan seni bergengsi baik tingkat nasional maupun internasional. 

            </p>
            <p className="justify-center text-justify px-2 pt-2 pb-12">
                Beberapa contoh pilihan ekskul dan klub yang menjadi favorit peserta didik, yaitu F1RST (tari), SEREN1TY (Tari), <i>Smukiez Choir</i> (Paduan Suara), CRESSENDO (Band), MASK (Drama), <i>Smukiez Youth Chamber</i> (Mini Orchestra), Manga, dan ShutterOne (Fotografi). 
                Untuk bergabung dalam klub atau ekskul pilihan, beberapa akan mengadakan seleksi pada awal tahun ajaran baru. Masing-masing klub dan ekskul akan mengadakan proses seleksi yang dapat berupa audisi atau/dan wawancara yang bertujuan untuk mengetahui kemampuan dasar serta kepribadian peserta audisi.
            </p>
            <p className="justify-center text-justify px-2 pt-2 pb-12">
                Secara akumulatif, klub dan ekskul di SMAK 1 PENABUR Jakarta telah mengantarkan nama baik SMAK 1 dalam kancah daerah, nasional, maupun internasional. 
                Selain itu, keberadaan klub dan ekskul juga dapat digunakan sebagai media bagi siswa-siswi untuk mengembangkan berbagai kemampuan non-akademis dan nilai-nilai organisasi.
            </p>
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
