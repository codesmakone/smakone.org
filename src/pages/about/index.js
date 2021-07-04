import React from 'react'
import AboutLayout from '../../components/page_template/AboutLayout'
import FAQ from '../../components/about/faq'
import Banner from "../../images/banner2.jpg"


export default function AboutPage() {
    const title = "Tentang Kami"
    const content = (
        <div className="container mx-auto pb-12">
            <h2 className="font-medium text-3xl lg:text-5xl mt-12 justify-center text-center">
                Sekilas Tentang SMAK 1
            </h2>
            <div className="mb-8 iframe-container">
                {/*
                <img src={Banner} alt="sementara"/>
                
                <video controls>
                    <source src={LifeAtSMAKONE} type="video/mp4"/>
                </video>
                */}
            </div>
            <p className=" text-justify p-2 pb-5">
                SMAK 1 PENABUR merupakan sekolah Kristen bergengsi di wilayah Tanjung Duren, Jakarta. Dengan visi untuk mewujudnyatakan sekolah unggul yang 
                bermotivasi dalam iman, ilmu dan pelayanan, SMAK 1 bertujuan untuk mengembangkan potensi para peserta didik secara optimal berdasarkan teladan 
                nilai Kristiani. Program pembelajaran SMAK 1 memberi pemahaman bagi siswa-siswi melalui penggunaan kurikulum nasional. 
                Selain itu, siswa-siswi juga dibekali dengan pembelajaran non-akademik, misalnya melalui kegiatan ekstrakurikuler dan acara-acara sekolah. 
                Proses pembelajaran didukung dan ditunjang oleh guru-guru yang kompeten, bimbingan konseling dan fasilitas yang lengkap. SMAK 1 pun dikenal 
                dengan prestasi-prestasi yang cemerlang baik di bidang akademis maupun non-akademis, internasional maupun nasional.
            </p>
            <h2 className="justify-left text-left text-xl font-bold px-2 pt-12">
                Pertanyaan yang Sering Ditanyakan
            </h2>
            <FAQ
                qtn='Apakah pelajaran di SMAK 1 sulit?'
                ans='Setiap murid SMAK 1 sudah melewati tes seleksi dengan standar yang tidak rendah sehingga kecerdasan akademik muridnya tidak perlu diragukan lagi. 
                    Ritme belajar di SMAK 1 tentu lebih cepat dibandingkan sekolah lainnya karena materi yang dipelajari lebih dalam dan bervariasi, sehingga susah 
                    atau tidaknya itu relatif dan tergantung dengan kecepatan belajar siswa dalam mengikuti ritme belajar SMAK 1.'
            />
            <FAQ
                qtn='Apakah keseharian murid SMAK 1 hanya belajar?'
                ans='Tentu yang wajib adalah giat belajar, bukan belajar terus-menerus. Menjadi murid SMAK 1 tentunya juga masih bermain dan bersenang-senang. 
                    Namun, pembagian waktu yang baik merupakan kunci sukses di SMAK 1.'
            />
            <FAQ
                qtn='Apakah perlu mengikuti les/bimbel tambahan di luar sekolah?'
                ans='Tidak! Kalian masih bisa mengikuti pelajaran dengan baik tanpa les. Kurikulum di SMAK 1 sudah dirancang untuk mudah dimengerti. Selama 
                    siswa/i fokus mendengarkan penjelasan guru dan belajar giat secara mandiri, pasti bisa memperoleh hasil yang memuaskan.'
            />
            <FAQ
                qtn='Seperti apa guru-guru di SMAK 1?'
                ans='Guru-guru di SMAK 1 telah melalui proses seleksi yang panjang. Sehingga, bisa dipastikan semuanya berkompeten di bidangnya masing-masing. 
                Benar, Setiap guru mempunyai cara dan karakter masing-masing dalam mengajar. Tetapi, semua guru di SMAK 1 pasti bersedia untuk menjawab pertanyaan
                setiap siswa yang belum memahami materi pembelajaran. Bahkan, beberapa guru juga tidak merasa keberatan bila dihubungi diluar jam pelajaran.'
            />
            <FAQ
                qtn='Berapa lama kegiatan belajar dan mengajar dalam satu hari?'
                ans='Setiap hari, ada 9-10 jam pelajaran, dengan 1 jam pelajaran berdurasi 45 menit.'
            />
            <FAQ
                qtn='Pelajaran lintas minat apa saja yang bisa dipilih?'
                ans='SMAK 1 menyediakan pelajaran lintas minat yang terdiri dari Bahasa Inggris, Mandarin, Jerman, Jepang, dan TIK, yang bebas kalian pilih. 
                Khusus untuk jurusan MIPA, kalian juga dapat memilih lintas minat ekonomi.'
            />
            <FAQ
                qtn='Apa terdapat tes IGCSE, O level, SAT, dan sebagainya sehingga bisa memudahkan untuk mendaftar di perguruan tinggi luar negeri?'
                ans='Untuk saat ini, kurikulum SMAK 1 adalah kurikulum nasional sehingga tidak menyediakan tes tersebut. Namun, terdapat bimbingan IELTS 
                dan simulasi tesnya untuk mempersiapkan siswa/i SMAK 1 dalam mengahadapi tes sesungguhnya yang biasanya menjadi salah satu syarat untuk 
                mendaftar ke universitas.'
            />
            <FAQ
                qtn='Apa saja kegiatan yang ada di SMAK 1?'
                ans='Ada banyak sekali kegiatan yang bisa kalian ikuti di SMAK 1. Mulai dari ekstrakurikuler, kegiatan-kegiatan yang diselenggarakan OSIS 
                maupun sekolah, hingga klub sains dan klub non-akademis, seperti F1RST, Smukiez Choir, KR1ZA, dan masih banyak lagi. Ada juga organisasi-
                organisasi yang bisa kalian ikut seperti OSIS, MPK, dan Pramuka, serta panitia Smakonecup.'
            />
            <h2 className="justify-left text-left font-semibold px-2 pt-4">
                Sekarang saya mau mendaftarkan diri menjadi siswa/i SMAK 1. Bagaimana caranya?
            </h2>
            <p className=" text-justify p-2">
                Untuk cara pendaftaran, kalian bisa memantau sosial media dan juga website resmi 
                <a href='https://psb.bpkpenaburjakarta.or.id' className="text-blue-500"> BPK PENABUR </a> atau 
                Instagram <a href='https://www.instagram.com/smak1penabur/' className="text-blue-500"> @smak1penabur </a>.
            </p>
        </div>
    )
    return (
        <AboutLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}
