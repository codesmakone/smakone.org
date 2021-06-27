import React from 'react'
import { Link } from 'gatsby'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import KegiatanLayout from '../../components/page_template/KegiatanLayout'

import Soundscape from '../../images/kegiatan/soundscape.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function SoundscapePage() {
    const title = "Ada Apa Aja Sih di SMAK 1?"
    const content = (
        <div className="container mx-auto"> 
            <KegiatanSection
                title="Soundscape"
                subtitle='"Pertunjukan Spektakuler Di Akhir SOC"'
                img={Soundscape}
            />
            <p className="justify-center text-justify p-2">
                Setelah sepuluh hari penyelenggaraan Smak One Cup (SOC), SMAK 1 akan menutup SOC dengan pertunjukan musik yang bernama 
                Soundscape sebagai puncak acara.
            </p>
            <p className="justify-center text-justify px-2 pt-2 pb-12">
            Soundscape merupakan pertunjukan musik yang diselenggarakan oleh panitia SOC dan terbuka untuk umum. Selama berlangsungnya Soundscape, 
            akan diumumkan pemenang-pemenang dari berbagai lomba yang diadakan saat SOC dan dilengkapi dengan games menarik bagi para penonton. 
            Selain itu,  terdapat penampilan oleh siswa dan artis-artis Indonesia, seperti Isyana Sarasvati (2019), Dipha Barus (2019), Kunto Aji (2019), 
            Tulus (2015), Edho Zell (2015), dan masih banyak lagi. Bagi mereka yang bukan siswa SMAK 1, dapat menonton acara ini dengan membeli tiket secara 
            online ataupun on the spot. Sedangkan, siswa SMAK 1 akan mendapatkan tiket tanpa dikenakan biaya. Panitia berharap agar acara ini menjadi media rekreasi 
            dan hiburan di tengah kesibukan sekolah serta menjadi wadah untuk mengekspresikan bakat siswa-siswi terutama dalam bidang non-akademik. 
            </p>
            <div className="pb-12">
                <div className="text-center">
                    <Link className="text-white btn bg-purple-600" target="blank" to="https://soundscape.id">
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
