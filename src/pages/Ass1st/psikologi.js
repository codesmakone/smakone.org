import React from 'react'
import Ass1stSection from '../../components/Ass1st/Ass1stSection'
import Ass1stLayout from '../../components/page_template/Ass1stLayout'

import harvard from '../../images/Ass1st/gambar univ/harvard.jpg'
import oxford from '../../images/Ass1st/gambar univ/oxford.jpg'
import stanford from '../../images/Ass1st/gambar univ/Stanford.jpg'
import nus from '../../images/Ass1st/gambar univ/NUS.jpg'
import ntu from '../../images/Ass1st/gambar univ/NTU.jpg'
import hku from '../../images/Ass1st/gambar univ/HKU.jpg'
import ui from '../../images/Ass1st/gambar univ/UI-jpg.jpg'
import ugm from '../../images/Ass1st/gambar univ/UGM.jpg'
import unpad from '../../images/Ass1st/gambar univ/padjajaran.jpg'
import psyc from '../../images/Ass1st/psikol.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function PsikologiPage() {
    const title = "Ass1st"
    const content = (
        <div className="container mx-auto"> 
            <Ass1stSection
                title="Psikologi"
                img={psyc}
                alt="Psikologi"
            />
            <p className="justify-center text-justify p-2">
                Untuk mempelajari tingkah laku manusia, kamu perlu mendalami ilmu Psikologi. Di jurusan ini kamu akan mempelajari “manusia"
                 berdasarkan individu, karena nggak ada manusia yang benar-benar sama dalam ilmu psikologi. Manusia sebenarnya adalah makhluk 
                 yang unik, bahkan ketika diberi stimulus yang sama pun responnya bisa berbeda tergantung pada pengetahuan, pengalaman, 
                 perasaan, harapan, dan banyak faktor penentu lainnya.

            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={harvard} alt="Harvard University (USA)"/>
                    <p className="justify-center text-center p-2">Harvard University (USA)</p>
                </div>
                <div>
                    <img src={stanford} alt="Stanford University (USA)" />
                    <p className="justify-center text-center p-2">Stanford University (USA)</p>
                </div>
                <div>
                    <img src={oxford} alt="The University of Oxford (England)" />
                    <p className="justify-center text-center p-2">The University of Oxford (England)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={nus} alt="National University of Singapore (Singapore)"/>
                    <p className="justify-center text-center p-2">National University of Singapore (Singapore)</p>
                </div>
                <div>
                    <img src={ntu} alt="Nanyang Technological University (Singapore)" />
                    <p className="justify-center text-center p-2">Nanyang Technological University (Singapore)</p>
                </div>
                <div>
                    <img src={hku} alt="The University of Hong Kong" />
                    <p className="justify-center text-center p-2">The University of Hong Kong</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={ugm} alt="Universitas Gajah Mada"/>
                    <p className="justify-center text-center p-2">Universitas Gajah Mada</p>
                </div>
                <div>
                    <img src={ui} alt="Universitas Indonesia" />
                    <p className="justify-center text-center p-2">Universitas Indonesia</p>
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
