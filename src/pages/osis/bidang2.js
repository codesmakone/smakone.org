import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Content from '../../components/block/Content'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import darrel from '../../images/team/darrel.jpg'
import stephanie from '../../images/team/stephanie.jpg'
import chloe from '../../images/team/Chloe .jpg'
import kevin from '../../images/team/kevin frans.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Pembinaan Budi Pekerti Luhur dan Akhlak Mulia</b></h1>
                <div>
                    <Osis
                        img={ darrel } 
                        title="Darrel Afrian Tjahjadi" 
                        desc="Halo teman-teman, namaku Darrel Afrian Tjahjadi, biasa dipanggil Darrel, aku bertugas sebagai koordinator bidang 2 OSIS SMAK 1 Penabur Jakarta. Aku bersekolah di SMAK 1 pada tahun 2019-2022, aku sekarang duduk di kelas 12 MIPA, Hobi aku suka menonton dan olahraga, satu hal lagi, silakan ya teman teman kalau mau tanya tanya tentang SMUKI sama aku
                        "
                    />
                </div>
                <div>
                    <Osis
                        img={ stephanie } 
                        title="Stephanie Patricia Anshell" 
                        desc="Haiii!!! Nama aku Stephanie Patricia Anshell biasa dipanggil Stephanie. Saat ini aku adalah anak kelas 12 IPS. Kalo ditanya tentang hobi hmm hobiku cukup banyak diantaranya olahraga, baca novel, masak, dan jalan-jalan. Kalo olahraga sendiri selain karena bikin badan sehat tapi juga seru misalnya seperti bersepeda, jogging, renang, dll. Percaya lah alasan utama aku hobi masak karena aku suka ngerecokin dapur ada sensasi kesenangan sendiri aja gitu hahaha. Btw, kalau ada yang mau ditanya tentang aku atau sekolah, jangan malu buat tanya ya."
                    />
                </div>
                <div>
                    <Osis
                        img={ chloe } 
                        title="Chloe Stephanie Sugiarto" 
                        desc="Hii smuaa! namaku Chloe Stephanie Sugiarto, kalian bisa panggil aku chloe. Aku lahir di jakarta, tahun 2005. Salah satu fun fact tentang aku, aku tuh gabisa diem jadi suka coba hal-hal baru. Seru aja gitu rasanya kalo ada tantangan. Oh iya, aku juga suka bangett nonton film series sama drakor. Jadi kalo ada juga yang suka, pasti nyambung deh kitaa! itu aja sii tentang aku. last but not least, feel free aja yaa yang mau ngobrol atau nanya tentang apa ajaa. xoxo, chloe"
                    />
                </div>
                <div>
                    <Osis
                        img={ kevin } 
                        title="Kevin Frans Periatna" 
                        desc="Haloo semuanyaa, aku Kevin Frans Periatna biasa dipanggil Kev. Aku saat ini ada di kelas 11 IPS. Untuk hobi hmm... aku sih suka nonton tv series, main game sampai mendengarkan lagu. Nah untuk jenis lagu yang aku dengerin itu dari indo sampai kpop semuaa aku dengerin ;) Terakhirrr, untuk kalian yang mau tanya apapun gausah malu-malu yaa bole contact aku di ig akfp05 atau line.. "
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                        OSIS Bidang 2 adalah bidang pembinaan budi pekerti luhur dan akhlak mulia, sesuai namanya visi dari seksi bidang 2 adalah untuk menamakan sikap-sikap yang yang sesuai dengan budi pekerti dan nilai-nilai kristiani. Dalam rangka mewujudkan visi tersebut osis bidang 2 membuat beberapa program yaitu Christmas Carol, Quozzy, Spread the Word, dan Tutorial for Others by Smukiers. Jadi kalau teman teman berminat untuk bergabung di OSIS bidang 2 jangan lupa daftar ya saat ada pendaftaran OSIS
                    </p>
                    <br/>
                    <h1 className="font-semibold text-left text-4xl"><b>Program Kerja</b></h1>
                    <br/>
                    <ul className="list-decimal ml-5">
                        <li>
                            <p className="text-justify">
                                Christmas carol, adalah program berupa kunjungan ke panti jompo pada masa menjelang natal, disana akan diadakan semacam talent show yang fungsinya untuk menghibur para lansia disana,
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Quozzy, adalah quiz berbasis quotes yang ada di instagram,
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Spread the Word adalah program dimana anggota osis menyebarkan motivasi melalui media sosial instagram dan biasanya akan disebarkan lagi oleh siswa-siswi yang di-tag di media sosial instagram oleh anggota osis dan seterusnya
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Tutorial for Others yang adalah program pengajaran anak-anak kurang beruntung yang diadakan bersama Yayasan Sahabat Anak, di mana kami  beserta para relawan siswa/i akan mengajarkan mereka pelajaran seperti matematika dasar, bahasa inggris dan lain-lain. 
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
