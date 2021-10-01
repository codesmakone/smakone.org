import React from 'react'
import Ass1stSection from '../../components/Ass1st/Ass1stSection'
import Ass1stLayout from '../../components/page_template/Ass1stLayout'

import colo from '../../images/Ass1st/gambar univ/Colorado-School-Of-Mines.jpg'
import curt from '../../images/Ass1st/gambar univ/Curtin.jpg'
import queens from '../../images/Ass1st/gambar univ/Queensland.jpg'
import fahd from '../../images/Ass1st/gambar univ/KingFahdU-of-Petrol-Mineral.jpg'
import cumt from '../../images/Ass1st/gambar univ/ChinaU-Mining-Tech.jpg'
import kyuu from '../../images/Ass1st/gambar univ/Kyushu.jpg'
import trisakti from '../../images/Ass1st/gambar univ/Trisakti.jpg'
import pertamina from '../../images/Ass1st/gambar univ/pertamnia.jpg'
import itb from '../../images/Ass1st/gambar univ/ITB-jpg.jpg'
import tambang from '../../images/Ass1st/tambang.png'

import Banner from "../../images/bannerKegiatan.jpg"


export default function TambangPage() {
    const title = "Ass1st"
    const content = (
        <div className="container mx-auto"> 
            <Ass1stSection
                title="Teknik Pertambangan"
                img={tambang}
                alt="Teknik Pertambangan"
            />
            <p className="justify-center text-justify p-2">
                Teknik Pertambangan merupakan bidang ilmu yang mempelajari proses penambangan mineral berharga dan batubara. Fokus dari 
                jurusan Teknik Pertambangan adalah kegiatan eksplorasi, eksploitasi, dan pemrosesan. Jadi, kamu akan belajar banyak soal 
                sifat-sifat mineral yang akan ditambang, kegunaannya, cara menambangnya, sampai proses pengolahannya agar dapat 
                dimanfaatkan oleh manusia. Kamu juga harus memperhitungkan untung-rugi dari proses penambangan itu, lho.
            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={colo} alt="Colorado School of Mines (USA)"/>
                    <p className="justify-center text-center p-2">Colorado School of Mines (USA)</p>
                </div>
                <div>
                    <img src={curt} alt="Curtin Univeristy (Australia)" />
                    <p className="justify-center text-center p-2">Curtin Univeristy (Australia)</p>
                </div>
                <div>
                    <img src={queens} alt="The University of Queensland (Australia)" />
                    <p className="justify-center text-center p-2">The University of Queensland (Australia)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={fahd} alt="King Fahd University of Petroleum and Minerals"/>
                    <p className="justify-center text-center p-2">King Fahd University of Petroleum and Minerals (Saudi Arabia)</p>
                </div>
                <div>
                    <img src={cumt} alt="China University of Mining and Technology (China)" />
                    <p className="justify-center text-center p-2">China University of Mining and Technology (China)</p>
                </div>
                <div>
                    <img src={kyuu} alt="Kyushu University (Japan)" />
                    <p className="justify-center text-center p-2">Kyushu University (Japan)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={itb} alt="Institut Teknologi Bandung"/>
                    <p className="justify-center text-center p-2">Institut Teknologi Bandung</p>
                </div>
                <div>
                    <img src={trisakti} alt="Universitas Trisakti" />
                    <p className="justify-center text-center p-2">Universitas Trisakti</p>
                </div>
                <div>
                    <img src={pertamina} alt="Universitas Pertamina" />
                    <p className="justify-center text-center p-2">Universitas Pertamina</p>
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
