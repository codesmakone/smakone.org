import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import Marco from '../../images/team/Marcp.jpg'
import amelia from '../../images/team/Amelia.jpg'
import irving from '../../images/team/Irving.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Pembinaan Komunikasi dalam Bahasa Inggris</b></h1>
                <div>
                    <Osis
                        img={ irving } 
                        title="Irving Jorryn Lie" 
                        desc="Haiii Semua!!!, Perkenalkan nama aku Irving dari kelas 11 dan aku adalah koordinator dari Bidang 10. Aku suka bernyanyi, bermain alat musik, mendesain, nonton, dengerin lagu, dan masih banyak lagi. Salam kenall semuanyaa!!"
                    />
                </div>
                <div>
                    <Osis
                        img={ amelia } 
                        title="Amelia Maureen Widiya" 
                        desc="Halo semua! Kenalin namaku Amelia Maureen Widiya, biasa dipanggil Amel atau Mel. Sekarang aku kelas XI MIPA. Hobiku belakangan ini main game, dengerin lagu, dan menggambar. Salam kenal semuanya! 👋
                        "
                    />
                </div>
                <div>
                    <Osis
                        img={ Marco } 
                        title="Marco Sebastian Tjiong" 
                        desc="Yo! Halo semua, aku Marco Sebastian Tjiong, nama panggilan Marco. Aku sekarang ada di kelas X MIPA. Hobi aku musiman, tapi ada 2 hobi yang konsisten yaitu main dan tidur. Salam kenal semua 👋👋"
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                        Bidang 10 adalah bidang yang berperan dalam pembinaan komunikasi dalam Bahasa Inggris. Bidang kami mendorong warga SMAK 1 Penabur untuk menggunakan Bahasa Inggris dalam wilayah sekolah terutama dengan program English Day. Melalui program-program lain seperti One Feed, One FM dan SEED, kami juga berusaha untuk meningkatkan kemampuan warga Smak 1 dalam mendengar, memahami dan berbicara dalam Bahasa Inggris.
                    </p>
                    <br/>
                    <h1 className="font-semibold text-left text-4xl"><b>Program Kerja</b></h1>
                    <br/>
                    <ul className="list-decimal ml-5">
                        <li>
                            <p className="text-justify">
                                SEED (Smukie’s English Establisment Day), Sebuah program dimana kita membuat suatu acara yang dijalankan dengan memakai Bahasa Inggris. Melalui SEED, kita mendorong siswa/i Smak 1 untuk mendengarkan dan berinteraksi dengan Bahasa Inggris. Program ini biasanya dijalankan bersamaan dengan perayaan Hari Kartini.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                One FM, Di dalam program ini, Bidang 10 memanfaatkan sarana radio sekolah dan memilih beberapa siswa/i untuk menjadi pembawa radio sekolah, dimana mereka bisa memutar lagu dan berbincang-bincang dalam bahasa Inggris. Program ini dijalankan setiap hari Rabu dan Jumat di jam istirahat kedua.

                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                English Service, Program ini merupakan kolaborasi bersama dengan program kebaktian oleh Bidang 1 dimana seluruh warga SMAK 1 menjalankan ibadah rohani dalam Bahasa Inggris setiap semesternya. Bahasa Inggris diterapkan dalam pengangkatan pujian, pembacaan doa, serta pemberitaan khotbah oleh pendeta.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                English Day, English Day merupakan program yang dilaksanakan secara rutin setiap hari Rabu dan Jumat dimana seluruh warga SMAK 1 dihimbau untuk menggunakan Bahasa Inggris dalam proses belajar-mengajarnya. Bahasa Inggris diterapkan pada doa dan renungan pagi, salam guru, proses pengajar oleh guru, serta percakapan sehari-hari antar warga SMAK 1.
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
