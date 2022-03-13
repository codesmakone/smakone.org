import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import Jacqueline from '../../images/team/Jacqueline.png'
import sheperd from '../../images/team/Shep1.png'
import davina from '../../images/team/davina.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Pembinaan Kepribadian Unggul, Wawasan Kebangsaan, dan Bela Negara</b></h1>
                <div>
                    <Osis
                        img={ sheperd } 
                        title="Sheperd Petra Karauwan" 
                        desc="Halo semua, perkenalkan nama aku Sheperd, koordinator OSIS Bidang 3. Aku lahir di Manado dan menetap di Jakarta semenjak menduduki bangku kelas 2 SD. Aku sangat menggemari hal-hal yang berkaitan dengan dunia sepakbola (Vamos Barca!) dan aku juga sangat gemar menonton film-film perang dan sejarah. Teruslah berusaha dan jangan takut untuk keluar dari zona nyaman kalian. Selalu lakukan yang terbaik dan apapun yang terjadi semuanya pasti akan sesuai kehendak yang Maha Kuasa. Hidup lebih bermakna ketika dijalani bersama-sama, oleh karena itu jadilah teman bagi mereka yang membutuhkan teman dan jadilah pundak bagi mereka yang memerlukan. Jangan takut” untuk contact kita kalau kalian ada masalah atau bingung tentang sesuatu. Oiya satu fun fact tentang aku, aku makan apapun suka yang panas dan hangat :)"
                    />
                </div>
                <div>
                    <Osis
                        img={ davina } 
                        title="Davina Natasha Ongsono" 
                        desc="Haii semuaa!! Perkenalkan namaku Davina, singkatnya boleh dipanggil Dav atau Davi. Tahun ini aku berada di kelas X MIPA dan aku adalah salah satu anggota OSIS bidang 3. Aku menghabiskan waktu luangku membaca novel dan mendengarkan musik. Sebagai pecinta novel, aku sangat menyukai novel remaja bergenre romantis dan fantasi, bahkan aku bisa menghabiskan satu novel dalam waktu yang sangat singkat! Kalau ada yang punya rekomendasi novel menarik atau mau tanya” seputar smukie, jangan ragu untuk contact aku yaa :)"
                    />
                </div>
                <div>
                    <Osis
                        img={ Jacqueline } 
                        title="Jacqueline Yang" 
                        desc="Hii semua! Perkenalkan, nama saya Jacqueline Yang, biasa dipanggil Jacqueline atau Jacq. Tahun ini, saya menjabat sebagai anggota OSIS Bidang 3. Selain OSIS, saya juga bergabung di beberapa organisasi lainnya, seperti Dewan Ambalan Pramuka (DA) dan One MUN (Model United Nation). Saya lahir di Jakarta, pada tanggal 9 Maret tahun 2006. Mendengarkan musik adalah salah satu hobi saya. Saya sangat suka mendengarkan musik saat belajar, terutama musik yang bergenre Jazz/RnB"
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                    Bidang 3 adalah bidang yang bertanggung jawab dalam kegiatan-kegiatan yang bertujuan untuk melatih dan mengembangkan kepribadian dan wawasan kebangsaan peserta didik serta menumbuhkan sikap bela negara. Pengembangan tersebut kami jalankan melalui program-program yang kami adakan seperti Perayaan-perayaan Hari Nasional, Pasukan Pengibar Bendera (Paskibra), Pramuka, dan berbagai program lainnya yang dapat menanamkan rasa cinta tanah air dalam diri peserta didik SMAK 1.    
                    </p>
                    <br/>
                    <h1 className="font-semibold text-left text-4xl"><b>Program Kerja</b></h1>
                    <br/>
                    <ul className="list-decimal ml-5">
                        <li>
                            <p className="text-justify">
                            Upacara Rutin Hari Selasa, OSIS Bidang 3 memupuk rasa nasionalisme dan membangun karakter cinta terhadap bangsanya sendiri melalui upacara rutin
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Upacara Hari Nasional, menyediakan wadah bagi siswa-siswi untuk merayakan dan memperingati hari-hari penting seperti Hari Kartini, Hari Lahir Pancasila, Hari Kemerdekaan Indonesia, dan hari-hari penting lainnya
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Perayaan Hari Kemerdekaan Republik Indonesia, OSIS Bidang 3 mengadakan perayaan 17 Agustus menjadi ajang bagi peserta didik untuk memupuk rasa cinta tanah air dan juga mempererat rasa persatuan dan kesatuan yang ada melalui kegiatan-kegiatan yang diadakan
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Paskibra, Pasukan Pengibar Bendera bertugas pada setiap kegiatan Upacara
                            </p>
                        </li>
                            <br />
                        <li>
                            <p className="text-justify">
                            Perayaan Hari Kartini : OSIS Bidang 3 membuat perayaan untuk Hari Kartini sebagai ajang bagi peserta didik untuk mengapresiasi jasa Ibu R.A Kartini
                            </p>
                        </li>
                            <br />
                        <li>
                            <p className="text-justify">
                            Perayaan Hari Guru : OSIS Bidang 3 mengadakan acara Perayaan Hari Guru sebagai ajang bagi peserta didik untuk memberi penghormatan dan menunjukkan rasa terima kasih kepada para guru yang sudah berjasa bagi mereka
                            </p>
                        </li>
                            <br />
                        <li>
                            <p className="text-justify">
                            Hari Batik Nasional
                            </p>
                        </li>
                        <li>
                            <p className="text-justify">
                            SAHANAYA
                            </p>
                        </li>
                        <li>
                            <p className="text-justify">
                            K1SAH 
                            </p>
                        </li>
                        <li>
                            <p className="text-justify">
                            Memo1rs : OSIS Bidang 3 membuat video pendek mengenai pahlawan-pahlawan Indonesia yang dapat dibilang "anti-mainstream" atau yang belum terlalu dikenal
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
