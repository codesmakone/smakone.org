import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import Cheryn from '../../images/team/Cheryn wihono.jpg'
import jesslyn from '../../images/team/jesslyn.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Kreativitas, Keterampilan, dan Kewirausahaan</b></h1>
                <div>
                    <Osis
                        img={ jesslyn } 
                        title="Jesslyn Theodora" 
                        desc="Halo semua! Kenalin nama aku Jesslyn Theodora, biasa dipanggil Jess. Aku lahir tanggal 28 Desember 2005, dan tahun ini 17 tahun, tapi masih lama sih hehehe! Sekarang aku kelas 11 nih ^^. Aku suka nonton film, baca novel, dan gambar. Oh iya, aku juga penggemar berat bulu tangkis! Ig aku @jess_theodora , jangan lupa di follow ya ^^. Bergabung dalam kepengurusan OSIS bidang 6 merupakan kesempatan luar biasa buat aku, karena disini, teman yang baik, suportif dan kreatif bisa ditemukan. So, nanti jangan lupa daftar bidang 6 ya! Satu fun fact tentang aku, humorku itu receh banget! Jadi jangan kaget ya kalau yang garing aja aku ketawain!
                        "
                    />
                </div>
                <div>
                    <Osis
                        img={ Cheryn } 
                        title="Cheryn Wihono" 
                        desc="Hai semua! Perkenalkan, nama aku Cheryn Wihono kalian bisa panggil aku cheryn/cher. Aku lahir pada tanggal 2 November 2006 (akhir tahun banget ya HAHAHA) jadi tahun ini aku 16 tahun. Sekarang aku masih duduk di kelas 10. Hobi aku banyak sih, tapi yang utama aku suka nari hehehe. To be in OSIS is a very great opportunity loh, kalian belajar banyak banget dan tentunya seru banget, bidang 6 sendiri merupakan salah satu dari great opportunitynya. Jadi kalo kalian daftar OSIS jangan lupa daftar di bidang 6!! Username IG aku @cheryn_wihono , boleh tuh di follow 😙. Oh iya fun fact about me, aku takut banget sama kecoa 👎👎.
                        "
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                    OSIS Bidang 6 merupakan seksi dalam organisasi OSIS yang bertujuan untuk membina kreativitas, keterampilan, dan kewirausahaan untuk siswa/i SMAK 1 PENABUR Jakarta. Kami memiliki beberapa program kerja yang bertujuan untuk meningkatkan kreativitas dan keterampilan siswa serta meningkatkan usaha koperasi siswa.
                    </p>
                    <br/>
                    <h1 className="font-semibold text-left text-4xl"><b>Program Kerja</b></h1>
                    <br/>
                    <ul className="list-decimal ml-5">
                        <li>
                            <p className="text-justify">
                            BazOne : BazOne merupakan program terbaru dari bidang 6 dan merupakan salah satu acara besar SMAK 1. BazOne merupakan acara bazaar terbuka bagi warga SMAK 1 dan juga masyarakat luas dalam gerakan mendukung UMKM Indonesia dan juga memiliki beberapa sesi talkshow dan workshop sesuai dengan minat siswa/i SMAK 1.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Technopreneur : Technopreneur merupakan workshop dengan tema yang telah dipilih oleh siswa/i SMAK 1 dan akan dilaksanakan pada saat BazOne berlangsung.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Secret Admirer : Secret Admirer merupakan sebuah program tahunan OSIS untuk memperingati hari Valentine.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Entrepreneur’s Day : Entrepreneur’s Day merupakan kegiatan workshop bagi warga SMAK 1 mengenai stock trading. Setelah workshop berakhir, akan diadakan perlombaan stock trading secara tim.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Smukiez Artweek : Smukiez Artweek merupakan pameran seni SMAK 1. 
                            </p>
                        </li>
                        <li>
                            <p className="text-justify">
                            Monopoly : Monopoly merupakan salah satu cabang perlombaan yang diadakan pada perayaan HUT RI di SMAK 1.
                            </p>
                        </li>
                        <li>
                            <p className="text-justify">
                            Koperasi Kejujuran : Koperasi siswa yang berada di lantai 1 sekolah dengan tujuan untuk meningkatkan kejujuran siswa/i SMAK 1.
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
