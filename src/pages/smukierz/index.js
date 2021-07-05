import React from 'react'
import SmukierzLayout from '../../components/page_template/SmukierzLayout'

import Banner from "../../images/17an.jpg"

/*import LifeAtSMAKONE from "../../images/LifeatSmakone.mp4"*/


export default function KehidupanPage() {
    const title = "Kehidupan SMUKIERZ"
    const content = (
        <div className="container mx-auto"> 
            <h2 className="font-medium text-3xl lg:text-5xl mt-12 justify-center text-center">
                Kehidupan Selama Menjadi SMUKIERZ
            </h2>
            <p className="mb-6 justify-center text-center text-lg text-gray-500">
                "Hidup penuh keseimbangan"
            </p>
            <div className="mb-8 iframe-container">
                <iframe
                    src="https://www.youtube.com/embed/XifGVzIuT_I"
                    title="Life at SMAKONE"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div>
                <p className="justify-center text-justify p-2">
                    SMAK 1 PENABUR Jakarta identik dengan siswa-siswi yang sibuk, tugas yang menumpuk dan ulangan-ulangan yang sulit. Tidak dipungkiri bahwa 
                    keseharian seorang siswa SMAK 1 dipenuhi dengan berbagai macam kegiatan dan aktivitas akademis maupun non-akademis. Meskipun demikian, 
                    kenangan dan momen tersebut sangatlah berkesan dan tak terlupakan. Lalu, bagaimana kehidupan sehari-hari siswa-siswi SMAK 1?
                </p>
                <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                    Akademis
                </h2>
                <p className="justify-center text-justify p-2">
                    Dalam satu hari, terdapat 9-10 jam pelajaran yang masing-masing berdurasi 45 menit. Mata pelajaran setiap harinya bervariasi dan dapat 
                    disesuaikan dengan minat kita, misalnya seni (tari, rupa, vokal, dan musik) dan lintas minat (Jerman, Jepang, Mandarin, Ekonomi, Inggris, 
                    dan Informatika). Selain itu, fasilitas-fasilitas di SMAK 1 seperti laboratorium hingga lapangan olahraga memungkinkan siswa-siswinya untuk  
                    dapat memahami topik pembelajaran dengan maksimal.
                </p>
                <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                    Organisasi dan Kepanitiaan
                </h2>
                <p className="justify-center text-justify p-2">
                    Di SMAK 1, terdapat berbagai jenis organisasi dan kepanitiaan dengan tujuan soft skill yang berbeda. Melalui OSIS, Dewan Ambalan, Panitia 
                    Smakonecup, Peer Educator dan  organisasi lainnya, kita dapat mengasah minat dan bakat di berbagai macam bidang. Dengan berperan aktif dalam 
                    organisasi sekolah, akan sangat membantu siswa-siswi untuk mengembangkan potensi diri dan memperluas relasi di lingkungan sekolah.
                </p>
                <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                    Ekstrakurikuler
                </h2>
                <p className="justify-center text-justify p-2">
                    Ekstrakurikuler di SMAK 1 sangat bervariasi, mulai dari bahasa Korea, animasi, mini orkestra, manga, web design, business plan, beauty class, 
                    dan masih banyak lagi. Melalui ekstrakurikuler ini, siswa-siswi dapat mengembangkan minat dan bakat masing - masing sekaligus berfungsi 
                    sebagai sarana penyegaran setelah belajar.
                </p>
                <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                    Waktu Istirahat
                </h2>
                <p className="justify-center text-justify pb-12">
                    Setelah menjalani jam pelajaran yang panjang dan menguras tenaga, siswa-siswi dapat menghabiskan waktu istirahatnya di area kantin. Ada berbagai 
                    stall yang menjual makanan dan minuman yang bervariasi, mulai dari yang manis, pedas, hingga panas dan dingin. Berbagai tanaman yang menghiasi 
                    kantin, menciptakan suasana yang rindang dan asri.
                </p>
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
