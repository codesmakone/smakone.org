import React from 'react'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import KegiatanList from '../../components/kegiatan/KegiatanList'
import KegiatanLayout from '../../components/page_template/KegiatanLayout'

import KR1ZA from '../../images/kegiatan/KR1ZA.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function Kr1zaPage() {
    const title = "Ada Apa Aja Sih di SMAK 1?"
    const content = (
        <div className="container mx-auto"> 
            <KegiatanSection
                title="KR1ZA"
                subtitle='"Terus berlatih dan raih prestasi"'
                img={KR1ZA}
                alt="KR1ZA"
            />
            <p className="justify-center text-justify p-2">
                Terdapat berbagai ekskul dan klub olahraga yang bisa diikuti siswa-siswi SMAK 1. Mulai dari basket, voli, futsal, hingga catur, dan masih banyak lagi. 
                Klub olahraga di SMAK 1 sendiri biasa dikenal dengan nama KR1ZA. Sudah banyak murid SMAK 1 yang berhasil meraih juara. 
                Salah satu pencapaiannya adalah KR1ZA Basket Putri yang berhasil mendapatkan juara 1 di DBL Putri 2019. 
            </p>
            <p className="justify-center text-justify px-2 pt-2 pb-12">
                Untuk dapat menjadi anggota KR1ZA sendiri, terdapat seleksi yang harus diikuti. Sebaliknya, siapa pun bisa mengikuti ekskul untuk memperdalam dan melatih kemampuannya dalam olahraga pilihan. 
            </p>
            <div className="pb-12">
                <div className="text-2xl text-left grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-10 px-10">
                    <KegiatanList name="Basket" />
                    <KegiatanList name="Bulutangkis" />
                    <KegiatanList name="Catur" />
                    <KegiatanList name="Futsal" />
                    <KegiatanList name="Pencak Silat" />
                    <KegiatanList name="Tenis Meja" />
                    <KegiatanList name="Voli" />
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
