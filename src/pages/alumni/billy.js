import React from 'react'
import AlumniLayout from '../../components/page_template/AlumniLayout'
import AlumniArticle from '../../components/alumni/AlumniArticle'

import BillyStevanus from '../../images/Card/BillyStevanus.jpg'
import Banner from "../../images/bannerAlumni.jpg"

export default function BillyPage() {
    const title = "Alumni Kami"
    const content = (
        <div className="grid grid-cols-1 gap-3 py-5">
            <div>
            <img src={ BillyStevanus } className="lg:h-96 mx-auto rounded-lg" alt="Billy Stevanus" />
            <h1 className="text-center mt-5 font-bold text-5xl">
                Billy Stevanus
            </h1>
            <p className="text-center mb-8">"Alumni yang selalu aktif dan bersemangat"</p>
            <AlumniArticle>
                Billy Stevanus, salah satu alumni SMAK 1 yang identik dengan ‘aktif’ dan ‘bersemangat’ yang lulus pada tahun 2016. 
                Setelah lulus dari SMAK 1, ia melanjutkan pendidikannya di fakultas <i>Communication Science</i> Universitas Pelita Harapan (UPH) dengan jurusan <i>Broadcast and Journalism</i>. 
                Billy bekerja sebagai MC profesional untuk acara-acara seperti konser, <i>talkshow</i>, pesta <i>sweet 17</i>, dan berbagai acara lainnya. 
            </AlumniArticle>
            <AlumniArticle>
                Selama 3 tahun bersekolah di SMAK 1, Billy aktif dalam organisasi dan kegiatan-kegiatan sekolah. 
                Ia menjadi anggota Shutterone, divisi konten dan dokumentasi digital SMAK 1. Tidak hanya itu, Billy juga bergabung dalam tim KR1ZA futsal. 
                Pada tahun terakhirnya di SMAK 1, ia menjadi kapten tim KR1ZA futsal dan berhasil meraih juara 2 di acara SmakOneCup (SOC).
            </AlumniArticle>
            <AlumniArticle>
                Dalam bidang akademis, Billy menganggap dirinya biasa saja. “Jadi, memang <i>gak</i> terlalu menonjol karena menurut aku, aku bingung apa yang mesti ditonjolin. 
                Toh, semua anak di Smuki udah pinter-pinter juga gitu. Jadi, aku memutuskan untuk menonjol di bidang lain,” ucapnya. 
                Karena Billy mengetahui bahwa bersekolah di SMAK 1 bukanlah hal yang mudah, ia selalu mengingat suatu kutipan, yaitu “<i>It’s not going to be easy, but it’s going to be worth it.</i>” 
                Ini tidak akan menjadi hal yang mudah, tetapi menjadi hal yang setimpal.  
            </AlumniArticle>
            <AlumniArticle>
                Perjalanan Billy untuk menempuh pendidikan di SMUKI sangat berkesan baginya. Ia dapat bertemu dan berteman dengan banyak orang hebat serta memperluas lingkaran sosialnya. 
                “Enaknya adalah di Smuki kalo misalnya kamu bisa menyesuaikan diri, kamu bisa bergaul, kamu bisa menjadi orang yang menyenangkan. 
                Di Smuki itu setelah lulus, kamu bukan jadi pintar doang. Tapi, kamu mempunyai jaringan pertemanan yang luas. Itu sangat penting buat aku,” jelas Billy.
            </AlumniArticle>
            <AlumniArticle>
                Menurut Billy, bersekolah di SMAK 1 tidak lepas dari tantangan. Bahkan, setiap ulangan juga merupakan ‘struggle’. 
                Walaupun Billy memiliki target untuk lulus, ia tidak pernah melupakan kebahagiaannya sendiri. 
                Waktu luang biasa ia gunakan untuk bertemu dengan teman-temannya, terutama apabila ada acara <i>sweet 17</i>. 
                Selain itu, tentunya ia juga meluangkan waktu untuk melakukan hobinya, yaitu bermain futsal. 
                “<i>Everyday is a struggle,</i>” katanya, setiap hari adalah tantangan. 
                “Tapi, bagaimana cara kita bisa manage itu semua, bagaimana cara kita bisa kembang itu semua supaya aku <i>ga</i> ketinggalan masa muda untuk <i>happy</i>.”
            </AlumniArticle>
            <p className="pt-5 pb-20 text-gray-500 text-2xl mx-8 text-center">
                "Kalian semua anak pintar, kalian semua anak yang beruntung bisa mendapatkan satu tempat di sekolah terbaik di Indonesia, bukan cuman di Jakarta. Berjuang, jadi yang terbaik. 
                Saling kompetisi itu hal yang baik menurut aku, tapi jangan lupakan sisi lain kehidupan kamu, karena kehidupan kamu bukan cuman belajar, belajar, belajar, tapi juga jangan lupa mengembangkan <i>networking</i>, 
                jangan lupa mengembangkan <i>experience</i> karena sekolah itu masalah 3 aspek menurut aku. Satu, <i>knowledge</i>, yang kedua, <i>experience</i>, yang ketiga, <i>networking</i>. 
                Kalo ada satu aja yang ketinggalan menurut aku ada yang kurang dari masa SMA kamu. Jangan lupa untuk bersenang-senang."<br/>
                - Billy
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