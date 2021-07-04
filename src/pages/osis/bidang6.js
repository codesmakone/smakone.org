import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Content from '../../components/block/Content'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import brigitta from '../../images/team/birgitta.jpg'
import jesslyn from '../../images/team/jesslyn.jpg'
import bob from '../../images/team/bob.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang 2</b></h1>
                <div>
                    <Osis
                        img={ bob } 
                        title="Bob Jesse Lie" 
                        desc="Halo semua!!! Kenalin, nama aku Bob Jesse Lie, biasa dipanggil Bob. Aku lahir di Jogja pada tanggal 7 Mei 2004. Dari kecil sampai lulus SMP aku tinggal di Magelang. Biar mendapat pengalaman baru, aku mencoba menempuh jenjang SMA di SMAK 1 Penabur Jakarta. Nah aku disini sebagai koordinator OSIS bidang 6 tahun 2021. Tahun ini aku bersyukur banget bisa dapet anggota - anggota bidang yang suportif and seru banget. Disini aku punya hobi buat dengerin musik and nonton film"
                    />
                </div>
                <div>
                    <Osis
                        img={ brigitta } 
                        title="Birgitta Graciella" 
                        desc="Hello everyone! Warm Greetings! Perkenalkan, nama saya Birgitta Graciella, atau biasa dipanggil Grace atau Birgitta. Saya adalah anggota OSIS Bidang 6. Saya lahir di Jakarta, pada tanggal 19 Juni tahun 2004. Saya tinggal di Jakarta dari saya lahir hingga sekarang saya berumur 17 tahun. Bergabung dalam OSIS bidang 6 adalah sebuah kesempatan yang luar biasa untuk saya, karena di OSIS Bidang 6, saya bertemu dengan teman-teman yang baik, dan tentunya membuat saya lebih berkembang lagi. And a little more about me, i'm addicted to spotify🤣I could listen to spotify for almost 7 hours a day! sounds crazy, isn't it?"
                    />
                </div>
                <div>
                    <Osis
                        img={ jesslyn } 
                        title="Jesslyn Theodora" 
                        desc="Hai semuaa! Perkenalkan nama aku Jesslyn Theodora, biasa dipanggil Jess. Lahir pada tanggal 28 Desember 2005 di Bandung dan akhirnya menetap di Jakarta sejak usia 5 tahun. Aku tergabung dalam anggota OSIS bidang 6, dimana teman-teman baik, suportif dan kreatif bisa ditemukan. Aku pecinta bulutangkis dan suka banget nonton film. Fun fact tentang aku, humorku receh banget!  Jadi jangan kaget ya kalau yang garing aja aku ketawain!"
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                        OSIS Bidang 6 merupakan seksi dalam organisasi OSIS yang membina kreativitas, keterampilan, dan kewirausahaan untuk siswa. Kami memiliki beberapa program kerja yang bertujuan untuk meningkatkan kreativitas dan keterampilan siswa serta meningkatkan usaha koperasi siswa.
                    </p>
                    <br/>
                    <h1 className="font-semibold text-left text-4xl"><b>Program Kerja</b></h1>
                    <br/>
                    <p className="text-left">
                        1. Secret Admirer,  Secret Admirer adalah sebuah program tahunan untuk memperingati hari valentin.
                    </p>
                    <br/>
                    <p className="text-left">
                        2. Technopreneur,  workshop mengenai minat murid murid
                    </p>
                    <br/>
                    <p className="text-left">
                        3. Koperasi Kejujuran
                    </p>
                    <br/>
                    <p className="text-left">
                        4. Monopoly,  program terbaru bidang kami yang akan dilaksanakan pada saat peringatan kemerdekaan Indonesia pada tanggal 17 Agustus.
                    </p>
                    <br/>
                    <p className="text-left">
                        5. Vintage Store,  program pengajaran anak-anak kurang beruntung yang diadakan bersama Yayasan Sahabat Anak, di mana kami  beserta para relawan siswa/i akan mengajarkan mereka pelajaran seperti matematika dasar, bahasa inggris dan lain-lain. 
                    </p>
                    <br/>
                    <p className="text-left">
                        6. Koperasi Kejujuran,  program pengajaran anak-anak kurang beruntung yang diadakan bersama Yayasan Sahabat Anak, di mana kami  beserta para relawan siswa/i akan mengajarkan mereka pelajaran seperti matematika dasar, bahasa inggris dan lain-lain. 
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
