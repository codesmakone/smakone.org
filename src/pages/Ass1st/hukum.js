import React from 'react'
import Ass1stSection from '../../components/Ass1st/Ass1stSection'
import Ass1stLayout from '../../components/page_template/Ass1stLayout'

import harvard from '../../images/Ass1st/gambar univ/harvard.jpg'
import oxford from '../../images/Ass1st/gambar univ/oxford.jpg'
import cambridge from '../../images/Ass1st/gambar univ/cambridge.jpg'
import nus from '../../images/Ass1st/gambar univ/NUS.jpg'
import hku from '../../images/Ass1st/gambar univ/HKU.jpg'
import tokyo from '../../images/Ass1st/gambar univ/tokyoU-jpg.jpg'
import ui from '../../images/Ass1st/gambar univ/UI-jpg.jpg'
import ugm from '../../images/Ass1st/gambar univ/UGM.jpg'
import unair from '../../images/Ass1st/gambar univ/airlangga.jpg'
import law from '../../images/Ass1st/law.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function HukumPage() {
    const title = "Ass1st"
    const content = (
        <div className="container mx-auto"> 
            <Ass1stSection
                title="Hukum"
                img={law}
                alt="Hukum"
            />
            <p className="justify-center text-justify p-2">
                Jurusan Ilmu Hukum mempelajari berbagai sistem hukum yang berkaitan dengan kehidupan kemasyarakatan maupun kegiatan bisnis. 
                Di Ilmu Hukum, kamu juga belajar mengenai perundang-undangan termasuk di dalamnya hukum dasar (konstitusi, hukum perdata,
                 hukum dagang, hukum tata negara, hukum pidana, hukum tata pidana) hingga hukum internasional dengan cakupan yang cukup luas.
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
                    <img src={cambridge} alt="University of Cambridge (England)" />
                    <p className="justify-center text-center p-2">University of Cambridge (England)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={nus} alt="National University of Singapore (Singapore)"/>
                    <p className="justify-center text-center p-2">National University of Singapore (Singapore)</p>
                </div>
                <div>
                    <img src={tokyo} alt="The University of Tokyo (Japan)" />
                    <p className="justify-center text-center p-2">The University of Tokyo (Japan)</p>
                </div>
                <div>
                    <img src={hku} alt="The University of Hong Kong (Hong Kong)" />
                    <p className="justify-center text-center p-2">The University of Hong Kong (Hong Kong)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={ui} alt="Universitas Indonesia"/>
                    <p className="justify-center text-center p-2">Universitas Indonesia</p>
                </div>
                <div>
                    <img src={unair} alt="Universitas Airlangga" />
                    <p className="justify-center text-center p-2">Universitas Airlangga</p>
                </div>
                <div>
                    <img src={ugm} alt="Universitas Gajah Mada" />
                    <p className="justify-center text-center p-2">Universitas Gajah Mada</p>
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
