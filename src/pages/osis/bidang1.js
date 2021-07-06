import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import jolene from '../../images/team/jolene.jpg'
import raynard from '../../images/team/Raynard.jpg'
import beatrice from '../../images/team/beatrice.jpg'

export default function bidang1() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Pembinaan Keimanan dan Ketakwaan Terhadap Tuhan Yang Maha Esa</b></h1>
                <div>
                    <Osis
                        img={ jolene } 
                        title="Jolene Eleora Mok" 
                        desc="Hi Guys! Namaku Jolene Eleora Mok dan saat ini duduk dibangku kelas 12 MIPA. Aku punya hobi yang simple, mendengarkan lagu & fun fact about me, aku anak rantau, hehe. Jadi, kalau kalian dari luar kota juga (or not), feel free to share anything with me."
                    />
                </div>
                <div>
                    <Osis
                        img={ raynard } 
                        title="Raynard Valere Ho" 
                        desc="Hi!! Nama aku Raynard Valere Ho, biasa dipanggil Ray dan saat ini aku adalah anak kelas 12 IPS. Hobi aku banyak banget, tapi yang paling aku suka adalah nonton film dan dengar lagu. Lagu yang aku suka dengar itu lagu pop, gospel, dll. Kalau film yang aku suka tonton itu series Barat, drama Korea, film thriller, dll. Fyi aja, aku kalau udah nonton film bisa maraton dan gak berhenti-berhenti, hahahaha. Btw, kalau kalian mau tanya apapun tentang aku atau tentang sekolah, jangan malu buat tanya yaa."
                    />
                </div>
                <div>
                    <Osis
                        img={ beatrice } 
                        title="Beatrice Valerina Djayasaputra" 
                        desc="Hi! Namaku Beatrice Valerina Djayasaputra dan saat ini merupakan murid kelas 11 MIPA. Untuk melepas penat, I like to play the keys & watch films! Fun Fact tentang ku, aku pernah berperan menjadi Cinderella di performance TK-ku dan pakai glass slipper beneran loh! Hahaha. Kalau kalian mau tanya tentang apapun atau tahu lebih banyak tentang aku, don’t hesitate to reach out!"
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                        Bidang 1 adalah bidang yang berperan dan bertanggung jawab dalam pembinaan kegiatan keagamaan kristen di sekolah, salah satunya melalui kegiatan kebaktian yang rutin diadakan 1x dalam sebulan yang diikuti oleh seluruh guru, karyawan, dan siswa SMAK 1. Selain itu, melalui program kerja lainnya seperti R4G, SOG, dan Bible Trivia pengurus terus berusaha untuk mendorong pertumbuhan rohani seluruh warga SMAK 1. 
                    </p>
                    <br/>
                    <h1 className="font-semibold text-left text-4xl"><b>Program Kerja</b></h1>
                    <br/>
                    <ul className="list-decimal ml-5">
                        <li>
                            <p className="text-justify">
                                Kebaktian Rutin Tujuan : Siswa-siswi mendapat kesempatan untuk bersekutu bersama dan belajar Firman Tuhan sehingga dapat menerapkannya dalam kehidupan sehari-hari
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Kebaktian Natal Tujuan : Menyediakan wadah bagi siswa-siswi untuk merayakan dan memperingati Natal sekaligus menutup tahun
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Doa Syafaat US, UAS, UN Tujuan : Memotivasi serta menguatkan siswa-siswi untuk menghadapi UAS, US, dan UN dengan berserah kepada Tuhan
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Kebaktian Paskah Tujuan : Merayakan dan memperingati Paskah sebagai sebuah bentuk ucapan syukur atas kasih Allah
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                R4G (Radio for God) - R4G merupakan proker bidang 1 berupa pemutaran lagu rohani sesuai jadwal tertentu melalui radio sekolah Tujuan : Menyediakan wadah bagi siswa-siswi untuk dapat mengalami persekutuan dengan Tuhan melalui lagu-lagu rohani
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                SOG (Servant of God) - Melalui SOG, dibuka kesempatan bagi siswa-siswi yang memiliki panggilan melayani dalam setiap kebaktian sebagai penatalayan (singer, WL, pemusik) Tujuan : Menyediakan sarana bagi siswa-siswi yang rindu untuk melayani Tuhan
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Bible Trivia - Find out more about this program on our instagram stories @smukiee ! Tujuan : Memperdalam pengetahuan siswa-siswi SMAK 1 mengenai Alkitab dalam bentuk pertanyaan kuis
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Sermon Recap - Menyediakan ringkasan khotbah dalam setiap kebaktian rutin Tujuan : Meng-highlight intisari dari khotbah yang telah dibawakan dalam kebaktian
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
