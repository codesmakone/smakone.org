import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Content from '../../components/block/Content'
import Banner from "../../images/banner2.jpg"
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import OSIS from '../../images/pelantikan.jpg'

export default function OsisPage() {
    const title = "OSIS"
    const content = (
        <Content>
            <div className="container mx-auto">
            <h1 className="justify-center text-center p-2 font-medium text-5xl mb-5">
                Tentang Kami
            </h1>
            <KegiatanSection
                img={OSIS}
                alt="Pelantikan OSIS"
            />
            <p className="justify-center text-justify p-2">
                OSIS SMAK 1 merupakan satu-satunya organisasi resmi di SMAK 1 PENABUR Jakarta. 
                Sejak awal dibentuk, kami selalu dituntut untuk membuat salah satu sekolah terbaik di Indonesia menjadi lebih baik lagi. 
                Dengan satu tim, satu visi, dan satu misi, OSIS SMAK 1 mengarah ke arah yang benar dengan segudang prestasi termasuk menyelenggarakan ajang <i>SMAK ONE CUP setiap</i> tahunnya. 
                Jalan yang akan dilewati bebas dari hambatan untuk OSIS SMAK 1 terus melebarkan sayapnya. 
            </p>
            <br />
            <h2 className="font-medium text-3xl mt-12 justify-center text-center">
                Visi Kami
            </h2>
            <p className="justify-center text-center p-2">
                Menjadikan SMAK 1 PENABUR Jakarta sebagai wadah bagi siswa-siswi untuk mengembangkan potensi dan prestasi, baik secara akademik maupun non-akademik yang berlandaskan pada iman, ilmu, 
                pelayanan dan menjadikan OSIS sebagai sarana untuk menampung inspirasi, aspirasi, serta kreasi siswa.
            </p>
            <p className="justify-center text-center p-2">
                Meningkatkan partisipasi siswa-siswi SMAK 1 PENABUR Jakarta dalam berbagai program yang edukatif, kreatif dan inovatif, serta dapat menjalar masyarakat luar, sehingga siswa-siswi SMAK 1 
                dapat menjadi berkat, baik bagi internal maupun eksternal.
            </p>
            <h2 className="font-medium text-3xl mt-12 justify-center text-center">
                Misi Kami
            </h2>
            <p className="justify-center text-center p-2">
                Memberikan kesempatan seluas-luasnya bagi seluruh peserta didik untuk melakukan pengembangan bakat dan minat melalui program-program yang diadakan OSIS.
            </p>
            <p className="justify-center text-center p-2">
                Membuka ruang terbuka bagi peserta didik SMAK 1 untuk bergerak dan berkontribusi secara konkret dalam pelestarian lingkungan hidup.    
            </p>
            <p className="justify-center text-center p-2">
                Membangun kesadaran peserta didik SMAK 1 untuk berpartisipasi dalam kegiatan-kegiatan yang berorientasi kepada masyarakat, sehingga dapat memberikan dampak yang lebih luas.
            </p>
            <p className="justify-center text-center p-2">
            Mengoptimalisasikan kualitas SDM SMAK 1 melalui restorasi organisasi yang disruptif serta pengembangan program yang sudah ada dengan evaluasi secara berkala.
            </p>
            </div>
        </Content>
    )
    return (
        <OsisLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}
