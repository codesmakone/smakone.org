import React from 'react'
import { Link } from 'gatsby'
import SmukierzLayout from '../../components/page_template/SmukierzLayout'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'

import Banner from "../../images/17an.jpg"
import Tips from "../../images/tips.jpg"


export default function TipsPage() {
    const title = "Kegiatan"
    const content = (
        <div className="container mx-auto"> 
            <KegiatanSection
                title="Tips Belajar SMUKIERZ"
                subtitle='"Selalu berusaha meraih yang terbaik"'
                img={Tips}
                alt="belajar"
            />
            <div>
            <p className="justify-center text-justify p-2">
                Dengan banyaknya kegiatan murid SMAK 1 baik akademis, maupun juga non-akademis. Diperlukan strategi untuk mencapai keseimbangan antara 
                berkegiatan dan istirahat. Menjadi tantangan tersendiri bagi para siswa. Cara belajar yang efektif merupakan salah satu kunci dalam 
                menjaga keseimbangan ini. Berikut merupakan beberapa tips yang dapat memudahkan kita dalam proses pembelajaran.
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Membuat to-do list
            </h2>
            <p className="justify-center text-justify p-2">
                Banyaknya tugas dan ulangan terkadang membuat siswa-siswi kewalahan. Saat kewalahan, akan lebih sulit bagi kita untuk membagi waktu dengan baik. 
                Alhasil, kita akan tidur lebih larut, belajar menggunakan Sistem Kebut Semalam (SKS), hingga telat mengumpulkan tugas. Maka dari itu, sangat 
                penting bagi kita untuk menyusun keseharian dengan bantuan <i>to-do list</i> atau <i>planner</i>. <i>To-do list</i> dan <i>planner</i> dapat dapat membantu kita untuk membuat 
                skala prioritas, serta dalam menetapkan target-target keseharian. Akan tetapi, harus diingat bahwa target yang telah ditetapkan juga harus diwujudkan.
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Menguji diri
            </h2>
            <p className="justify-center text-justify p-2">
                Riset membuktikan bahwa otak kita perlu diuji dengan metode retrieval practice, dimana kita menguji ulang materi yang dipelajari agar dapat 
                benar-benar dipahami di dalam otak. Kita dapat mengujinya dengan mengerjakan berbagai latihan soal. Banyaknya soal latihan yang diberikan 
                guru sebaiknya tidak dijadikan beban, tetapi sebagai bagian dari pembelajaran.Sedangkan, untuk hafalan, kita dapat membuat pertanyaan-pertanyaan 
                dengan media <i>flashcards</i>, baik menggunakan kertas maupun media digital.
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Membuat kelompok belajar
            </h2>
            <p className="justify-center text-justify p-2">
                Kelompok belajar sangat membantu dalam kegiatan belajar. Mereka berfungsi sebagai <i>support</i> system untuk kita dan sebaliknya. Sesama anggota 
                kelompok belajar bisa saling mengingatkan satu sama lain untuk belajar, melontarkan pertanyaan untuk menguji pemahaman, dan saling berbagi 
                catatan kita agar materi pembelajaran menjadi lebih lengkap. Hal ini tentunya akan  menguntungkan setiap orang dalam proses pembelajaran.
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Istirahat
            </h2>
            <p className="justify-center text-justify p-2">
                Istirahat diperlukan untuk membantu meningkatkan kemampuan otak dan mempertajam ingatan . Proses belajar yang ideal adalah belajar sekitar 
                45 menit lalu diselingi istirahat beberapa menit. Akan lebih ideal, bila bahan tersebut dicicil dengan jeda waktu yang cukup terutama untuk 
                materi hafalan. Dengan begitu, kita dapat beristirahat dengan waktu yang cukup. Jangan paksakan otak untuk belajar berjam-jam. Ingatlah bahwa 
                selain belajar, kita harus tetap memperhatikan kesehatan fisik dan mental kita.
            </p>
            <p className="justify-center text-justify px-2 pt-2 pb-12">
                Selain beberapa tips tersebut, hal yang dibutuhkan untuk mewujudkan proses pembelajaran yang efektif adalah Pola pikir <i>growth mindset</i>. 
                <i>Growth mindset</i> merupakan sebuah pola pikir yang menekankan bahwa kecerdasan kita dapat terus menerus berkembang jika kita berusaha. 
                Dengan memiliki pola pikir ini, siswa- siswi diharapkan untuk menjadi lebih pantang menyerah dan lebih berani dalam menghadapi tugas maupun 
                penilaian yang menantang. 
            </p>
            </div>
        </div>
    )
    return (
        <SmukierzLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}
