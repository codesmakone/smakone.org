import React from 'react'
import AlumniLayout from '../../components/page_template/AlumniLayout'
import AlumniArticle from '../../components/alumni/AlumniArticle'

import Nicole from '../../images/Card/NicoleCharlene.jpg'
import Banner from "../../images/bannerAlumni.jpg"

export default function NicolePage() {
    const title = "Alumni Kami"
    const content = (
        <div className="grid grid-cols-1 gap-3 py-5">
            <div>
            <img src={ Nicole } className="h-96 mx-auto rounded-lg" alt="Nicole" />
            <h1 className="text-center mt-10 mb-8 font-bold text-5xl">
                Nicole Charlene
            </h1>
            <AlumniArticle>
                Nicole Charlene merupakan lulusan tahun 2020 dari SMAK 1 PENABUR JAKARTA yang  telah memenangkan lebih dan 30 lomba pada skala lokal hingga nasional 
                dalam waktu singkatnya di SMUKI. Setelah lulus dari SMAK 1, Ia melanjutkan pendidikannya di Fakultas Hubungan Internasional Universitas Leiden, 
                Belanda.
            </AlumniArticle>
            <AlumniArticle>
                Meskipun telah lulus, ia tetap sibuk dengan berbagai aktivitas, terutama mempersiapkan diri untuk universitas melalui membaca buku, ucap Nicole. 
                Selama Ini, ia juga menjadi  bagian dari Sebuah Lembaga Swadaya Masyarakat @Selflovewarrior.id. Menurut Nicole, pengalaman menjadi bagian dari 
                <i>Self Love Warrior</i> sangat bermakna baginya karena telah memberinya kesempatan untuk berbicara dan menyebarkan dukungan terhadap kesehatan 
                mental di berbagai seminar, panel, dan radio yang bisa menjangkau banyak orang di luar sana. 
            </AlumniArticle>
            <AlumniArticle>
                Menurut Nicole, hal terpenting yang ia dapat selama bersekolah di SMAK 1 adalah disiplin. Pelajaran yang begitu sulit serta lingkungan yang 
                kompetitif membuatnya terdorong untuk selalu berusaha lebih dari kemampuannya.  
            </AlumniArticle>
            <AlumniArticle>
                Tidak hanya belajar, waktunya di SMUKI juga diisi dengan mengikuti ekskul MUN dan EDS. Banyak sekali pelajaran yang ia dapat dari kedua ekskul 
                ini, mulai dari public speaking, research, cara ia merangkai pikiran - pikiranya dan yang paling penting menurutnya adalah pertemanan. 
                Kegiatan - kegiatan ekskulnya telah membawanya bertemu dan membangun koneksi dengan banyak sekali orang diluar SMAK 1.
            </AlumniArticle>
            <AlumniArticle>
                Bagi Nicole, Kesulitan terbesar yang ia  dihadapi saat di SMUKI adalah bagaimana caranya menyeim bangkan nilai, pertemanan dan kegiatan ekskulnya. 
                Ia mendapat sebuah pesan dari seorang guru SMAK 1 yang sangat berdampak baginya. Beliau mengatakan kepadanya bahwa memang tidak semua materi 
                pelajaran akan berguna kelak kemudian hari. Namun, tetaplah untuk semangat belajar karena pada akhirnya, setiap siswa membutuhkan nilai untuk 
                menempuh universitas.
            </AlumniArticle>
            <p className="pt-5 pb-20 text-gray-500 text-2xl mx-8 text-center">
                "Aku merasa nilai akademisku kurang dan bisa melakukan lebih baik lagi, tetapi pada akhirnya semua itu tidak apa-apa."<br/>
                - Nicole 
            </p>
            </div>
        </div>
    )
    return (
        <AlumniLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}