import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import meilista from '../../images/team/meilista.jpg'
import sheperd from '../../images/team/sheperd.jpg'
import sherley from '../../images/team/sherley.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Pembinaan Kepribadian Unggul, Wawasan Kebangsaan, dan Bela Negara</b></h1>
                <div>
                    <Osis
                        img={ meilista } 
                        title="Meilista Angelica Hierenvira" 
                        desc="Hai semua, nama saya Meilista Angelica Hierenvira, koordinator OSIS Bidang 3. Tahun ini saya berada di kelas 12 dan hobi saya adalah menonton film dan juga membaca buku"
                    />
                </div>
                <div>
                    <Osis
                        img={ sheperd } 
                        title="Sheperd Petra Karauwan" 
                        desc="Halo semua, perkenalkan nama saya Sheperd, anggota OSIS Bidang 3. Saya lahir di Manado dan menetap di Jakarta semenjak menduduki bangku kelas 2 SD. Saya sangat menggemari hal-hal yang berkaitan dengan dunia sepakbola dan saya juga sangat gemar menonton film-film perang dan action."
                    />
                </div>
                <div>
                    <Osis
                        img={ sherley } 
                        title="Sherley Aurellia Pricilla Bong" 
                        desc="Hello, nama saya Sherley Aurellia Pricilla Bong, anggota OSIS Bidang 3. Saya senang menonton film, cartoon, serial tv, dan mencoba makanan-makanan baru."
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                        Bidang 3 adalah  bidang yang bertanggung jawab dalam kegiatan-kegiatan yang bertujuan untuk melatih dan mengembangkan kepribadian dan wawasan kebangsaan peserta didik serta menumbuhkan sikap bela negara. Pengembangan tersebut kami jalankan melalui program-program yang kami adakan seperti Perayaan-perayaan Hari Nasional, Pasukan Pengibar Bendera (Paskibra), Pramuka, dan berbagi program lainnya yang dapat menanamkan rasa cinta tanah air dalam diri peserta didik SMAK 1.
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
                                Perayaan Hari Kemerdekaan Republik Indonesia, OSIS Bidang 3 mengadakan perayaan 17 Agustus menjadi ajang bagi peserta didik untuk memupuk rasa cinta tanah air dan juga mempererat rasa persatuan dan kesatuan yang ada melalui kegiatan-kegiatan yang diadakan.
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
                                RESTORE : OSIS Bidang 3 membuat program bagi peserta didik untuk berekreasi ke destinasi wisata di Indonesia untuk menambah wawasan tentang budaya Indonesia 
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
