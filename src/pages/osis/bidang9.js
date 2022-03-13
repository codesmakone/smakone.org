import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import Amanda from '../../images/team/amanda.jpg'
import ferdinand from '../../images/team/Ferdinand.jpg'
import enrichie from '../../images/team/enrichie.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK)</b></h1>
                <div>
                    <Osis
                        img={ ferdinand } 
                        title="Ferdinand" 
                        desc="Halo semua, perkenalkan aku Ferdinand, anggota OSIS Bidang 9. aku lahir dan besar di Jakarta dan aku sangat menyukai hal-hal yang berhubungan dengan Fisika dan Astronomi. Jadi, bagi ada yang suka sama hal-hal tersebut, feel free untuk chat ke aku ya di @fercananything! Fun fact, aslinya aku pendiam banget lho!"
                    />
                </div>
                <div>
                    <Osis
                        img={ Amanda } 
                        title="Amanda Michelle Setiawan" 
                        desc="Hi everyone! Perkenalkan nama aku Amanda bisa juga dipanggil Manda. Sekarang ada duduk sebagai anggota bidang 9 dan hobiku adalah melukis, membaca buku, dan mendengar lagu. Kalau mau reach out, contact aja di ig aku @amandamchlleee!                        "
                    />
                </div>
                <div>
                    <Osis
                        img={ enrichie } 
                        title="Enrichie Gracia" 
                        desc="Halo semuanya!!! Perkenalkan namaku Enrichie, kalian bisa panggil aku rich, rici, en, atau enrich. Tahun ini, aku menjabat sebagai anggota pengurus OSIS bidang 9. Di waktu luang, aku suka berenang dan juga membuat karya menggunakan software Blender. Kalau kalian tertarik untuk melihat karya yang sudah dibuat oleh aku, kalian bisa mengunjungi Instagram aku @enrichie_gracia. Selain berkreasi, aku juga suka berenang."
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                        Bidang 9, Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK) adalah bidang yang bertanggung jawab mengenai pemanfaatan TIK untuk melancarkan kegiatan-kegiatan ataupun acara di sekolah, seperti menjadi tim multimedia saat ada seminar. Selain itu, bidang 9 menggunakan TIK sebagai sumber informasi bagi para siswa agar dapat mengenal OSIS SMAK 1 lebih dalam lagi. Bidang 9  juga peduli akan talenta siswa-siswi SMAK 1. Salah satu bentuk kepeduliannya adalah dengan mewadahi siswa-siswi yang ingin mengembangkan talentanya di bidang desain dan perfilman dengan Monograph dan Shutterone.                    </p>
                    <br/>
                    <h1 className="font-semibold text-left text-4xl"><b>Program Kerja</b></h1>
                    <br/>
                    <ul className="list-decimal ml-5">
                        <li>
                            <p className="text-justify">
                                Website: Website merupakan program situs resmi OSIS SMAK 1 PENABUR Jakarta dimana terdapat informasi mengenai OSIS SMAK 1 dan acara-acara OSIS yang sudah maupun akan diadakan.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Shutter One: Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam video editing dan mendokumentasi foto maupun video dari sebuah acara.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                SMAK One Social Network: Sosial media (Instagram, Line, dan Youtube) resmi OSIS SMAK 1 PENABUR Jakarta yang memberikan konten mengenai program OSIS dan tempat untuk lebih berinteraktif antara OSIS dengan warga SMAK 1. 
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                G-Drive: Tempat penyimpanan online (Google Drive) dari OSIS untuk menyimpan prosata, proker, anggaran, dan laporan kegiatan.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Monograph: Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam membuat desain yang akan digunakan untuk acara.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                ONE-MEDIA: Tim multimedia OSIS SMAK 1 PENABUR Jakarta yang beranggotakan anggota OSIS Bidang 9 yang bertugas untuk melancarkan pelaksanaan kegiatan dan acara sekolah dan OSIS.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                ONECAST: Podcast resmi OSIS SMAK 1 PENABUR Jakarta yang dibawakan oleh peserta didik SMAK 1 dan dapat didengarkan Spotify.
                            </p>
                        </li>
                            <br />
                        <li>
                            <p className="text-justify">
                                E-Magazine: Majalah elektronik resmi OSIS SMAK 1 PENABUR Jakarta yang bertujuan untuk menambah wawasan siswa-siswi SMAK 1. Ditulis langsung oleh peserta didik SMAK 1 dan dapat diakses di website ini.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
    return (
        <OsisLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}
