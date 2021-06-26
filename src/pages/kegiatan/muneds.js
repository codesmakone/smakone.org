import React from 'react'
import { Link } from 'gatsby'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import KegiatanLayout from '../../components/page_template/KegiatanLayout'

import MUN from '../../images/kegiatan/MUN.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function MUNEDSPage() {
    const title = "Kegiatan"
    const content = (
        <div className="container mx-auto"> 
            <KegiatanSection
                title="Model United Nation dan English Debate Society"
                subtitle='"Perdebatan dan persahabatan yang membangun"'
                img={MUN}
                alt="MUN"
            />
            <p className="justify-center text-justify p-2">
                SMAK 1 memiliki ekstrakulikuler MUN dan English Debate Society (EDS) yang keduanya merupakan ekskul berbasis bahasa inggris. 
                Kegiatan ini sangat cocok untuk siswa-siswi yang ingin melatih ataupun menyalurkan kemampuan berbahasa inggris mereka. Tujuan 
                utama dari kedua kegiatan ini adalah untuk melatih kerjasama, berpikir kritis, negosiasi, dan public speaking. Mereka banyak 
                membahas mengenai isu-isu politik, hukum, lingkungan, dan juga topik-topik yang lebih ringan seperti percintaan, film, dan 
                dunia fantasi. Selain itu, kedua ekskul ini juga memiliki klub masing-masing yang dikhususkan untuk melatih siswa-siswi SMAK 1 
                Penabur Jakarta yang akan mengikuti berbagai lomba di tingkat SMA, Kabupaten/Provinsi, Nasional, dan bahkan Internasional. 
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                English Debate Society
            </h2>
            <p className="justify-center text-justify p-2">
                English Debate Society (EDS) merupakan ekskul debat bahasa inggris yang diadakan setiap hari Senin setelah pulang sekolah sampai 
                Pukul 14.30 . Ekskul ini didampingi oleh guru bahasa inggris SMAK 1 Jakarta bersama dengan salah satu pelatih dari Tim World 
                School Debating Championship (WSDC) Indonesia, Novelisa Wirid. Dalam ekskul EDS, siswa dan siswi akan dibentuk kedalam beberapa 
                tim dan berdebat dengan tim lawan yang sudah diatur oleh BPH EDS. BPH EDS sendiri merupakan perwakilan siswa dan siswi yang dipilih 
                oleh seluruh anggota ekskul dengan suara terbanyak untuk mengatur jalannya ekskul EDS. 
            </p>
            <p className="justify-center text-justify p-2">
                Setiap tahun, klub EDS mengadakan seleksi bagi siswa dan siswi yang ingin berpartisipasi. Siswa dan siswi yang terpilih dari seleksi 
                akan mengikuti latihan tambahan dan dilatih selama beberapa bulan sebagai persiapan dalam mengikuti berbagai lomba. 
            </p>
            <p className="justify-center text-justify p-2">
                Dari tahun-tahun sebelumnya, SMAK 1 Jakarta sendiri sudah dikenal dengan prestasinya dalam English Debate. Sebagai bukti, selama 5 
                tahun berturut-turut, siswa dan siswi dari EDS selalu berhasil memenangkan lomba tingkat nasional yaitu National School Debating 
                Championship (NSDC) mewakili Jakarta sekaligus membawa nama SMAK 1. Selain lomba-lomba tingkat nasional, pada tahun 2017 siswi SMAK 
                1 yaitu Kelly Laurencia berhasil lanjut ke ajang internasional dalam perlombaan Croatia WSDC. 
            </p>
            <h2 className="justify-left text-left font-bold px-2 pt-4 pb-2">
                Model United Nation
            </h2>
            <p className="justify-center text-justify p-2">
                Model United Nations (MUN) merupakan ekskul simulasi sidang PBB. Para peserta merupakan perwakilan delegasi dari negara yang berbeda-beda.  
                Ekskul ini didampingi oleh guru bahasa inggris SMAK 1 Jakarta bersama dengan Leonardi Andika sebagai pelatih. MUN dilaksanakan setiap hari 
                Sabtu dari pukul 08.00-11.00. Dalam ekskul ini, peserta akan mempelajari hubungan internasional, diplomasi, United Nations (UN), dan 
                juga berbagai keterampilan seperti bernegosiasi, menulis, dan public speaking. Sama seperti EDS, MUN juga mempunyai seleksi klub dan BPH 
                sebagai pengurus kegiatan ekskul MUN. 
            </p>
            <p className="justify-center text-justify px-2 pt-2 pb-12">
                Bagi siswa-siswi yang berminat dapat mengunjungi akun instagram @one.mun untuk mendapatkan informasi lebih lanjut seputar lomba, webinar, 
                dan prestasi lainnya.
            </p>
            <div className="pb-12">
                <div className="text-center">
                    <Link className="text-white btn bg-blue-500" target="blank" to="https://www.instagram.com/one.mun/">
                        Kenali Lebih Lanjut {">"}
                    </Link>
                </div>
            </div>
        </div>
    )
    return (
        <KegiatanLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}
