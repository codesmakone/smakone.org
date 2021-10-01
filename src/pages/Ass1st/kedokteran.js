import React from 'react'
import Ass1stSection from '../../components/Ass1st/Ass1stSection'
import Ass1stLayout from '../../components/page_template/Ass1stLayout'

import harvard from '../../images/Ass1st/gambar univ/harvard.jpg'
import oxford from '../../images/Ass1st/gambar univ/oxford.jpg'
import stanford from '../../images/Ass1st/gambar univ/stanford.jpg'
import nus from '../../images/Ass1st/gambar univ/NUS.jpg'
import snu from '../../images/Ass1st/gambar univ/Seoul-jpg.jpg'
import tokyo from '../../images/Ass1st/gambar univ/tokyoU-jpg.jpg'
import ui from '../../images/Ass1st/gambar univ/UI-jpg.jpg'
import ugm from '../../images/Ass1st/gambar univ/UGM.jpg'
import unpad from '../../images/Ass1st/gambar univ/padjajaran.jpg'
import med from '../../images/Ass1st/medschool.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function KedokteranPage() {
    const title = "Ass1st"
    const content = (
        <div className="container mx-auto"> 
            <Ass1stSection
                title="Kedokteran"
                img={med}
                alt="kedokteran"
            />
            <p className="justify-center text-justify p-2">
                Saat berkuliah di Pendidikan Dokter kamu akan mempelajari cara mendiagnosis penyakit yang dialami pasien kemudian mengobati 
                dan mencegah timbulnya kembali penyakit itu. Selama kuliah kamu banyak belajar anatomi tubuh manusia, biologi sel dan 
                molekuler, genetika, biokimia, juga farmakologi. Kamu juga dibekali dengan latihan keterampilan dalam skill lab. Nah setelah
                 fase perkuliahan pre-klinik, kamu bakalan dapat pelatihan dasar di berbagai stase di Rumah Sakit.Setelah itu, baru deh 
                 diputuskan mau langsung ambil program spesialisasi atau bekerja pada institusi kesehatan.
            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={harvard} alt="Harvard University (USA)"/>
                    <p className="justify-center text-center p-2">Harvard University (USA)</p>
                </div>
                <div>
                    <img src={oxford} alt="University of Oxford (England)" />
                    <p className="justify-center text-center p-2">University of Oxford (England)</p>
                </div>
                <div>
                    <img src={stanford} alt="Stanford University (USA)" />
                    <p className="justify-center text-center p-2">Stanford University (USA)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={nus} alt="National University of Singapore (Singapore)"/>
                    <p className="justify-center text-center p-2">National University of Singapore (Singapore)</p>
                </div>
                <div>
                    <img src={snu} alt="Seoul National University" />
                    <p className="justify-center text-center p-2">Seoul National University (Korea)</p>
                </div>
                <div>
                    <img src={tokyo} alt="The University of Tokyo (Japan)" />
                    <p className="justify-center text-center p-2">The University of Tokyo (Japan)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={ui} alt="Universitas Indonesia"/>
                    <p className="justify-center text-center p-2">Universitas Indonesia</p>
                </div>
                <div>
                    <img src={ugm} alt="Universitas Gajah Mada" />
                    <p className="justify-center text-center p-2">Universitas Gajah Mada</p>
                </div>
                <div>
                    <img src={unpad} alt="Universitas Padjajaran" />
                    <p className="justify-center text-center p-2">Universitas Padjajaran</p>
                </div>
            </div>
        </div>
    )
    return (
        <Ass1stLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}
