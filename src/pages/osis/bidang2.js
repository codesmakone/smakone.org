import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import Nicole from '../../images/team/Nicole.jpg'
import Jessica from '../../images/team/Jessica.jpg'
import Eileen from '../../images/team/Eileen1.jpg'
import kevin from '../../images/team/Kevin.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Pembinaan Budi Pekerti Luhur dan Akhlak Mulia</b></h1>
                <div>
                    <Osis
                        img={ kevin } 
                        title="Kevin Frans Periatna" 
                        desc="Haloo semuanya!! Nama aku Kevin Frans Periatna biasa dipanggil Kev atau beberapa orang tau aku akfp hehe, jadi ini few things about me ya hohoho. Kalo lagi ga ngapa-ngapain aku suka banget main FIFA sama nonton series. Aku suka banget series yang fantasy gitu tapi ga nutup kemungkinan buat nonton yang romance juga sih.. Fun fact about me itu aku gasuka nonton film horror tapi suka sama hal berbau mistis.. Aneh ya, tapi yasudala. Ok next, hobi aku itu aku suka denger music. Mau lagi belajar ato lagi nganggur pasti spotify aku on 24/7 hehehehehe. Nah terakhir kalo kalian punya pertanyaan atau kek mau ngobrol aja feel free to contact me ya gaes.. Boleh banget di add line ku ato IG ku ato bahkan spotifyku @akfp05 ya gausa takut ya gaes ya aku gak galak kok hehhehe.. Salken semuaa!"
                    />
                </div>
                <div>
                    <Osis
                        img={ Eileen } 
                        title="Eileen Elton" 
                        desc="Hiii guys,,,, nama aku Eileen Elton, panggil aja eileen/leen boleh. Nah ini tuh facts about me gituu yaaa. Ok jadi yang pertama itu musik…. Spotify aku pasti nyala terus beneran :| tapiii playlist-playlistnya pasti aku hide :)) karena i wanna gatekeep my musics hehe. Trus ehm other than music paling ya main sih… main apa aja deh atau ga paling nonton… i am open with any genre possible soo kalo bagus ya bagus gitu. Finally, kalau kalian mau tanya-tanya tentang apaa aja atau ngobrol, chat aja ya line aku or my instagram @eileeneltonn. I’ll try my best to answer it. Udah gitu,,,, salam kenal :))(("
                    />
                </div>
                <div>
                    <Osis
                        img={ Jessica } 
                        title="Jessica Jolene Djayasaputra" 
                        desc="Haiii semuanyaa!! Namaku Jessica Jolene Djayasaputra, biasa dipanggil Jejo dan sekarang aku adalah murid 10 MIPA. Kalau lagi luang, aku suka nonton (kdrama terutama ;p) dan main piano. Sooo kalau hobi kita sama, fix kita bisa nyambung ngobrolnya! Anyways, fun fact about me adalah aku SUKA BANGET sama pizza <33. Aku selalu rayain birthdayku di restoran pizza. TAPI sayangnya, aku alergi tomat yang adalah salah satu bahan dasar pizza ;(( tapi aku selalu makan anyways sih HEHE. Last but not least, if you have any questions about me/smukie/etc., kalian boleh banget chat aku lewat Instagram @jessicajolenedj cuz I’d love to help or chat with you guys! Salam kenalll semuanyaa!!"
                    />
                </div>
                <div>
                    <Osis
                        img={ Nicole } 
                        title="Nicole Edline Simon" 
                        desc="Haii semuanya !! Namaku Nicole Edline Simon, biasa dipanggil nic. Aku saat ini ada di kelas 10 MIPA. Kalau lagi ga sibuk aku suka banget binge watch series netflix atau main piano. Series favorite aku pasti yang ada romance-dramanya, tapi tenang aku ga banyak drama kok. Fun fact tentang aku adalah aku suka banget travelling sayangnya karena pandemi jadi di rumah aja T-T. Lastly kalo kalian ada pertanyaan tentang smukie atau kayak pengen ngobrol aja feel free buat contact aku lewat instagram @coleedline_ atau add line aku ya. Salam kenal semuaa!! "
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
                                Voice of Smakone, adalah sebuah program yang menyalurkan berbagai pandangan dari warga sekolah SMAK 1 BPK PENABUR.
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
