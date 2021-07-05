import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Content from '../../components/block/Content'
import Banner from "../../images/banner2.jpg"
import Febryan from "../../images/team/Febryan.jpg"
import Valerie from "../../images/team/Valerie.jpg"

export default function AnggotaPage() {
    const title = "Anggota-anggota OSIS SMAK 1 PENABUR Jakarta"
    const content = (
        <Content>
            <h1 className="font-semibold text-center text-2xl lg:text-4xl"><b>Anggota OSIS</b></h1>
            <br />
            <h1 className="font-semibold text-center text-lg lg:text-2xl">Badan Pengurus Harian</h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div>
                    <img src={Febryan} className="object-center w-5/12 rounded-full shadow-xl mx-auto" alt="Febryan" />
                    <div className="p-2">
                        <h2 className="font-semibold text-center text-xl">Febryan Hartanto</h2>
                        <p className="text-center mb-6">Ketua OSIS</p>
                    </div>
                </div>
                <div>
                    <img src={Valerie} className="object-center w-5/12 rounded-full shadow-xl mx-auto" alt="Febryan" />
                    <div className="p-2">
                        <h2 className="font-semibold text-center text-xl">Valerie Graciella</h2>
                        <p className="text-center mb-6">Wakil Ketua OSIS</p>
                    </div>
                </div>
            </div>
        </Content>
    )
    return (
        <OsisLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}
