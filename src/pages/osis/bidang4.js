import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import Grant from '../../images/team/Grant.jpg'
import Michael from '../../images/team/Michael.jpg'
import geoffrey from '../../images/team/geoffrey.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK)</b></h1>
                <div>
                    <Osis
                        img={ Michael } 
                        title="Michael Evan Djunaidi" 
                        desc="Halo semuanyaaa, kenalin namaku Michael Evan Djunaidi, atau singkatnya bisa dipanggil ME. Selain bergabung di OSIS aku juga ikut beberapa organisasi lainnya, seperti SOC, dan juga TEDx. Hobi aku main musik dan fun fact about gua, gua harus tidur siang.  Kalo mao ada tanya-tanya di m.evan.d."
                    />                    
                </div>
                <div>
                    <Osis
                        img={ geoffrey } 
                        title="Geoffrey Li" 
                        desc="Hai semuanya,perkenalkan namaku Geoffrey Li atau biasa dipanggil Gio. Hobi aku itu olahraga dan bermain game. Fun fact tentang aku , kalau kak michael paling suka tidur siang aku paling anti tidur siang hehehehe. Kalau mau tanya-tanya lagi di @geoffrey.gio.li"
                    />
                    
                </div>
                <div>
                    <Osis
                        img={ Grant } 
                        title="Grant Wendra Halim" 
                        desc="Hai semua, perkenalkan nama aku Grant Wendra Halim, biasanya dipanggil Grant. Saat ini aku lagi duduk di kelas 11 MIPA. Hobi aku main basket, dan main game. Fun fact about aku, aku kalo lagi nulis pasti mulutnya ikutan gerak. Kalau ada yang mau kalian tanyakan, boleh contact aku di IG @granthalim"
                    />                    
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                    Bidang 4 atau Bidang Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK) adalah bidang yang bertanggungjawab dan berkolaborasi dengan sekolah dalam mendukung perkembangan prestasi siswa dan pemanfaatan IPTEK dalam proses belajar. Bidang 4 menyediakan wadah bagi siswa-siswi untuk mencari ilmu di luar jam belajar mengajar di kelas seperti program TTS yang mewadahi siswa untuk belajar dan mengajar teman-teman tentang bahan pelajaran, yang tentunya tidak dikenai biaya tambahan. Selain itu ada juga DollarxCent yang menjadi media bagi siswa/i untuk memperluas wawasan pengetahuan umum dan kemampuan berpikir out of the box. Tidak hanya terbatas pada pengembangan hard skills loh, tapi juga pengembangan soft skills seperti contohnya di TEDxYouth@SmakOne dimana siswa/i berkesempatan untuk menyampaikan ide-ide baru yang akan diperdengarkan kepada masyarakat luas. [tambahin program Uni-assist sama ask away]
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
                            Tutor Teman Sebaya - merupakan kegiatan yang mewadahi murid-murid yang memiliki talenta dalam suatu subjek untuk menyalurkan berkat yang mereka terima.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Dollar x Cent - merupakan story yang berisi dua pertanyaan yang di mana satu berjudul dollar yang berupa pengetahuan umum dan satunya lagi cent yang berupa teka teki dan riddles yang menuntut kita untuk berpikir outside of the box.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            UNI-ASS1ST - Memberikan informasi mengenai universitas. Mulai dari sejarah, jurusan, biaya, hingga jalur beasiswa melalui website sehingga murid-murid bisa mendapatkan gambaran yang lebih jelas akan universitas yang akan mereka pilih.
                            </p>
                        </li>
                        <li>
                            <p className="text-justify">
                            Ask Away - merupakan program talkshow yang mengundang beberapa alumni SMAK 1 untuk berbicara tentang fakultas - fakultas universitas serta kehidupan di universitas nantinya.
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
