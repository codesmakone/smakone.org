import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Content from '../../components/block/Content'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import rachel from '../../images/team/rachel.jpg'
import erika from '../../images/team/erika.jpg'
import yoel from '../../images/team/yoel.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Pembinaan Sastra dan Budaya</b></h1>
                <div>
                    <Osis
                        img={ rachel } 
                        title="Rachel Illona" 
                        desc="Halo semua nama aku Rachel Illona , panggil aja ri. Sekarang aku duduk di kelas 12, doain pas lulus gak jadi angkatan corona ya hehe. Hobi aku pastinya rebahan, kalian pasti juga suka kan..Oh ya, fun fact nama belakangku itu nama planet terbesar loh, hayo tebak."
                    />
                </div>
                <div>
                    <Osis
                        img={ erika } 
                        title="Erika Gabriella Ramiel" 
                        desc="Halo semuanyaaa, kenalin namaku Erika Gabriella Ramiel, atau singkatnya bisa dipanggil Erika. 2 Tahun lagi aku lulus nih tapi sayangnya blom kesampean juga buat belajar langsung di kelas. Hobi aku nyanyi dan 1 fun fact tentang aku, aku suka banget nonton film horror, yuk kita nobar kapan-kapan! Salam kenal ya semuaa, jangan malu buat nanya-nanya ya gaiss, semangat di smukiee!"
                    />
                </div>
                <div>
                    <Osis
                        img={ yoel } 
                        title="Yoel Kyocera Antony" 
                        desc="Halo semua, namaku Yoel Kyocera Antony, atau biasa dipanggil Yoel. Pada saat ini, aku duduk di kelas 11. Sudah 1 tahun lebih nih di rumah aja dan sekolah online, mudah mudahan corona uda hilang sebelum anniversary ke 2 agar kita bisa sekolah offline. Hobiku itu nyanyi dan main piano, tapi ada hobi baru nih sejak corona yaitu nonton, siapa yang ga suka nonton film? Hehehe
                        Sekain dari aku, salam kenal ya semua, semangat di Smukiee !!"
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                    Selamat datang di Bidang 8 yaitu Bidang Pembinaan Sastra dan Budaya. Bidang ini bertanggung jawab mengenai kegiatan non-akademik di bidang kesenian, sastra, dan budaya. Bidang 8 juga mendukung siswa-siswi SMAK 1 dalam menyalurkan talenta kesenian pada acara STN ( Smukiez Theatre Night), kemampuan memproduksi short movie pada SMURF, dan bidang jurnalistik pada program PENS1L. Selain itu, bidang 8 juga mengapresiasi prestasi siswa-siswi SMAK 1 dengan menjalankan program ART1STIC. Tidak hanya itu, masih banyak program bidang 8 yang menarik seperti Birthday Calendar, CNYxVals, dan RESONANSI.
                    </p>
                    <br/>
                    <h1 className="font-semibold text-left text-4xl"><b>Program Kerja</b></h1>
                    <br/>
                    <p className="text-left">
                        1. Birthday Calendar, Birthday Calendar merupakan program harian yaitu mengumumkan siswa yang berulang tahun setiap hari efektif masuk sekolah.
                    </p>
                    <br/>
                    <p className="text-left">
                        2. PENS1L, PENS1L merupakan pembuatan majalah/ artikel online yang mencakup tema dalam 1 tahun dan disalurkan melalui instagram @PENS1L. Artikel akan ditulis oleh tim jurnalistik SMAK 1.
                    </p>
                    <br/>
                    <p className="text-left">
                        3. Valentine’s day + Chinese New Year, CNYxVal’s adalah hari perayaan Valentine dan tahun baru Imlek melalui serangkaian acara, penampilan,  dan lomba yang akan diikuti oleh siswa-siswi SMAK 1.
                    </p>
                    <br/>
                    <p className="text-left">
                        4. ART1STIC, Program ini bertujuan untuk meningkatkan apresiasi kesenian dan kreativitas siswa-siswi SMAK 1 dengan cara memposting video uprak hasil karya kelas 12 ke sosial media.
                    </p>
                    <br/>
                    <p className="text-left">
                        5. Smukiez Theater Night, Smukiez Theater Night atau yang biasa disingkat STN merupakan program tahunan yang menyelenggarakan sebuah pertunjukkan teater dan pentas seni di SMAK 1.
                    </p>
                    <br/>
                    <p className="text-left">
                        6. RESONANSI, RESONANSI atau yang dikenal sebagai program yang lomba musikalisasi puisi dalam rangka merayakan hari Kemerdekaan Indonesia bertujuan untuk meningkatkan apresiasi sastra dalam bentuk puisi.
                    </p>
                    <br/>
                    <p className="text-left">
                        7. SMURF, SMURF merupakan singkatan dari Smukiez Rolling Festival yang bertujuan untuk meningkatkan kreativitas murid-murid SMAK 1 dengan mengadakan perlombaan pembuatan film pendek.
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
