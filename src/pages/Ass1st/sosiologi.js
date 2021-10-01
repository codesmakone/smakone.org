import React from 'react'
import Ass1stSection from '../../components/Ass1st/Ass1stSection'
import Ass1stLayout from '../../components/page_template/Ass1stLayout'

import harvard from '../../images/Ass1st/gambar univ/harvard.jpg'
import oxford from '../../images/Ass1st/gambar univ/oxford.jpg'
import lse from '../../images/Ass1st/gambar univ/LSE.jpg'
import nus from '../../images/Ass1st/gambar univ/NUS.jpg'
import peking from '../../images/Ass1st/gambar univ/Peking.jpg'
import tokyo from '../../images/Ass1st/gambar univ/tokyoU-jpg.jpg'
import ui from '../../images/Ass1st/gambar univ/UI-jpg.jpg'
import ugm from '../../images/Ass1st/gambar univ/UGM.jpg'
import unpad from '../../images/Ass1st/gambar univ/padjajaran.jpg'
import socio from '../../images/Ass1st/socio.jpeg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function SosiologiPage() {
    const title = "Ass1st"
    const content = (
        <div className="container mx-auto"> 
            <Ass1stSection
                title="Sosiologi"
                img={socio}
                alt="Sosiologi"
            />
            <p className="justify-center text-justify p-2">
                Komunikasi Sosiologi merupakan ilmu yang membahas perilaku sosial antar individu, antar kelompok, maupun antara individu 
                dan kelompok. Di jurusan ini kamu juga akan membicarakan "apa itu masyarakat." Kamu akan mempelajari struktur dan karakter 
                masyarakat, problematika masyarakat, fenomena sosial, dan gerakan masyarakat. Selain itu, mempelajari metode survei sosial 
                seperti kuisioner dan statistik, serta metode analisis dari hasil survei.dan media.
            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={harvard} alt="Harvard University"/>
                    <p className="justify-center text-center p-2">Harvard University (USA)</p>
                </div>
                <div>
                    <img src={oxford} alt="University of Oxford" />
                    <p className="justify-center text-center p-2">University of Oxford (England)</p>
                </div>
                <div>
                    <img src={lse} alt="The London School of Economics and Political Science (England)" />
                    <p className="justify-center text-center p-2">The London School of Economics and Political Science (England)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={nus} alt="National University of Singapore (Singapore)"/>
                    <p className="justify-center text-center p-2">National University of Singapore (Singapore)</p>
                </div>
                <div>
                    <img src={peking} alt="Peking University" />
                    <p className="justify-center text-center p-2">Peking University</p>
                </div>
                <div>
                    <img src={tokyo} alt="The University of Tokyo" />
                    <p className="justify-center text-center p-2">The University of Tokyo</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={ugm} alt="Universitas Gajah Mada"/>
                    <p className="justify-center text-center p-2">Universitas Gajah Mada</p>
                </div>
                <div>
                    <img src={unpad} alt="Universitas Padjajaran" />
                    <p className="justify-center text-center p-2">Universitas Padjajaran</p>
                </div>
                <div>
                    <img src={ui} alt="Universitas Indonesia" />
                    <p className="justify-center text-center p-2">Universitas Indonesia</p>
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
