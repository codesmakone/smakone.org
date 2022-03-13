import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import Joce from '../../images/team/joce.jpg'
import Valerie from '../../images/team/vege.jpg'
import Alinee from '../../images/team/alinee.jpg'
import Chloe from '../../images/team/chloe.png'
import Amanda from '../../images/team/manda.jpg'

export default function bph() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Badan Pengurus Harian</b></h1>
                <div>
                    <Osis
                        img={ Joce } 
                        title="Jocelyn Emmanuella Mok"
                        desc="
                        Hello! Salam kenal semuaa, aku Jocelyn selaku Ketua OSIS. di waktu luang, aku biasanya dengerin lagu dan nonton HEHE, kalo ada rekomendasi lagu & film bagus bisa hit me up through DM yaa @jocelyne_mok. Selain di OSIS, aku juga join beberapa clubs dan organisasi seperti Shutterone, TEDxYouth@SmakOne, TOS, dan SOC yang pastinya menambah pengalaman dan pengetahuan baru yang ga kalah seruu. Kalo kalian tertarik buat masuk tapi masih bingung, don't hesitate to reach out ke kita yaa, we’d love to answer your questions <33 Oh satu fun fact, aku anak rantau guyss hehehe, jadi kalo ada yang dari luar kota juga boleh banget kita ngobrol bareng. Have fun di smuki!!
                        "
                    />
                </div>
                <div>
                    <Osis
                        img={ Alinee } 
                        title="Nathaline Marielle" 
                        desc="
                        hellooo semuanya! salam kenal yaa, nama aku Nathaline tapii biasanya dipanggil alinee! Di OSIS taun ini aku menjabat sebagaii wakil ketua osiss. Aku dari kecil ituu kdrama addict bangett! Jadi most of the time aku selalu nonton nonton nonton dan nonton :) from korean dramas to moviesnya semua aku sukaa banget HEHEH selain itu aku juga sering dengerin musik, suka olahraga, and pastinya cobain makanan baru - a big foodie right here! kalo mau give me recommendations or simply ngobrol – ngobrol langsung ke ig aku ajaa yaa @nathalinemarielle <3 karna ini baru my first semester in SMUKIE aku baru join ke OSIS and ONEJOURNAL hehe but i can’t wait to join more organizations later onn karena semuanya seru banget guysss! last but not the least, one fun fact about me itu i shower super duper late at night and kramasnya kayak flash less than 5 mins HEHHEHE anywayss lets be friends!!
                        "
                    />
                </div>
                <div>
                    <Osis
                        img={ Valerie } 
                        title="Valerie Graciella" 
                        desc='
                        Haiii smuaaa :)!! Kenalin yaa, aku Valerie sebagai sekretaris 1 OSIS, dan akuu sukaaaakk bgt sama yg namanya ngelukis, main musik, denger lagu, baca buku, dan tentunya nonton drakor hehe. Kalo mauu ngobrol" boleee bgt follow insta aku dii @valerie_graciella (ada art account jg kalo mau liat hihi). Akuu juga ikut kegiatan sekolah lainnyaa kayak SOC, SYC, dan ONECAST, jgn lupa dengerin spotifynyaa ;) fun fact aku demen bgt denger musik genre RnB, terutama korean RnB, kalo ada yg sama kyk aku hmu yaa!!! Have a great day guys <3
                        ' />
                </div>
                <div>
                    <Osis
                        img={ Chloe } 
                        title="Chloe Stephanie" 
                        desc="Haii helloo semua, kenalin nih aku chloe, sekretaris 2 OSIS di smukie! hobiku ga jauh beda dari kebanyakan orang yaitu dengerin musik dan nonton (tv series, drakor, dracin semuanya aku nonton HEHE) Selain OSIS, aku juga berperan di organisasi Dewan Ambalan, SOC, dan salah satu speaker TedXYouth@SmakOne. Ohyaa, kalian yang mau ngobrol atau tanya2 tentang smuki boleh banget lewat ig @chloestephaniee , let’s be friends! yang mau curhat juga sini aku dengerin <3 funfact, aku tipe orang yang awalnya super jaim tapi kalo udah kenal deket wah bener2 gabisa diem si HAHAHAH salken semuaaa, goodluck and have fun in Smukie!!
                        "
                    />
                </div>
                <div>
                    <Osis
                        img={ Amanda } 
                        title="Amanda Putri Devi Siagian" 
                        desc="
                        Haihaii! Aku Amanda, Bendahara OSIS Smukie! Aku suka banget dengerin lagu sambil nyanyi, atau nonton TV series dari drakor, western bahkan anime. Aku juga seorang makeup & skincare enthusiast! Jadi kalo kalian suka makeup & skincare juga dan pengen ngobrol-ngobrol, atau tentang topik lainnya bahkan mau curhat ;), bisa DM aku di IG @mandasgn yah! Selain OSIS, aku juga ikut beberapa kegiatan di SMAK 1, misalnya SOC, ONE MUN, dan Smukiez Choir. Fun fact dikit nihh, total ‘minutes listened’ Spotify aku tahun 2021 80.225 menit, dan BTS udah jadi top artist aku di 4 tahun terakhir lho! Salam kenal semua! Good luck di smukie!!
                        "
                    />
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
