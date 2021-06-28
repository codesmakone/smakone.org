import React from 'react'
import KegiatanList from '../../components/kegiatan/KegiatanList'
import KegiatanLayout from '../../components/page_template/KegiatanLayout'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import OSN from "../../images/kegiatan/osn.jpg"
import Banner from "../../images/bannerKegiatan.jpg"


export default function ScjPage() {
    const title = "Ada Apa Aja Sih di SMAK 1?"
    const content = (
        <div className="container mx-auto"> 
            <KegiatanSection
                title="Science Club"
                subtitle='"Teruslah belajar dan raih prestasi"'
                img={OSN}
                alt="OSN"
            />
            <p className="justify-center text-justify p-2">
            Sebuah komunitas yang memberikan tempat bagi murid SMAK 1 untuk bisa memperdalam ilmu 
            di berbagai bidang sains. Klub ini diharapkan memberikan kesempatan bagi semua murid yang 
            ingin bertanding di ajang Olimpiade Sains tingkat Kabupaten/Kota (OSK) atau yang sekarang 
            lebih dikenal dengan Kompetisi Sains Nasional tingkat Kabupaten/Kota (KSN-K).
            </p>
            <p className="justify-center text-justify p-2">
            Terdapat 9 bidang yang bisa dipilih, yakni Astronomi, Biologi, Ekonomi, Fisika, Geografi, 
            Informatika, Kebumian, Kimia, dan Matematika. Bidang dan materi dalam science club ini 
            tentunya disesuaikan dengan yang dilombakan pada Kompetisi Sains Nasional tingkat 
            Kabupaten/Kota (KSN-K) hingga kompetisi sains di tingkat yang lebih tinggi. Untuk menjadi 
            bagian dari Science Club, siswa-siswi SMAK 1 dapat mendaftarkan diri untuk mengikuti seleksi. 
            Science club diadakan setiap hari Sabtu pada jam 08.00-11.00 WIB.
            </p>
            <p className="justify-center text-justify p-2">
            Setelah menjalani science club selama beberapa bulan, siswa-siswi anggota science club akan 
            diseleksi kembali untuk mengikuti Science Club Jenjang (SCJ). SCJ diikuti oleh siswa-siswi 
            pilihan dari berbagai sekolah PENABUR se-Jabodetabek dengan pengajar baru dan jam 
            pembelajaran yang lebih lama. SCJ diadakan selama beberapa bulan dan selesai pada bulan Maret.
            </p>
            <p className="justify-center text-justify px-2 pt-2 pb-12">
            Hingga saat ini, sudah banyak siswa-siswi SMAK 1 PENABUR berhasil meraih berbagai prestasi di 
            kancah nasional dan internasional. Beberapa siswa yang tersebut ialah Jonwin Fidelis Fam, 
            peraih medali emas di Olimpiade Sains Nasional (OSN) 2019 dan medali perunggu di 
            Global e-Competition on Astronomy and Astrophysics (GeCAA) 2020. Sedangkan Edward Humianto dan 
            Joseph Oliver Lim sama-sama meraih medali emas di Kompetisi Sains Nasional (KSN) 2020 dan 
            medali perak di Asian Physics Olympiad (APhO) 2021.
            </p>
            <div className="pb-5">
                <div className="text-2xl text-left grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-10 px-10">
                    <KegiatanList name="Astronomi" />
                    <KegiatanList name="Biologi" />
                    <KegiatanList name="Ekonomi" />
                    <KegiatanList name="Fisika" />
                    <KegiatanList name="Geografi" />
                    <KegiatanList name="Kebumian" />
                    <KegiatanList name="Kimia" />
                    <KegiatanList name="Komputer" />
                    <KegiatanList name="Matematika" />
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
