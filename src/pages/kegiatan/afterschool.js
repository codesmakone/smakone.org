import React from 'react'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import KegiatanLayout from '../../components/page_template/KegiatanLayout'

import afterschool from '../../images/kegiatan/afterschool.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function MUNEDSPage() {
    const title = "Kegiatan"
    const content = (
        <div className="container mx-auto"> 
            <KegiatanSection
                title="KEGIATAN SMUKIERZ SETELAH KELAS"
                subtitle='"Produktivitas dan istirahat yang seimbang"'
                img={afterschool}
                alt="Tari"
            />
            <p className="justify-center text-justify p-2">
                Bel pulang sekolah berbunyi, menandakan selesainya segala kegiatan belajar mengajar di sekolah. Bagi beberapa siswa-siswi, 
                istirahat usai sekolah merupakan suatu hal yang dapat menyegarkan pikiran dan waktu untuk melakukan kegiatan yang diinginkan. 
                Tetapi, apakah yang biasanya <i>smukierz</i> lakukan?
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Berorganisasi di sekolah
            </h2>
            <p className="justify-center text-justify p-2">
                Pembelajaran dalam organisasi mengambil peran yang sangat penting dalam kehidupan peserta didik. Apalagi, peserta didik juga 
                dapat melatih kerja sama, toleransi, mengembangkan sikap kepemimpinan dan manajemen waktu melalui organisasi. SMAK 1 PENABUR 
                menyediakan wadah-wadah organisasi, seperti OSIS, Dewan Ambalan (pramuka), Shutterone (tim dokumentasi), Monograph (tim desain 
                grafis), dan masih banyak lagi. Ketersediaannya variasi pilihan organisasi sekolah memberikan kebebasan bagi peserta didik 
                untuk memilih organisasi sesuai minat dan kemampuan diri. Selain itu, siswa juga akan mendapatkan pengalaman-pengalaman 
                exquisite, seperti SMAK 1 Cup, Smukiez Theatre Night, dan event-event lain yang tidak dapat terlupakan. 
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Mengembangkan Minat dan Bakat
            </h2>
            <p className="justify-center text-justify p-2">
                Kesibukan akademis memanglah keseharian dari seorang peserta didik. Namun, setelah semua kesibukan selesai, mengembangan minat 
                dan bakat juga penting sebagai suatu upaya untuk memperkuat potensi diri. Di SMAK 1 PENABUR, siswa dapat menyalurkan hobi, minat 
                dan bakatnya melalui ekstrakurikuler dan club di sekolah. Dengan bimbingan dan arahan yang tepat, siswa dapat mengembangkan 
                potensi diri di bawah sebuah komunitas sebagai inspirasi untuk meningkatkan kapasitas dan mengasah kreativitas mereka. 
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Beristirahat di Rumah
            </h2>
            <p className="justify-center text-justify p-2">
                Usai melalui hari yang panjang, beristirahat merupakan pilihan yang bijak untuk menjaga kesehatan. Sebagai peserta didik SMAK 1, 
                belajar memanglah yang utama. Tetapi, terkadang berhenti sejenak untuk menyegarkan diri dari kesibukan akan memberikan hasil yang 
                lebih memuaskan. 
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Mencari Hiburan dan Bersantai Sejenak
            </h2>
            <p className="justify-center text-justify p-2">
                Lokasi yang strategis membuat SMAK 1 PENABUR dekat dengan tempat berkumpul. Tempat terdekat seperti Family Mart, Richeese, 
                Fore, serta Starbucks kerap dipenuhi peserta didik SMAK 1 usai sekolah. Baik untuk sekedar makan ataupun belajar bersama 
                teman. Selain itu, tidak jarang juga peserta didik mengunjungi mall terdekat seperti, Central Park dan Taman Anggrek untuk 
                mencari hiburan bersama teman dan mengisi ulang energi seusai sekolah.
            </p>
            <p className="justify-center text-justify px-2 pt-2 pb-12">
                Melalui setiap kegiatan yang kerap dilakukan peserta didik SMAK 1, kegiatan-kegiatan 
                yang dilakukan sebuah ekspresi yang digunakan siswa-siswi untuk melepas 	
                diri dari kesibukan diri. Baik beristirahat, berorganisasi, maupun berkumpul bersama 
                teman, sangat disarankan bagi siswa-siswi untuk memilih kegiatan yang tepat untuk 
                menyegarkan diri setelah menjalani hari yang melelahkan.
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
