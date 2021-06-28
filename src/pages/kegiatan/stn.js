import React from 'react'
import { Link } from 'gatsby'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import KegiatanLayout from '../../components/page_template/KegiatanLayout'

import STN from '../../images/kegiatan/STN.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function StnPage() {
    const title = "Ada Apa Aja Sih di SMAK 1?"
    const content = (
        <div className="container mx-auto"> 
            <KegiatanSection
                title="SMUKIEZ Theater Night"
                subtitle='"Saat berbagai seni dipadukan dan menghasilkan sebuah karya yang memukau"'
                img={STN}
                alt="STN"
            />
            <p className="justify-center text-justify p-2">
                Smukiez Theater Night (STN) adalah sebuah pertunjukan seni yang ditampilkan oleh murid-murid teater untuk siswa-siswi SMAK 1 PENABUR. 
                STN merupakan wadah bagi siswa-siswi SMAK 1 untuk dapat berkarya dan mengembangkan kreativitas dalam bidang kesenian. STN diadakan satu tahun sekali.  
            </p>
            <p className="justify-center text-justify px-2 pt-2 pb-12">
            Puncak acara STN adalah pertunjukan dari MASK, klub teater SMAK 1. Namun diluar itu, STN juga dimeriahkan oleh berbagai pertunjukan lainnya, 
            seperti Crescendo tim band SMAK 1, serta pertunjukan tarian dari Serenity dan First.
            </p>
            <div className="pb-12">
                <div className="text-center">
                    <Link className="text-white btn bg-black"target="blank" to="https://stn.smakone.org">
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
