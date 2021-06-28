import React from 'react'
import AboutLayout from '../../components/page_template/AboutLayout'
import Content from '../../components/text_helper/Content'
import Banner from "../../images/banner2.jpg"

export default function HistoryPage() {
    const title = "Sejarah, Visi, dan Misi SMAKONE"
    const content = (
        <Content>
            <h2 className="justify-left text-left font-bold text-lg pt-4 pb-2">
                Visi SMAK 1:
            </h2>
            <p className="justify-center text-justify p-2">
            Mewujudkan sumber daya berkualitas unggul dalam ilmu pengetahuan dan teknologi 
            serta peduli terhadap sesama berdasarkan nilai-nilai hidup Kristiani.
            </p>
            <h2 className="justify-left text-left font-bold text-lg pt-4 pb-2">
                Misi SMAK 1:
            </h2>
            <ul className="list-disc px-6 pt-2 pb-12">
                <li>Menyiapkan calon inventor / ilmuwan masa depan yang menguasai ilmu pengetahuan dan teknologi, kreatif, inovatif, mandiri, dan proaktif serta mempunyai landasan iman yang teguh</li>
                <li>Meningkatkan profesionalisme tenaga kependidikan sesuai perkembangan dunia pendidikan</li>
            </ul>
            <h2 className="justify-left text-left font-bold text-lg pt-4 pb-2">
                History:
            </h2>
            <p className="justify-center text-justify p-2">
            SMAK 1 PENABUR Jakarta didirikan pada tahun 1947 sebagai MULO (Meer Uitgebreid Lager Onderwijs, 
            sekolah menengah Kolonial Belanda) di lokasi lamanya di Jalan Pintu Air 11 (kemudian dikenal sebagai Sluis Brugstraat 11). 
            Dipimpin oleh J.C. Boss (1947–1950), seorang ahli matematika. Pada tahun berikutnya, sekolah tersebut berganti nama menjadi 
            CVS (Christelijke Vereniging Scholen, Christian Association School), dan kepemimpinannya diambil alih oleh Dr. Van Der Meer (1950–1951).
            </p>
            <p className="justify-center text-justify p-2">
            Menyusul berakhirnya penjajahan Belanda di Indonesia pada tahun 1945, CVS diserahkan kepada THKTKH (Tiong Hoa Kie Tok Kauw Hwee, 
            Persatuan Kristen Tionghoa) dan berganti nama menjadi SMA Istimewa (Sekolah Menengah Luar Biasa). Saat itu, pembelajaran dilakukan dalam bahasa Mandarin dan bahasa Indonesia.
            </p>
            <p className="justify-center text-justify p-2">
            Pada tanggal 1 Agustus 1950, SMA Istimewa diambil alih oleh Yayasan BPK Jabar, dan sekolah tersebut mengalami pembenahan besar-besaran. 
            Salah satu perubahan tersebut adalah penyesuaian namanya menjadi SMAK 1 (Sekolah Menengah Atas Kristen 1) dan penggunaan bahasa Indonesia sebagai satu-satunya bahasa pengantar. 
            Penambahan kata "Kristen" (Kristen) dilakukan untuk mempertegas akar dan nilai-nilai Kristiani.
            </p>
            <p className="justify-center text-justify p-2">
            Pada tahun 1956, sekolah tersebut terpilih <b>sebagai sekolah percontohan</b> untuk pengembangan sekolah-sekolah lain di Jakarta. 
            Pada tahun yang sama SMAK 1 juga mencatatkan rekor tertinggi Ujian Nasional Fisika dan Kimia Indonesia, <b>prestasi yang diraih hingga saat ini</b>.
            </p>
            <p className="justify-center text-justify px-2 pt-2 pb-12">
            Pada bulan Maret 1989, BPK Jabar KPS Jakarta berganti nama menjadi BPK PENABUR KPS Jakarta. Pada tahun yang sama SMAK 1 dipindahkan ke lokasi saat ini di Jalan Tanjung Duren Raya. 
            Sekolah ini memiliki kantin, lapangan olahraga, laboratorium sains, perpustakaan, auditorium, laboratorium bahasa, ruang musik dan dansa, rumah kaca, pusat konseling siswa, ruang OSIS, 
            aula pertemuan besar (untuk 1000 orang), dua puluh tujuh ruang kelas, dan berbagai fasilitas lainnya.
            </p>
        </Content>
    )
    return (
        <AboutLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}
