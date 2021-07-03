import React from 'react'
import { Link } from 'gatsby'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import KegiatanLayout from '../../components/page_template/KegiatanLayout'

import SOC from '../../images/kegiatan/SOC.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function SmakonecupPage() {
    const title = "Ada Apa Aja Sih di SMAK 1?"
    const content = (
        <div className="container mx-auto"> 
            <KegiatanSection
                title="Smakeonecup"
                subtitle='"Acara tahunan yang penuh sinar matahari, keringat, dan kejutan"'
                img={SOC}
                alt="Smakonecup"
            />
            <p className="justify-center text-justify p-2">
                Smakonecup  atau yang biasa disingkat SOC adalah sebuah acara tahunan yang berisikan lomba-lomba akademik dan non-akademik antar 
                sekolah yang diselenggarakan oleh SMAK 1 PENABUR Jakarta. Acara ini biasanya diadakan di bulan Oktober dan berlangsung selama 10 
                hari. Smakonecup pertama kali diadakan pada tahun 1995, jadi acara ini sudah dilakukan oleh 26 generasi murid SMAK 1. Dalam acara 
                ini, terdapat lomba akademis seperti lomba Matematika, IPA, dan Bahasa Inggris untuk SMP dan debat bagi SMA. Sedangkan lomba 
                non-akademis berupa lomba olahraga, musik, seni, dan PASKIBRA untuk tingkat SMA.
            </p>
            <p className="justify-center text-justify p-2">
                SOC diselenggarakan dengan tujuan sebagai wadah bagi peserta didik SMAK 1 dan juga sekolah-sekolah lainnya untuk menyalurkan 
                kemampuan mereka di bidang akademik dan non akademik, serta sebagai upaya mempererat hubungan SMAK 1 dengan sekolah lain. 
                Selain itu, SOC juga dapat menjadi tempat generasi muda mengembangkan potensi diri mereka secara luas dan mendalam.	 
            </p>
            <p className="justify-center text-justify px-2 pt-2 pb-12">
                Acara ini diorganisir oleh panitia siswa yang telah dibentuk 9 bulan sebelum SOC berlangsung. Panitia lomba yang berjumlah 
                sekitar 150 orang ini, bertugas untuk menangani semua persiapan lomba, mulai dari mengumpulkan peserta lomba, merinci kegiatan lomba, 
                hingga mencari dana. Peserta didik yang berminat untuk menjadi bagian dari kepanitiaan SOC harus mendaftarkan diri terlebih dahulu 
                di bidang yang diminati, dan selanjutnya akan menjalani proses seleksi panitia, sebelum akhirnya dapat bekerja di bidangnya 
                masing-masing. Tentunya setiap panitia akan diberikan sertifikat resmi dari sekolah ketika acara sudah selesai. Bukan hanya itu, 
                kenangan yang melekat selamanya juga akan dirasakan oleh semua orang yang berpartisipasi dalam Smakonecup ini. 
            </p>
            <div className="pb-12">
                <div className="text-center">
                    <Link className="text-white btn bg-purple-soc" target="blank" to="https://cup.smakone.org">
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
