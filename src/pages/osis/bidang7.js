import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import Fidella from '../../images/team/Fidella1.png'
import jessica from '../../images/team/Jessicav.jpg'
import valeska from '../../images/team/valeska.jpg'
import Bradley from '../../images/team/Bradley.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Pembinaan Kualitas Olahraga, Jasmani, Kesehatan, dan Gizi Berbasis Sumber Gizi Terdiversifikasi</b></h1>
                <div>
                    <Osis
                        img={ valeska } 
                        title="Valeska Theodora Beatrice" 
                        desc="Hello semuanya!! Perkenalkan nama aku Valeska Theodora Beatrice,biasanya aku dipanggil Val. Tahun ini aku kelas XI MIPA. Hobi aku itu main piano, nonton film, and makan.
                        Terakhir, buat kalian yang mau tanya apapun ke aku gausah malu malu ya boleh langsung contact aku aja di ig @valeskatheodoraa. 
                        "
                    />
                </div>
                <div>
                    <Osis
                        img={ jessica } 
                        title="Jessica Valerie Dewanta" 
                        desc="Hii!! Perkenalkan nama aku Jessica Valerie Dewanta tapi biasa aku dipanggil Jeve. Tahun ini aku kelas XI MIPA. Hobi aku itu main basket, main piano, dan juga nonton film crime. Fun fact tentang aku itu aku suka banget makan pedes. Kalau mau tanya-tanya boleh banget reach me out di instagram aku @jessicadewanta.  "
                    />
                </div>
                <div>
                    <Osis
                        img={ Fidella } 
                        title="Fidella Lukita" 
                        desc="Hello semua 👋🏻 Perkenalkan aku Fidella Lukita, just call me Fidel. Sekarang aku berada di kelas X MIPA. Kalau lagi ada waktu senggang, aku biasanya tidur atau nonton drama. Fun fact, aku kalau pegang mouse pake tangan kiri padahal aku aslinya right-handed. If you wanna know more about me, don't hesitate to reach me out on my IG @fidellalukita ! 
                        "
                    />
                </div>
                <div>
                    <Osis
                        img={ Bradley } 
                        title="Bradley Wilson" 
                        desc="Halo semua, perkenalkan nama aku Bradley Wilson, biasanya aku dipanggil BW. Sekarang aku duduk di kelas X MIPA. Hobi aku antara lain main games seperti valorant, main basket dan dengerin lagu. Kalau mau tau lebih lagi tentang aku langsung aja di cek instagram aku di @bradleywilss."
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                    Bidang 7, Bidang kualitas olahraga, jasmani, kesehatan, dan gizi berbasis sumber gizi terdiversifikasi adalah bidang yang bertanggung jawab atas kegiatan yang berhubungan dengan kesehatan dan olahraga. Kami melaksanakan suatu acara Smukiez Olympic yang merupakan kegiatan olahraga yang dapat meningkatkan sportivitas dan kebersamaan suatu kelas. Kami dari Bidang 7 juga berupaya agar menjadi wadah untuk murid-murid yang ingin mengembangkan potensi dalam dirinya lebih dalam lagi dari kegiatan SMAKONECUP atau yang dikenal dengan sebutan SOC yang memperbolehkan untuk seluruh murid SMAK 1 untuk berpartisipasi daftar dalam kepanitiaan. Bidang 7 juga menjadi wadah untuk murid-murid agar meningkatkan kepedulian terhadap sesama murid SMAK 1 melalui kegiatan Peer Educator dan instagram @Pesmakone. Kami juga berupaya untuk memberikan informasi mengenai kesehatan dan olahraga melalui HEALTH1NFO yang kami post di story instagram @Smukiee. Kami juga menyiapkan program M1STER1 yang berisi kasus kesehatan untuk mengasah kemampuan.
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
                            HEALTH1NFO, Konten informatif dan menarik mengenai kesehatan, gizi, dan olahraga yang disebarluaskan melalui media sosial.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Smukiez Olympics, Pertandingan antar kelas untuk mempererat hubungan antar kelas dan meningkatkan kesehatan siswa melalui perlombaan antar kelas dan pelaksanaanya setelah PAT.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Peer Educator, Tim Peer Educator atau pendidik sebaya untuk mencegah dan mendidik warga SMAK 1 Penabur tentang bahaya NAPZA, PTM, dan HIV AIDS.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            M1STER1, Case solving games mengenai kasus kesehatan dan psikologi untuk meningkatkan wawasan dan pengetahuan secara kreatif dan interaktif.
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
