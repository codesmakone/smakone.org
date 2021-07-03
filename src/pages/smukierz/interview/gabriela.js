import React from 'react'
import SmukierzLayout from '../../../components/page_template/SmukierzLayout'
import AlumniArticle from '../../../components/alumni/AlumniArticle'

import Gabriela from '../../../images/Card/GabrielaErin.jpg'
import Banner from "../../../images/17an.jpg"

export default function GabrielaPage() {
    const title = "Kehidupan SMUKIERZ"
    const content = (
        <div className="grid grid-cols-1 gap-3 py-5">
            <div className="pb-20">
            <img src={ Gabriela } className="lg:h-96 mx-auto rounded-lg" alt="Gabriela Erin" />
            <h1 className="text-center mt-5 font-bold text-5xl">
                Gabriela Erin
            </h1>
            <p className="text-center mb-8">"Matematikawan dengan puluhan mendali"</p>
            <AlumniArticle>
                Gabriela Erin Mariangel merupakan seorang alumni lulusan tahun 2021 dari  SMAK 1 PENABUR Jakarta yang dikenal atas persembahan prestasinya terutama 
                dalam bidang matematika bagi SMAK 1 PENABUR Jakarta. Setelah lulus SMA,  Erin melanjutkan pendidikannya di  Massachusetts Institute of Technology 
                (MIT), Amerika.
            </AlumniArticle>
            <AlumniArticle>
                Perjalanan prestasi Erin sudah dimulai sejak ia berusia dini. Ketika SD, Erin dikenal sebagai anak yang pintar. Ibunya yang mengetahui kemampuan 
                Erin selalu merasa kurang puas ketika melihat nilai matematika Erin tidak sempurna. Pada akhirnya, Erin mengikuti les matematika dan nilainya 
                berubah menjadi sangat baik. Melihat hasil yang luar biasa, ia diminta oleh gurunya untuk mengikuti Kompetisi Matematika Nalaria Realistik 
                (KMNR) ke-8 ketika ia duduk di bangku kelas empat SD. Saat itu, Erin hanya mencapai final dengan peringkat ke-45. Berselang dua tahun, ia 
                mengikuti tes seleksi untuk mengikuti <i>International Mathematics Contest Singapore (IMCS) 2013</i>. Kali ini, Erin berhasil melewati seleksi 
                dan berhasil meraih medali perak di kompetisi tersebut. 
            </AlumniArticle>
            <AlumniArticle>
                Selama SMA, Erin telah memenangkan tiga belas kompetisi baik di kancah nasional maupun internasional. Beberapa prestasi yang pernah didapat 
                Erin diantaranya adalah medali perak di OSN Matematika 2019 dan medali emas di Lomba Matematika Nasional UGM 2019, medali perunggu di 
                <i>European Girls’ Mathematical Olympiad 2020</i>, medali perak di <i>Bulgaria International Mathematics Competition 2018</i>, <i>Hanoi Open 
                    Mathematics Competition 2019</i>, dan <i>International Olympiad of Metropolises 2019 Moscow</i>. Tetapi, berprestasi dalam akademis tidak 
                    membuat Erin berhenti mengembangkan potensi dirinya secara non-akademis. Erin merupakan salah satu anggota <i>Smukiez Choir</i> (SC) dan <i>Smukiez 
                    Youth Chamber</i> (SYC) selama tiga tahun.
            </AlumniArticle>
            <AlumniArticle>
                Bagi Erin, belajar di SMAK 1 memanglah sulit karena adanya keperluan untuk mengimbangi antara belajar untuk ulangan di sekolah dan belajar 
                untuk lomba yang akan diikuti. Namun, hal itu tidak pernah membuat Erin menyerah. Bahkan, ia selalu merasa termotivasi untuk membanggakan 
                SMAK 1. Hal ini dikarenakan, Erin merasa lingkungan SMAK 1 sangat suportif terhadap hal-hal positif yang dilakukan oleh peserta didiknya. 
                Hal-hal kecil berupa ucapan ‘good luck’ hingga spanduk apresiasi dari guru dan teman-teman layaknya bahan bakar yang memotivasinya untuk 
                berjuang lebih lagi. 
            </AlumniArticle>
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