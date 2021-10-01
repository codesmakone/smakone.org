import React from 'react'
import Ass1stSection from '../../components/Ass1st/Ass1stSection'
import Ass1stLayout from '../../components/page_template/Ass1stLayout'

import harvard from '../../images/Ass1st/gambar univ/harvard.jpg'
import mit from '../../images/Ass1st/gambar univ/MIT.jpg'
import stanford from '../../images/Ass1st/gambar univ/Stanford.jpg'
import nus from '../../images/Ass1st/gambar univ/NUS.jpg'
import tsinghua from '../../images/Ass1st/gambar univ/tsinghua.jpg'
import hkust from '../../images/Ass1st/gambar univ/HKUST.jpg'
import ui from '../../images/Ass1st/gambar univ/UI-jpg.jpg'
import ugm from '../../images/Ass1st/gambar univ/UGM.jpg'
import stan from '../../images/Ass1st/gambar univ/STAN.jpg'
import akuntansi from '../../images/Ass1st/accounting.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function AkuntansiPage() {
    const title = "Ass1st"
    const content = (
        <div className="container mx-auto"> 
            <Ass1stSection
                title="Akuntansi"
                img={akuntansi}
                alt="Akuntansi"
            />
            <p className="justify-center text-justify p-2">
                Kamu pasti sudah nggak asing dengan jurusan Akuntansi. Bidang studi ini mempelajari materi terkait metode pencatatan dan 
                penyusunan laporan keuangan yang berguna membantu pemangku kepentingan dalam proses pengambilan keputusan. Akuntansi memang 
                dikenal sangat dekat dengan angka, namun seiring perkembangannya akuntansi juga sangat dipengaruhi oleh tingkah laku manusia.
            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={harvard} alt="Harvard University (USA)"/>
                    <p className="justify-center text-center p-2">Harvard University (USA)</p>
                </div>
                <div>
                    <img src={mit} alt="Massachusetts Institute of Technology (USA)" />
                    <p className="justify-center text-center p-2">Massachusetts Institute of Technology (USA)</p>
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
                    <img src={hkust} alt="Hong Kong Univeristy of Science and Technology" />
                    <p className="justify-center text-center p-2">Hong Kong Univeristy of Science and Technology (Hong Kong)</p>
                </div>
                <div>
                    <img src={tsinghua} alt="Tsinghua University (China)" />
                    <p className="justify-center text-center p-2">Tsinghua University (China)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={ugm} alt="Universitas Gajah Mada"/>
                    <p className="justify-center text-center p-2">Universitas Gajah Mada</p>
                </div>
                <div>
                    <img src={stan} alt="Politeknik Keuangan Negara STAN" />
                    <p className="justify-center text-center p-2">Politeknik Keuangan Negara STAN</p>
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
