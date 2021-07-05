import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Content from '../../components/block/Content'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import naomi from '../../images/team/naomi.jpg'
import amelia from '../../images/team/amelia.jpg'
import irving from '../../images/team/irving.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Seksi Bidang Pembinaan Komunikasi dalam Bahasa Inggris</b></h1>
                <div>
                    <Osis
                        img={ naomi } 
                        title="Naomi Hasian Felicia Butarbutar" 
                        desc="Halo semuanya! Perkenalkan nama aku Naomi dari kelas 12, dan aku koordinator dari Bidang 10. Hobi aku itu baca, terutama komik sama novel, dengerin musik, dan jalan-jalan. Makanan favorit aku pokoknya yang berbau ayam, ayam diapain aja aku suka semuanya. Terus funfact, dulu aku pernah tinggal di Myanmar sama Kamboja. Salam kenal semua!" 
                   />
                </div>
                <div>
                    <Osis
                        img={ amelia } 
                        title="Amelia Maureen Widiya" 
                        desc="Hai semuanyaa! Namaku Amelia, biasanya aku dipanggil Amel atau Mel. Aku anggota Bidang 10 di OSIS dan sekarang ini aku kelas 11. Belakangan ini, aku lagi suka banget main game, dengerin musik, nonton film, dan ngegambar! Satu fun fact tentang aku, makanan kesukaanku itu telor. Salam kenal semuaa!"
                    />
                </div>
                <div>
                    <Osis
                        img={ irving } 
                        title="Irving Jorryn Lie" 
                        desc="Haloo semua!, Perkenalkan nama aku Irving dari kelas 11. Aku adalah salah satu anggota dari Bidang 10. Aku suka bernyanyi, bermain alat musik, mendesain, nonton, dengerin lagu, dan masih banyak lagi. Salah satu fun fact mengenai aku itu, aku memiliki passion dalam musik. Selama pandemi aku juga lgii suka mainn game, main piano dan pstinya binge watch! Salam kenall semuanyaa!"
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
                    <p className="text-left">
                        1. SEED (Smukie’s English Establisment Day), Sebuah program dimana kita membuat suatu acara yang dijalankan dengan memakai Bahasa Inggris. Melalui SEED, kita mendorong siswa/i Smak 1 untuk mendengarkan dan berinteraksi dengan Bahasa Inggris. Program ini biasanya dijalankan bersamaan dengan perayaan Hari Kartini.
                    </p>
                    <br/>
                    <p className="text-left">
                        2. One FM, Di dalam program ini, Bidang 10 memanfaatkan sarana radio sekolah dan memilih beberapa siswa/i untuk menjadi pembawa radio sekolah, dimana mereka bisa memutar lagu dan berbincang-bincang dalam bahasa Inggris. Program ini dijalankan setiap hari Rabu dan Jumat di jam istirahat kedua.

                    </p>
                    <br/>
                    <p className="text-left">
                        3. English Service, Program ini merupakan kolaborasi bersama dengan program kebaktian oleh Bidang 1 dimana seluruh warga SMAK 1 menjalankan ibadah rohani dalam Bahasa Inggris setiap semesternya. Bahasa Inggris diterapkan dalam pengangkatan pujian, pembacaan doa, serta pemberitaan khotbah oleh pendeta.
                    </p>
                    <br/>
                    <p className="text-left">
                        4. English Day, English Day merupakan program yang dilaksanakan secara rutin setiap hari Rabu dan Jumat dimana seluruh warga SMAK 1 dihimbau untuk menggunakan Bahasa Inggris dalam proses belajar-mengajarnya. Bahasa Inggris diterapkan pada doa dan renungan pagi, salam guru, proses pengajar oleh guru, serta percakapan sehari-hari antar warga SMAK 1.
                    </p>

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
