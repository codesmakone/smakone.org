import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Content from '../../components/block/Content'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import jonathan from '../../images/team/jonat.jpg'
import ferdinand from '../../images/team/ferdinand.jpg'
import mikhael from '../../images/team/mikhael.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK)</b></h1>
                <div>
                    <Osis
                        img={ jonathan } 
                        title="Jonathan Kristian" 
                        desc="Halo semua, aku Jonathan Kristian. Sekarang aku duduk di kelas 12. Kalian boleh panggil jonat, jo, nat ato mau bikin baru juga gapapa (ada yang manggil aku donat dan aku ga tersinggung kok :D). Fun fact, aku ga terlalu suka coklat :) "
                    />
                </div>
                <div>
                    <Osis
                        img={ ferdinand } 
                        title="Ferdinand" 
                        desc="Halo semua, perkenalkan saya Ferdinand, anggota OSIS Bidang 9. Saya lahir dan besar di Jakarta dan saya sangat menyukai hal-hal yang berhubungan dengan Fisika dan Astronomi. Jadi, bagi ada yang suka sama hal-hal tersebut, feel free untuk chat ke saya ya! Fun fact, aslinya saya pendiam banget lho!"
                    />
                </div>
                <div>
                    <Osis
                        img={ mikhael } 
                        title="Mikhael James Linsky" 
                        desc="Hi semua, nama saya Mikhael James Linsky kalian semua boleh panggil saya dengan MJ. Sekarang saya lagi duduk di kelas XI IPA. Aku punya hobi nonton anime (kalau punya recommendasi tolong kasih tau ya :D ), main game dan coding."
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                        Bidang 9, Bidang Pembinaan Teknologi Informasi dan Komunikasi (TIK) adalah bidang yang bertanggung jawab mengenai pemanfaatan TIK untuk melancarkan kegiatan-kegiatan ataupun acara di sekolah, seperti menjadi tim multimedia saat ada seminar. Selain itu, bidang 9 menggunakan TIK sebagai sumber informasi bagi para siswa agar dapat mengenal OSIS SMAK 1 lebih dalam lagi. Bidang 9  juga peduli akan talenta siswa-siswi SMAK 1. Salah satu bentuk kepeduliannya adalah dengan mewadahi siswa-siswi yang ingin mengembangkan talentanya di bidang desain dan perfilman dengan Monograph dan Shutterone.                    </p>
                    <br/>
                    <h1 className="font-semibold text-left text-4xl"><b>Program Kerja</b></h1>
                    <br/>
                    <ul className="list-decimal ml-5">
                        <li>
                            <p className="text-justify">
                                Website: Website merupakan program situs resmi OSIS SMAK 1 PENABUR Jakarta dimana terdapat informasi mengenai OSIS SMAK 1 dan acara-acara OSIS yang sudah maupun akan diadakan.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Photo Gallery: Berisikan dokumentasi yang berupa gambar dari acara SMAK 1. Photo Gallery dapat diakses bagi seluruh warga SMAK 1 di https://smakone.org/.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Shutter One: Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam video editing dan mendokumentasi foto maupun video dari sebuah acara.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                SMAK One Social Network: Sosial media (Instagram, Line, dan Youtube) resmi OSIS SMAK 1 PENABUR Jakarta yang memberikan konten mengenai program OSIS dan tempat untuk lebih berinteraktif antara OSIS dengan warga SMAK 1. 
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                G-Drive: Tempat penyimpanan online (Google Drive) dari OSIS untuk menyimpan prosata, proker, anggaran, dan laporan kegiatan.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                ANEWS: Tempat penerbitan berita terbaru mengenai hampir segala hal mengenai OSIS, SMAK 1, maupun acara-acara yang sudah atau akan diadakan.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Cashless Canteen: Metode pembayaran kantin yang tidak memakai uang tunai.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Monograph: Organisasi naungan OSIS SMAK 1 PENABUR Jakarta yang beranggotakan siswa-siswi bertalenta dalam membuat desain yang akan digunakan untuk acara.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                ONE-MEDIA: Tim multimedia OSIS SMAK 1 PENABUR Jakarta yang beranggotakan anggota OSIS Bidang 9 yang bertugas untuk melancarkan pelaksanaan kegiatan dan acara sekolah dan OSIS.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                ONECAST: Podcast resmi OSIS SMAK 1 PENABUR Jakarta yang dibawakan oleh peserta didik SMAK 1 dan dapat didengarkan Spotify.
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
