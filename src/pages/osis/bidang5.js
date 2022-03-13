import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import gillian from '../../images/team/gillian.jpg'
import charmaine from '../../images/team/charmaine.jpg'
import Floo from '../../images/team/floo.jpg'

export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Bidang Pembinaan Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial Dalam Konteks Masyarakat Plural</b></h1>
                <div>
                    <Osis
                        img={ gillian } 
                        title="Gillian Season" 
                        desc="Helooo, semua! Aku Gillian Season sekarang kelas 11 IPA! Aku masuk OSIS bidang 5 ini karena aku suka berdiskusi soal isu-isu lingkungan dan sosial. Beberapa fun fact tentang diriku, aku hobi banget binge watch tv series! HAHAHA Feel free to reach out to me if you need someone to talk to or if you just want to fangirling film seri bareng <3"
                    />
                </div>
                <div>
                    <Osis
                        img={ charmaine } 
                        title="Charmaine Dominique"  
                        desc="Halo semuaaa! Hai, aku Charmaine, cara bacanya “carmen” aja dan aku kelas 10 MIPA! A little fun fact about me, aku suka hal - hal baru & aku tahan denger 1 lagu sampai 6 jam diulang - ulang lhoo! Jadi pastinya hobiku denger lagu dong ya hehe. Kalau mau ngobrol, bisa chat me through line (usernamenya nama panjangku) / dm me yaa (search for my name di followers ig smukie!) "
                   />
                </div>
                <div>
                    <Osis
                        img={ Floo } 
                        title="Florentina Gwendolyn"
                        desc="Haii semuanyaa🥰! Kenalin aku Floren dan sekarang aku kelas 10 MIPA. Hobby aku nonton film/series (mostly kdrama hihi) dan denger lagu. Kalau mau nanya-nanya atau ngobrol, feel free buat line or dm aku yaa @florentina_0328."
                     
                 />
                </div>
                <div>
                    <h1 className="font-semibold text-center text-4xl"><b>Deskripsi</b></h1>
                    <br/>
                    <p className="text-center">
                        Dalam OSIS SMAK 1 Penabur, Bidang 5 adalah Seksi Bidang yang melingkupi Pembinaan Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial dalam Konteks Masyarakat Plural. Program-program dalam bidang ini fokus dalam berbagai hal, seperti meningkatkan kemampuan siswa-siswi SMAK 1 dalam menyampaikan pendapat mereka, meningkatkan kesadaran warga SMAK 1 mengenai masalah lingkungan, dan lain-lain sesuai dengan nama bidang kami!
                    </p>
                    <br/>
                    <h1 className="font-semibold text-left text-4xl"><b>Program Kerja</b></h1>
                    <br/>
                    <ul className="list-decimal ml-5">
                        <li>
                            <p className="text-justify">
                            EcoVille, Berupa Artikel dan Quiz interaktif mengenai berbagai isu lingkungan hidup. Untuk gambaran yang lebih jelas, bisa check di instagram story kita yaa @smukiee.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            We Care merupakan program bidang 5 berupa video kampanye yang menyuarakan berbagai isu kemanusiaan dan lingkungan hidup. Check out video campaign kita di feeds @smukiee!
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Aspire, Asp1re merupakan wadah bagi seluruh siswa SMAK 1 untuk menyalurkan aspirasinya terhadap berbagai program OSIS yang berjalan, agar penyelenggaraan program tersebut dapat mengalami perbaikan di tahun-tahun berikutnya.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            One Vote, pelaksanaan pemilihan ketua dan wakil ketua OSIS.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Kompetisi Debat, kompetisi debat bahasa Indonesia yang akan dilaksanakan pada saat perayaan 17 Agustus.
                            </p>
                        </li>
                            <br/>
                        <li>
                            <p className="text-justify">
                            Kompetisi Pidato, Kompetisi berpidato yang akan diselenggarakan bersamaan dengan perayaan Hari Pahlawan.
                            </p>
                        </li>
                        <li>
                            <p className='text-justify'>
                            Bye Bye Plastic Bag Jakarta School Club, merupakan club yang fokus pada gerakan pengurangan penggunaan plastik di SMAK 1.
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
