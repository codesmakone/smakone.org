import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import valensia from '../../images/team/valensia.jpg'
import jessica from '../../images/team/jessica_dewanta.jpg'
import valeska from '../../images/team/valeska.jpg'
import david from '../../images/team/dacen.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Pembinaan Kualitas Olahraga, Jasmani, Kesehatan, dan Gizi Berbasis Sumber Gizi Terdiversifikasi</b></h1>
                <div>
                    <Osis
                        img={ valensia } 
                        title="Valensia Nadya Anthony" 
                        desc="Hai semua kenalin nama aku Valensia Nadya Anthony, biasa dipanggil Valen dari kelas 12 MIPA. Hobi formal aku olahraga, kalau hobi aslinya tidur + makan. Funfact tentang aku, aku pernah bikin korbid 4 terjungkal sampe dia... Yah begitulah tanya aja sendiri :)"
                    />
                </div>
                <div>
                    <Osis
                        img={ david } 
                        title="David Chen" 
                        desc="Halo semua perkenalkan nama aku David Chen dari kelas 12 MIPA  . Aku tinggal di taman palem lestari. Hobi aku bermain basket dan juga mendengarkan musik. Fun fact dari aku adalah aku orang gk suka liat kamar berantakan"
                    />
                </div>
                <div>
                    <Osis
                        img={ jessica } 
                        title="Jessica Valerie Dewanta" 
                        desc="Halo semua salam kenal! Pekenalkan nama aku Jessica Valerie Dewanta biasanya dipanggilnya JV. Aku tahun ini kelas 11. Hobby aku itu nonton series, main basket, dan juga makan. Funfact tentang aku itu aku takut banget sama ruangan yang kecil dan gelap :) Semoga kita bisa lebih saling kenal ya."
                    />
                </div>
                <div>
                    <Osis
                        img={ valeska } 
                        title="Valeska Theodora Beatrice" 
                        desc="Salam kenal semua! Halo semua, perkenalkan nama aku Valeska Theodora Beatrice dari kelas XI MIPA, biasanya aku dipanggil val. Hobi aku bermain piano, nonton film, dan juga makan. Nah, untuk jenis film yang aku suka aku paling suka film action. Terakhir, buat kalian yang mau tanya apapun ke aku gausah malu malu ya boleh langsung contact aku aja di ig @valeska_beatrice"
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                        Bidang 7, Bidang kualitas olahraga, jasmani, kesehatan, dan gizi berbasis sumber gizi terdiversifikasi adalah bidang yan bertanggung jawab atas kegiatan yang berhubungan dengan kesehatan dan olahraga. Kami melaksanakan suatu acara Smukiez Olympic yang merupakan kegiatan olahraga yang dapat meningkatkan sportifitas dan kebersamaan suatu kelas. Kami dari Bidang 7 juga berupaya agar menjadi wadah untuk murid-murid yang ingin mengembangkan potensi dalam dirinya lebih dalam lagi dari kegiatan SMAKONECUP atau yang dikenal dengan sebutan SOC yang memperbolehkan untuk seluruh murid SMAK 1 untuk berpartisipasi daftar dalam kepanitiaan. Bidang 7 juga menjadi wadah untuk murid-murid agar meningkatkan kepedulian terhadap sesama murid SMAK 1 melalui kegiatan Peer Educator dan instagram @Pesmakone. Kami juga berupaya untuk memberikan informasi mengenai kesehatan dan olahraga melalui HEALTH1NFO yang kami post di story instagram @Smukiee.
                    </p>
                    <br/>
                    <h1 className="font-semibold text-left text-4xl"><b>Program Kerja</b></h1>
                    <br/>
                    <ul className="list-decimal ml-5">
                        <li>
                            <p className="text-justify">
                                SMAK ONE CUP, Program terbesar OSIS untuk mengembangkan potensi siswa SMAK 1 di bidang akademik maupun non akademik dan juga untuk mempererat hubungan antar sekolah!
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                HEALTH1NFO, Konten informatif dan menarik mengenai kesehatan, gizi, dan olahraga yang disebar luaskan melalui media sosial
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Smukiez Olympics, Pertandingan antar kelas untuk mempererat hubungan antar kelas dan meningkatkan kesehatan siswa melalui perlombaan antar kelas dan pelaksanaanya setelah PAT
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Peer Educator, Tim Peer Educator atau pendidik sebaya untuk mencegah dan mendidik warga SMAK 1 Penabur tentang bahaya NAPZA, PTM, dan HIV AIDS
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                M1STER1, Case solving games mengenai kasus kesehatan dan psikologi untuk meningkatkan wawasan dan pengetahuan secara kreatif dan interaktif
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
