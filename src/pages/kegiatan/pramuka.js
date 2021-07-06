import React from 'react'
import { Link } from 'gatsby'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import KegiatanLayout from '../../components/page_template/KegiatanLayout'

import Pramuka from '../../images/kegiatan/pramuka.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function DofEPage() {
    const title = "Kegiatan"
    const content = (
        <div className="container mx-auto"> 
            <KegiatanSection
                title="PRAMUKA"
                subtitle='"Ambalan Soekarno-Fatmawati Siap!"'
                img={Pramuka}
                alt="Pramuka"
            />
            <p className="justify-center text-justify p-2">
                Pramuka merupakan organisasi non akademik yang juga berfungsi sebagai wadah pendidikan keterampilan dan karakter. 
                Pramuka SMAK 1 PENABUR Jakarta sendiri dibimbing dengan 22 pembina (guru) dan 33 Dewan Ambalan (siswa) yang juga turut 
                serta berpartisipasi dalam beberapa kegiatan sebagai berikut:
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Kegiatan Rutin
            </h2>
            <p className="justify-center text-justify p-2">
                Ekstrakurikuler Pramuka wajib diikuti siswa kelas 10 selama 90 menit setiap hari Rabu seusai sekolah. Materi yang diberikan pun beragam, 
                mulai dari keterampilan dasar ke-Pramukaan seperti, menaksir jarak, tali temali, baris-berbaris, sandi pramuka, hingga keterampilan sehari-hari seperti, 
                public speaking, menanam tanaman hidroponik, daur ulang, kewirausahaan, dan masih banyak lagi. Sedangkan siswa kelas 11 dan kelas 12 hanya diwajibkan untuk 
                mengikuti apel mingguan di kelas masing-masing.
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Baden Powell Challenge
            </h2>
            <p className="justify-center text-justify p-2">
                Baden Powell Challenge merupakan kegiatan yang diadakan untuk siswa kelas 10 dalam memperingati hari Baden Powell sebagai bapak pramuka. Kegiatan ini biasanya 
                dilaksanakan selama 2 pertemuan pada bulan Februari dan diisi dengan banyak games seru seperti permainan post to post yang tentunya mengandung nilai kepramukaan 
                seperti ketangkasan, keterampilan simpul, dan lain-lain. 
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Perjusa (Perkemahan Jumat Sabtu)
            </h2>
            <p className="justify-center text-justify p-2">
                Seperti namanya, Perjusa merupakan kegiatan perkemahan yang biasanya diadakan pada hari Jumat dan Sabtu.  Kegiatan ini diikuti oleh seluruh siswa SMAK 1 PENABUR 
                dan dilaksanakan di sekolah. Berbeda dengan dua kegiatan sebelumnya, kegiatan ini dirancang untuk siswa kelas 10 dan 11 secara terpisah. Pada kegiatan PERJUSA materi 
                kepramukaan yang telah diberikan selama setahun akan diulas kembali dalam bentuk games dan perlombaan.  
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Level Semakin Menantang
            </h2>
            <p className="justify-center text-justify p-2">
                DofE mengajak para pesertanya untuk mau mengembangkan diri masing-masing dengan komitmen. Oleh karena itu, semakin tinggi tingkat penghargaannya, 
                kegiatannya akan memakan lebih banyak durasi dan keterampilan diri.
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Raimuna
            </h2>
            <p className="justify-center text-justify p-2">
                Raimuna merupakan kegiatan perkemahan selama 2 hari yang diadakan seusai penilaian akhir tahun guna membentuk karakter dan memupuk kerja sama antar pelajar. 
                Berbeda dengan kegiatan PERJUSA, raimuna dilaksanakan di luar sekolah dengan siswa dari seluruh PENABUR sebagai pesertanya. Kegiatan yang dilakukan saat berlangsungnya Raimuna, 
                seperti kebersamaan siswa seperti, memasak bersama di tengah perkemahan, talent show, materi P3K, dan api unggun, akan mempererat hubungan antar siswa.
            </p>
            <p className="justify-center text-justify px-2 pt-2 pb-12">
                Untuk info lebih lanjut mengenai kegiatan pramuka dan dewan ambalan dapat mengunjungi instagram @dasmukie atau menghubungi dewan ambalan dan pembina. 
            </p>
            <div className="pb-12">
                <div className="text-center">
                    <Link className="text-white btn bg-red-500" target="blank" to="https://www.instagram.com/dasmukie/">
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
