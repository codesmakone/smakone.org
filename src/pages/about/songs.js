import React from 'react'
import AboutLayout from '../../components/page_template/AboutLayout'
import Banner from "../../images/banner2.jpg"

export default function SongsPage() {
    const title = "Tentang Kami"
    const content = (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 pb-12">
            <div>
                <h2 className="font-medium text-3xl lg:text-5xl mt-12 justify-center text-center">
                    Mars BPK PENABUR
                </h2>
                <div className="mt-4 mb-8 iframe-container">
                <iframe
                    title="MARS BPK PENABUR"
                    src="https://www.youtube.com/embed/e6kY2wYT9_A" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                </div>
                <div>
                    <p className="justify-center text-center p-2">
                        Lirik:
                        <br />
                        <br />
                        Mari satukan langkahmu, lengan baju singsingkan <br />
                        Dalam karya t’rus berpacu, membangun masa depan <br />
                        Membentuk manusia baru, segambar Penciptanya <br />
                        Pendidikan agar maju, mencerdaskan umat-Nya <br />
                        <br />
                        <b>Reff:</b>
                        <br/>
                        Marilah taburkan kasih rakhmat Tuhan <br />
                        Hasil karyamu tingkatkan <br />
                        Marilah amalkan yang Tuhan sabdakan <br />
                        Untuk isi pembangunan <br />
                        <br />
                        Bertekunlah dan belajar, hai teruna harapan <br />
                        Hormat pada sang pengajar, ucapnya perhatikan <br />
                        Taat pada orang tua dan janganlah tekebur <br />
                        Timba ilmu yang berguna di BPK PENABUR <br />
                        <br />
                        <b>[Reff]</b>
                        <br /> <br />
                        Kristus sudah b’ri teladan kasih pada manusia <br />
                        Dia rela mengurbankan diri-Nya bagi dunia <br />
                        Mari kita menyatakan dan masyurkan kasih-Nya <br />
                        Iman, ilmu, pelayanan persembahkan pada-Nya <br />
                        <br />
                        <b>[Reff]</b>
                    </p>
                </div>
            </div>
            <div>
                <h2 className="font-medium text-3xl lg:text-5xl mt-12 justify-center text-center">
                    Cinta SMAK 1
                </h2>
                <div className="mt-4 mb-8 iframe-container">
                    <iframe
                        title="Cinta SMAK 1"
                        src="https://www.youtube.com/embed/3u_OEOwSBjE" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
                <div>
                    <p className="justify-center text-center p-2">
                    Lirik: 
                    <br />
                    <br />
                    Bersama kami datang <br />
                    Bersama kami blajar <br />
                    Menuntut ilmu tuk masa depan <br />
                    Dan jadi harapan bangsa <br />
                    <br />
                    SMAK 1 lah tempat kami <br />
                    SMAK 1 lah cinta kami <br />
                    Di SMAK 1 lah kita jaya <br />
                    Itulah semboyan kami <br />
                    <br />
                    Kami bangga padanya <br />
                    Dan berjanji kan setia <br />
                    Kami tidak kan mengecewakan <br />
                    Kami menjaga citra mu SMAK 1 <br />
                    <br />
                    Berdoa slalu padaNya <br />
                    Belajar dan bekerjalah <br />
                    Maju terus dan pantang mundur  <br />
                    Di SMAK 1 kita jaya 
                    </p>
                </div>
            </div>

        </div>
    )
    return (
        <AboutLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}