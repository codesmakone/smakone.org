import React from 'react'
import AlumniPage from '../../components/page_template/AlumniPage'

import ScottMoses from '../../images/Card/ScottMoses.jpg'
import AlumniArticle from '../../components/Alumni/AlumniArticle'

export default function Scott() {
    return (
        <AlumniPage>
            <img src={ ScottMoses } className="h-96 mx-auto rounded-lg" alt="Scott Moses" />
            <h1 className="text-center mt-10 mb-8 font-bold text-5xl">
                Scott Moses
            </h1>
            <AlumniArticle>
                Scott Moses Sunarto yang akrab dipanggil “Scott” menjadi salah satu lulusan terbaik SMAK 1 PENABUR Jakarta. 
                Selama bersekolah di SMAK 1, ia telah berhasil memenangkan berbagai perlombaan termasuk kompetisi mancanegara 
                bergengsi, <i>Google Code-in</i>. Sepak terjangnya tidak berhenti sampai di situ. Setelah lulus, ia berhasil 
                mendapatkan kesempatan untuk bekerja di perusahaan <i>start-up</i> dengan penghasilan yang fantastis. 
            </AlumniArticle>
            <AlumniArticle>
                Dengan memenangkan <i>Google Code-in</i>, Scott telah berhasil membuat dirinya berbeda dari anak remaja pada umumnya. 
                Kompetisi itu sendiri memerlukan dedikasi dan semangat pantang menyerah yang tinggi untuk menyelesaikan berbagai 
                proyek yang diberikan. Melalui kompetisi ini, Scott telah memperlihatkan kecintaannya terhadap dunia pemrograman 
                komputer. Di saat yang bersamaan, ia juga mendapatkan pengalaman berharga dan kesempatan untuk mengasah kemampuan 
                pemrogramannya di dunia nyata dengan kasus nyata. Setelah lulus dari SMAK 1, ia langsung mendapatkan tawaran untuk 
                bekerja di salah satu perusahaan <i>start-up</i> di Indonesia. Dengan yakin ia mengambil kesempatan sekali seumur hidup ini. 
            </AlumniArticle>
            <AlumniArticle>
                Selain berkarya di dunia pemrograman computer, Scott juga aktif menjadi OSIS, panitia Smakonecup, dan komunitas 
                debat Bahasa Inggris atau <i>English Debate Society</i>(EDS). EDS merupakan salah satu eksukul yang bisa diikuti selama 
                menjadi murid di SMAK 1. EDS menjadi tempat untuk mengutarakan berbagai pendapatnya sekaligus mengasah kemampuannya 
                untuk berkomunikasi.  
            </AlumniArticle>
            <AlumniArticle>
                Semua yang berhasil ia raih bukan tanpa tantangan. Rasa ingin tahu yang tinggi membuat Scott mengikuti beragam kegiatan
                di SMAK 1. Di saat yang bersamaan, tugas utamanya sebagai murid, menambahkan beban di jadwalnya yang sudah sangat padat.
                Scott sendiri mengakui bahwa tantangan terbesarnya bisa ia temukan saat berusaha mengalokasikan waktu yang seimbang 
                antara melatih hal yang membuatnya tertarik dan tugas-tugas di sekolah. Selain itu, ia harus mengorbankan waktu liburannya 
                dan terus mengasah kemampuannya di bidang yang ia minati. 
            </AlumniArticle>
            <AlumniArticle>
                Saat ini, Scott sedangan menempuh pendidikan di Negeri Paman Sam dengan jurusan <i>Electrical Engineering and Computer Science</i>.
                Di waktu yang sama ia juga mengerjakan proyek “<i>garudahaks.com</i>” dan membangun proyek stealth blockchain.
            </AlumniArticle>
            <p className="pt-5 pb-20 text-gray-500 text-2xl mx-8 text-center">
                <i>
                    “Studying for school is important, but there is a huge world out there that you can explore by looking beyond the 
                    textbook and things you learn in school.”
                </i><br/>
                - Scott
            </p>
        </AlumniPage>
    )
}
