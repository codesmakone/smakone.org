import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Content from '../../components/block/Content'
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
                    <p className="text-left">
                        1. Christmas carol, adalah program berupa kunjungan ke panti jompo pada masa menjelang natal, disana akan diadakan semacam talent show yang fungsinya untuk menghibur para lansia disana,
                    </p>
                    <br/>
                    <p className="text-left">
                        2. Quozzy, adalah quiz berbasis quotes yang ada di instagram,
                    </p>
                    <br/>
                    <p className="text-left">
                        3. Spread the Word adalah program dimana anggota osis menyebarkan motivasi melalui media sosial instagram dan biasanya akan disebarkan lagi oleh siswa-siswi yang di-tag di media sosial instagram oleh anggota osis dan seterusnya
                    </p>
                    <br/>
                    <p className="text-left">
                        4. Tutorial for Others yang adalah program pengajaran anak-anak kurang beruntung yang diadakan bersama Yayasan Sahabat Anak, di mana kami  beserta para relawan siswa/i akan mengajarkan mereka pelajaran seperti matematika dasar, bahasa inggris dan lain-lain. 
                    </p>

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
