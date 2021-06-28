import React from 'react'
import { Link } from 'gatsby'
import KegiatanLayout from '../../components/page_template/KegiatanLayout'

import Banner from "../../images/bannerKegiatan.jpg"


export default function DofEPage() {
    const title = "Kegiatan"
    const content = (
        <div className="container mx-auto"> 
            <h2 className="font-medium text-3xl lg:text-5xl mt-12 justify-center text-center">
                The Duke of Edinburgh’s International Award
            </h2>
            <p className="mb-6 justify-center text-center text-lg text-gray-500">
                "Penghargaan bagi kamu yang suka berpetualang sambil mengembangkan kemampuan"
            </p>
            <div className="mb-8 iframe-container">
                <iframe
                    title="The Duke of Edinburgh’s International Award"
                    src="https://www.youtube-nocookie.com/embed/EJWgbe1eWKA" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            <div>
            <p className="justify-center text-justify p-2">
                Penghargaan Internasional Duke of Edinburgh (The Duke of Edinburgh’s International Award) merupakan kerangka pendidikan dan pembelajaran 
                non-formal yang beroperasi di lebih dari 130 wilayah dan negara. Program yang lebih dikenal dengan nama DofE ini dipelopori  oleh 
                Pangeran Philip, Kurt Hahn, dan Lord Hunt pada tahun 1956 di Inggris. Program ini bertujuan untuk membimbing para remaja dalam melalui 
                masa transisi mereka menuju kedewasaan.
            </p>
            <p className="justify-center text-justify p-2">
                Program DofE sudah dirancang dengan baik sehingga kaum muda akan merasa tertantang untuk mengisi masa remaja mereka dengan melakukan 
                aktivitas-aktivitas yang produktif. Berikut merupakan beberapa fitur program DofE:
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Akses Universal
            </h2>
            <p className="justify-center text-justify p-2">
                Organisasi kepemudaan, sekolah, dan lembaga-lembaga lain dapat menjadi pusat penghargaan resmi yang berhak untuk menjalankan program DoFe.
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Non-Kompetitif
            </h2>
            <p className="justify-center text-justify p-2">
                Dalam menjalankan DofE, tidak mengenal istilah “gagal” atau “kalah”. Menunjukkan usaha yang maksimal dan memenuhi persyaratan utama seperti 
                durasi dan merekam aktivitas akan membuat seorang peserta dapat meraih penghargaan mereka.
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Program Yang Seimbang
            </h2>
            <p className="justify-center text-justify p-2">
                Dalam DofE, terdapat tiga tingkat penghargaan , yakni Perunggu (Bronze), Perak (Silver) dan Emas (Gold). Untuk peserta Bronze dan Silver, 
                terbagi menjadi empat sektor kegiatan. Yakni meliputi Pelayanan Masyarakat, Rekreasi Fisik, Skills dan Ekspedisi. Untuk peserta
                 tingkat Gold, wajib melakukan Gold Residential Project untuk melengkapi program tersebut. Setiap peserta dapat memilih sendiri aktivitas 
                 yang dilakukan dalam setiap sektor, sesuai dengan minat dan passion-nya.
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Level Semakin Menantang
            </h2>
            <p className="justify-center text-justify p-2">
                DofE mengajak para pesertanya untuk mau mengembangkan diri masing-masing dengan komitmen. Oleh karena itu, semakin tinggi tingkat penghargaannya, 
                kegiatannya akan memakan lebih banyak durasi dan keterampilan diri.
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Partisipasi Sukarela
            </h2>
            <p className="justify-center text-justify p-2">
                Sebagian besar waktu yang diperlukan untuk melakukan kegiatan harus dilakukan dalam waktu bebas peserta sendiri, sehingga ada kebebasan yang 
                lebih luas untuk mengatur penyelesaian programnya. Tidak ada paksaan sama sekali dalam menjalani kegiatan ini.
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Pengakuan Prestasi
            </h2>
            <p className="justify-center text-justify p-2">
                Adanya komunikasi dan pengakuan langsung dari Pemimpin Penghargaan dan Penilai Aktivitas kepada para peserta dapat menjadi motivasi dalam 
                proses pengembangan diri. Melalui program DofE, diharapkan dapat membuka banyak potensi, bakat, dan kegigihan yang dimiliki  oleh para 
                remaja di seluruh dunia.
            </p>
            <p className="justify-center text-justify px-2 pt-2 pb-12">
                Untuk informasi lebih lanjut, dapat mengunjungi website di https://intaward.org/ atau menghubungi wali kelas masing-masing.
            </p>
            </div>
            <div className="pb-12">
                <div className="text-center">
                    <Link className="text-white btn bg-red-500" target="blank" to="https://intaward.org/">
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
