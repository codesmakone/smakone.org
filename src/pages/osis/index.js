import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Content from '../../components/block/Content'
import Banner from "../../images/banner2.jpg"
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import OSIS from '../../images/pelantikan.jpg'

export default function OsisPage() {
    const title = "Deeper Look Into SMAK 1 Student Council"
    const content = (
        <Content>
            <div className="container mx-auto">
            <KegiatanSection
                title="Tentang Kami"
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
            <h2 className="font-medium text-lg lg:text-5xl mt-12 justify-center text-center">
                Visi Kami
            </h2>
            <p className="justify-center text-center p-2">
                Meningkatkan eksistensi SMAK 1 PENABUR melalui pengembangan prestasi, potensi, dan bakat peserta didik SMAK 1 PENABUR, baik di bidang akademik maupun non-akademik, 
                sekaligus membangun karakter yang berlandaskan iman, ilmu, dan pelayanan, serta mengedepankan pemanfaatan teknologi modern dan terwujudnya cita-cita sekaligus aspirasi warga SMAK 1 PENABUR
            </p>
            <h2 className="font-medium text-lg lg:text-5xl mt-12 justify-center text-center">
                Misi Kami
            </h2>
            <p className="justify-center text-center p-2">
                Memperkenalkan serta memberikan kesempatan bagi seluruh peserta didik untuk menunjukkan kemampuan, talenta, dan hasil karya dalam program yang diadakan OSIS
            </p>
            <p className="justify-center text-center p-2">
                Membantu menjaga kesehatan mental dan kesehatan fisik, serta membangun karakter positif bagi warga SMAK 1 PENABUR
            </p>
            <p className="justify-center text-center p-2">
                Meningkatkan keterampilan dan kesiapan dalam era modern, serta menginspirasi seluruh warga SMAK 1 PENABUR untuk selalu melangkah ke depan
            </p>
            <p className="justify-center text-center p-2">
                Menjawab setiap aspirasi yang telah disampaikan serta merealisasikan dengan baik seluruh program OSIS sebagai bentuk nyata berjalannya OSIS yang penuh tanggung jawab
            </p>
            <p className="justify-center text-center px-2 pt-2 pb-12">
                Menciptakan relasi yang baik dan harmonis antar seluruh warga SMAK 1 PENABUR disertai peran OSIS sebagai penghubungnya
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
