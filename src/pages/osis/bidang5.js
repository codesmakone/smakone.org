import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Content from '../../components/block/Content'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import gillian from '../../images/team/gillian.jpg'
import stephanie from '../../images/team/stephanie.jpg'


export default function bidang2() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b> Pembinaan Demokrasi, Hak Asasi Manusia, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial Dalam Konteks Masyarakat Plural</b></h1>
                <div>
                    <Osis
                        img={ gillian } 
                        title="Gillian Season" 
                        desc="Halo, semua! Aku Gillian Season dan aku murid kelas 11 IPA. Aku masuk OSIS bidang 5 ini karena aku suka berdiskusi soal isu-isu lingkungan dan sosial. Selain itu, aku hobi banget yang namanya binge watch film seri. Beberapa fun fact tentang ku, sebelum masuk SMA, aku sempat belajar bahasa dulu sekitar 5 bulan di Taiwan. Selain OSIS, di smuki aku juga ikut MUN dan DA yang pastinya seru banget juga! Feel free to reach out to me kalo mau nanya-nanya tentang apapun or even if you just want to fangirling film seri bareng <3"
                    />
                </div>
                <div>
                    <Osis
                        img={ stephanie } 
                        title="Jocelyn Emmanuella Mok"  
                        desc="Hi! Namaku Jocelyn Emmanuella Mok dan saat ini merupakan murid kelas 11 IPS. Untuk mengisi waktu luang, aku biasanya dengar lagu and I also enjoy taking landscape pictures. Selain OSIS, aku juga join beberapa organisasi di smuki seperti tedxyouth@smakone dan shutterone, yang pastinya juga menambah pengetahuan dan pengalaman baru yang gak kalah seru. Fun Fact tentang ku, aku anak rantau guyss hehehe, jadi yang dari luar kota juga don’t hesitate to reach out! Have fun di smuki!!"
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
                    <p className="text-left">
                        1. EcoVille, Berupa Artikel dan Quiz interaktif mengenai berbagai isu lingkungan hidup. Untuk gambaran yang lebih jelas, bisa check di instagram story kita yaa @smukiee.
                    </p>
                    <br/>
                    <p className="text-left">
                        2. We Care merupakan program bidang 5 berupa video kampanye yang menyuarakan berbagai isu kemanusiaan dan lingkungan hidup. Check out video campaign kita di feeds @smukiee!
                    </p>
                    <br/>
                    <p className="text-left">
                        3. EcoGuru, melalui EcoGuru, diharapkan para peserta MPLS dapat mengerti akan pentingnya menjaga lingkungan hidup baik di lingkungan sekolah maupun luar sekolah.
                    </p>
                    <br/>
                    <p className="text-left">
                        4. Aspire, Asp1re merupakan wadah bagi seluruh siswa SMAK 1 untuk menyalurkan aspirasinya terhadap berbagai program OSIS yang berjalan, agar penyelenggaraan program tersebut dapat mengalami perbaikan di tahun-tahun berikutnya. 
                    </p>
                    <br/>
                    <p className="text-left">
                        5. One Vote, pelaksanaan pemilihan ketua dan wakil ketua OSIS 
                    </p>
                    <br/>
                    <p className="text-left">
                        6. Kompetisi Debat
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
