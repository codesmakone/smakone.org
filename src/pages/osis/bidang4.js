import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import jesselyne from '../../images/team/jesselyne.jpg'
import michael from '../../images/team/michael.jpg'
import geoffrey from '../../images/team/geoffrey.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK)</b></h1>
                <div>
                    <Osis
                        img={ jesselyne } 
                        title="Jesselyne Gratia Sylvian" 
                        desc="Hai semua kenalin nama aku Jesselyne Gratia Sylvian, biasa dipanggil Jejes. Jangan typo tulis nama tengah aku ya nanti aku dilelang :( Aku sekarang kelas 12 MIPA, hobi nari, berenang, tapi paling nyaman ya rebahan tanpa beban hehe. Funfact aku pernah …. coba cek ke Bidang 7 dulu baru balik lagi ke sini hehe. Oke sudah? Jawabannya tooth fracture :)"
                    />
                </div>
                <div>
                    <Osis
                        img={ michael } 
                        title="Michael Evan Djunaidi" 
                        desc="Hi guys, salam kenal, namaku Michael Evan , biasanya dipanggil Michael. Saat ini aku lagi duduk di kelas 11 MIPA. Untuk hobi, aku suka main musik, terutama gitar. Aku juga suka nonton drakor, terutama yang ada action sama romance. Anyway, aku kadang orangnya agak chatty, jadi kalau ada yang merasa terganggu ya feel free to tell me"
                    />
                </div>
                <div>
                    <Osis
                        img={ geoffrey } 
                        title="Geoffrey Li" 
                        desc="Halo semuanya salam kenal , namaku Geoffrey Li dan biasanya dipanggil Gio. Saat ini saya sedang duduk di kelas 11 MIPA. Nah kalau hobiku sendiri itu biasanya berhubungan dengan olahraga seperti menonton bola . Nah fun fact tentang aku ya gais , aku orangnya kalau ngomong suka cepet banget sampe kadang temenku ga ngerti sama yg aku ngomongin hehehehe . Jadi nanti kalo aku ngomongnya ada yang tidak jelas feel free buat tanya lagi aja ya"
                    />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                        Bidang 4, Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK) adalah bidang yang bertanggungjawab dan berkolaborasi dengan sekolah dalam mendukung perkembangan prestasi siswa dan pemanfaatan IPTEK dalam proses belajar. Bidang 4 menyediakan wadah bagi siswa-siswi untuk mencari ilmu di luar jam belajar mengajar di kelas seperti program TTS yang mewadahi siswa untuk belajar dan mengajar teman-teman tentang bahan pelajaran, yang tentunya tidak dikenai biaya tambahan. Selain itu ada juga DollarxCent yang menjadi media bagi siswa/i untuk memperluas wawasan pengetahuan umum dan kemampuan berpikir out of the box.Tidak hanya terbatas pada pengembangan hard skills loh, tapi juga pengembangan soft skills seperti contohnya di TEDxYouth@SmakOne dimana siswa/i berkesempatan untuk menyampaikan ide-ide baru yang akan diperdengarkan kepada masyarakat luas.
                    </p>
                    <br/>
                    <h1 className="font-semibold text-left text-4xl"><b>Program Kerja</b></h1>
                    <br/>
                    <ul className="list-decimal ml-5">
                        <li>
                            <p className="text-justify">
                                TEDxYouth@SmakOne - TEDxYouth@SmakOne merupakan event kolaborasi SMAK 1 dengan TED, media organisasi Internasional 
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Tutor Teman Sebaya - merupakan kegiatan yang mewadahi murid murid yang memiliki talenta dalam suatu subjek untuk menyalurkan berkat yang mereka terima
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                Dollar x Cent - merupakan story yang berisi dua pertanyaan yang di mana satu berjudul dollar yang berupa pengetahuan umum dan satunya lagi cent yang berupa teka teki dan riddles yang menuntut kita untuk berpikir outside of the box
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                                ASS1ST - berisi jurusan jurusan yang dapat siswa pilih untuk universitas nanti serta list untuk beberapa universitas yang direkomendasikan untuk jurusan tersebut
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
