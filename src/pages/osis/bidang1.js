import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import wm from '../../images/team/wm.jpg'
import Gabriella from '../../images/team/Gabriella.jpg'
import beatrice from '../../images/team/Beatrice1.png'

export default function bidang1() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Pembinaan Keimanan dan Ketakwaan Terhadap Tuhan Yang Maha Esa</b></h1>
                <div>
                    <Osis
                        img={ beatrice } 
                        title="Beatrice Valerina Djayasaputra" 
                        desc="Hii everyone! Namaku Beatrice, koordinator OSIS bidang 1 😊 Life in smukie has been a journey, and joining OSIS is one of the ones I don’t regret! Tapi selain OSIS, ada banyak hal” seru lainnya yang aku ikuti, salah satunya jadi speaker sekaligus event manager di TEDxYouth@SmakOne (you can check it out on TEDx’s youtube channel or @tedxyouthsmakone on IG). Di luar sekolah, ada banyak hal lainnya juga yang aku suka, seperti binge watch series / films HEHE. Lately, aku juga lagi suka bgt sama badmin! So, if you guys have the same interests (or not) feel free to reach me out @beatrice.valerinaa on Instagram karena aku jg suka ngobrol HAHAH. *mau tanya-tanya juga boleh, would be happy to help! Salam kenal semuaa!"
                    />
                </div>
                <div>
                    <Osis
                        img={ Gabriella } 
                        title="Gabriella Clara Subakti" 
                        desc="Hai everyone! Perkenalkan namaku Gabriella tapi biasanya dipanggil Gab. Aku berjabat sebagai anggota OSIS bidang 1. A little info about myself, aku sukaaa banget sama yang namanya knitting sama crochet. My latest project is a turtleneck vest HEHEHE. Selain itu, aku juga suka nonton TV series and lately, aku lagi suka bgt sama show Peaky Blinders nii!! So if you guys have any show recommendations, mau belajar knitting with me or simply want to talk to me, sinii yukk ngobrol😋 @gabxclara on Instagram. Oiya fun fact about me, aku tuh kebalikan Ko WM HAHAHA, aku orangnya 90% extroverted. Okay anyways, let’s be friends and welcome everyone!!"
                    />
                </div>
                <div>
                    <Osis
                        img={ wm } 
                        title="William Matthew" 
                        desc="Halli Hallo! Aku William Matthew, biasa dipanggil WM, anggota OSIS bidang 1. Sedikit tentang aku, aku sangat suka belajar bahasa asing, dari bahasa Korea, Mandarin, Jerman, Spanyol, Jepang… semuanya aku pelajari (walaupun sebenarnya belum bisa bisa amat). Aku juga suka nari, walaupun lagi, kagak jago-jago amat. One fun fact about me is that aku introvert, dan kalau di tes MBTI aku dapetnya gak pernah kurang dari 90% Introverted. Tapi tetep harus berjuang untuk bisa bersosialisasi di SMUKI! :’) Kalau kamu juga suka belajar bahasa ataupun mau ngobrol gak jelas juga boleh banget contact aku, @williamtthw on IG. Jia you und Hwaiting in SMAK eins!
                        "
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                        Bidang 1 adalah bidang yang berperan dan bertanggung jawab dalam pembinaan kegiatan keagamaan Kristen di sekolah, salah satunya melalui kegiatan kebaktian yang rutin diadakan 1x dalam sebulan yang diikuti oleh seluruh guru, karyawan, dan siswa SMAK 1. Selain itu, melalui program kerja lainnya seperti R4G, SOG, dan Bible Trivia pengurus terus berusaha untuk mendorong pertumbuhan rohani seluruh warga SMAK 1.    
                    </p>
                    <br/>
                    <h1 className="font-semibold text-left text-4xl"><b>Program Kerja</b></h1>
                    <br/>
                    <ul className="list-decimal ml-5">
                        <li>
                            <p className="text-justify">
                            R4G (Radio for God) - R4G merupakan proker bidang 1 berupa pemutaran lagu rohani sesuai jadwal tertentu melalui radio sekolah dan spotify (online) [ Find out more about this program on our spotify @smukiee ! ]
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            SOG (Servant of God) - Melalui SOG, dibuka kesempatan bagi siswa-siswi yang memiliki panggilan melayani dalam setiap kebaktian sebagai penatalayan (singer, WL, pemusik) 
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Bible Trivia - Program ini bertujuan untuk memperdalam pengetahuan siswa-siswi SMAK 1 mengenai Alkitab dalam bentuk pertanyaan quiz [ Find out more about this program on our instagram stories @smukiee ! ] 
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Sermon Recap - Menyediakan ringkasan khotbah dalam setiap kebaktian rutin 
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Kebaktian Rutin - Siswa-siswi mendapat kesempatan untuk bersekutu bersama dan belajar Firman Tuhan melalui kebaktian rutin sehingga dapat menerapkannya dalam kehidupan sehari-hari
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Kebaktian Natal - Menyediakan wadah bagi siswa-siswi untuk merayakan dan memperingati Natal sekaligus menutup tahun
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Doa Syafaat US, UAS, UN - Memotivasi serta menguatkan siswa-siswi untuk menghadapi UAS, US, dan UN dengan berserah kepada Tuhan
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Kebaktian Paskah - Merayakan dan memperingati Paskah sebagai sebuah bentuk ucapan syukur atas kasih Allah
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
