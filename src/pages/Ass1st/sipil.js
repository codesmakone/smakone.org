import React from 'react'
import Ass1stSection from '../../components/Ass1st/Ass1stSection'
import Ass1stLayout from '../../components/page_template/Ass1stLayout'

import mit from '../../images/Ass1st/gambar univ/MIT.jpg'
import delft from '../../images/Ass1st/gambar univ/Delft.jpg'
import ntu from '../../images/Ass1st/gambar univ/NTU.jpg'
import nus from '../../images/Ass1st/gambar univ/NUS.jpg'
import tsinghua from '../../images/Ass1st/gambar univ/tsinghua.jpg'
import hkust from '../../images/Ass1st/gambar univ/HKUST.jpg'
import ui from '../../images/Ass1st/gambar univ/UI-jpg.jpg'
import ugm from '../../images/Ass1st/gambar univ/UGM.jpg'
import itb from '../../images/Ass1st/gambar univ/ITB-jpg.jpg'
import sipil from '../../images/Ass1st/sipil.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function SipilPage() {
    const title = "Ass1st"
    const content = (
        <div className="container mx-auto"> 
            <Ass1stSection
                title="Teknik Sipil"
                img={sipil}
                alt="Teknik Sipil"
            />
            <p className="justify-center text-justify p-2">
                Teknik Sipil merupakan bidang ilmu yang mempelajari perencanaan/perancangan, manufaktur, manajemen/pengelolaan, dan 
                konservasi dari berbagai fasilitas dan sistem untuk mendukung sebuah kota, pedesaan, dan perkotaan. Pilihan topik 
                penelitiannya juga sangat beragam lho, seperti jembatan dan bantaran sungai/tepi laut, desain jalan, teknologi untuk 
                melindungi manusia dari bencana seperti; banjir dan gempa bumi, konservasi lingkungan di suatu wilayah.
            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={mit} alt="Massachusetts Institute of Technology (USA)"/>
                    <p className="justify-center text-center p-2">Massachusetts Institute of Technology (USA)</p>
                </div>
                <div>
                    <img src={nus} alt="National University of Singapore (Singapore)" />
                    <p className="justify-center text-center p-2">National University of Singapore (Singapore)</p>
                </div>
                <div>
                    <img src={delft} alt="Delft University of Technology (Netherlands)" />
                    <p className="justify-center text-center p-2">Delft University of Technology (Netherlands)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={ntu} alt="Nanyang Technological University (Singapore)"/>
                    <p className="justify-center text-center p-2">Nanyang Technological University (Singapore)</p>
                </div>
                <div>
                    <img src={tsinghua} alt="Tsinghua University (China)" />
                    <p className="justify-center text-center p-2">Tsinghua University (China)</p>
                </div>
                <div>
                    <img src={hkust} alt="The Hong Kong University of Science and Technology (Hong Kong)" />
                    <p className="justify-center text-center p-2">The Hong Kong University of Science and Technology (Hong Kong)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={itb} alt="Institut Teknologi Bandung"/>
                    <p className="justify-center text-center p-2">Institut Teknologi Bandung</p>
                </div>
                <div>
                    <img src={ugm} alt="Universitas Gajah Mada" />
                    <p className="justify-center text-center p-2">Universitas Gajah Mada</p>
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
