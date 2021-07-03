import React from 'react'
import SmukierzLayout from '../../../components/page_template/SmukierzLayout'
import AlumniArticle from '../../../components/alumni/AlumniArticle'

import Michael from '../../../images/Card/MichaelAbimanyu.jpg'
import Banner from "../../../images/17an.jpg"

export default function MichaelPage() {
    const title = "Kehidupan SMUKIERZ"
    const content = (
        <div className="grid grid-cols-1 gap-3 py-5">
            <div className="pb-20">
            <img src={ Michael } className="lg:h-96 mx-auto rounded-lg" alt="Michael Abimanyu" />
            <h1 className="text-center mt-5 font-bold text-5xl">
                Michael Abimanyu
            </h1>
            <p className="text-center mb-8">"Pianis sekaligus musisi andalan SMUKIERZ"</p>
            <AlumniArticle>
                Michael Abimanyu merupakan siswa SMAK 1 yang dikenal karena kemampuan bermain musiknya yang luar biasa. Michael tertarik ke dalam musik pada usia 
                tiga tahun. Ketika ia mendengar suara piano di rumah teman ayahnya, Michael yang berusia tiga tahun terkagum dengan indahnya melodi dari piano 
                tersebut. Ayahnya sadar akan ketertarikan dan bakat Michael. Saat berusia empat tahun, Michael mulai belajar piano klasik dari dasar dan mulai 
                mengikuti banyak kegiatan piano klasik, termasuk berkompetisi. 
            </AlumniArticle>
            <AlumniArticle>
                Dengan dedikasinya, Michael terus mencetak prestasi dalam berbagai kompetisi di bidang musik. Contohnya adalah <i>Prize Winner</i> di <i>Ávila International 
                Music Festival</i> dan di <i>WPTA Finland International Piano Competition</i>. Selain itu, Michael mendapatkan <i>Gold Prize Winner</i> di <i>WPTA International 
                Singapore Performers Festival</i>.
            </AlumniArticle>
            <AlumniArticle>
                Selain musik klasik, Michael juga memiliki ketertarikan akan musik genre jazz, pop, dan rock. Michael  mencoba belajar bermain musik dengan genre-genre 
                tersebut secara otodidak. Ia pun sering tampil membawakan genre-genre tersebut di berbagai acara. Alat musik yang Michael mainkan, bukan hanya piano 
                atau keyboard, tetapi juga bass, drum, gitar, biola, dan saxophone.
            </AlumniArticle>
            <AlumniArticle>
                Michael menjadi keyboardist band SMAK 1, yaitu Cressendo. Ia juga berpartisipasi dalam memainkan synthesizer. Selama bergabung dengan Cressendo, 
                Michael sudah memiliki banyak pengalaman bermain musik di acara-acara sekolah, misalnya di Smukiez Theatre Night (STN), Smak One Cup (SOC), 
                Acara Tujuh-Belas Agustus, CNYxVals, dan masih banyak lagi. Selain itu, Michael sering berpartisipasi dalam pelayanan praise and worship di SMAK 1. 
                Selama berpartisipasi dalam Cressendo, ia telah mencetak berbagai prestasi. Salah satunya adalah Michael pernah mendapatkan award sebagai best 
                keyboardist pada lomba band di SMAK 3.
            </AlumniArticle>
            <AlumniArticle>
                Menurut Michael, adanya club musik seperti Crescendo dan SYC (<i>Smukiez Youth Chamber</i>) dapat menjadi sarana pengembangan potensi murid yang berminat 
                dalam musik. Menurutnya, dengan adanya bimbingan guru dalam proses pengembangan potensi ini, ia merasa terbantu untuk mengembangkan potensinya.
            </AlumniArticle>
            <AlumniArticle>
                Michael juga mengakui bahwa membagi waktu antara belajar dan kegiatan bermusik memang menantang. Namun, dengan manajemen waktu dan prioritas yang tepat,
                SMAK 1 adalah sekolah yang cukup baik bagi anak-anak yang menggemari musik. Jadi, sebagai siswa SMAK 1 yang juga fokus dalam musik akan lebih baik apabila 
                dapat membagi waktu antara belajar dan kegiatan pengembangan diri.
            </AlumniArticle>
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