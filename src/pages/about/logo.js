import React from 'react'
import AboutLayout from '../../components/page_template/AboutLayout'
import Banner from "../../images/banner2.jpg"
import LogoBPK from "../../images/Logo_BPK.png"
import LogoOSIS from "../../images/OSIS-SMAK-1.png"

export default function LogoPage() {
    const title = "Sejarah, Visi, dan Misi SMAKONE"
    const content = (
        <div>
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <img src={LogoBPK} alt="Logo BPK"></img>
                </div>
                <div>
                    <img className="lg:w-3/5 w-4/5" src={LogoOSIS} alt="Logo OSIS"></img>
                </div>     
            </div>
            <h2 className="justify-left text-center text-xl font-bold px-2 pt-12 pb-12">Arti Logo:</h2>
            <div className="grid grid-cols-2 gap-10">
                <div>
                    <ul className="list-disc px-6 pt-2 pb-12">
                        <li>Salib berwarna merah sebagai darah Yesus</li>
                        <li>Buku berwarna kuning sebagai terang pelita</li>
                        <li>Dasar yang dalam yang berwarna biru melambangkan kesetiaan</li>
                        <li>Dasar luar yang berwarna perak melambangkan kesucian</li>
                        <li>Dasar Iman, Ilmu, dan Pelayanan artinya iman Kristiani ilmu yang bermutu handal, dan pelayanan yang adil dan benar</li>
                    </ul>
                </div>
                <div> 
                    <ul className="list-disc px-6 pt-2 pb-12">
                        <li>Salib melambangkan Iman yang nyata dalam perbuatan</li>
                        <li>Buku melambangkan ilmu yang digunakan untuk membuat segala sesuatu menjadi lebih baik</li>
                        <li>Merpati dengan daun di paruhnya melambangkan harapan yang diberikan siswa/siswi SMAK 1 kepada masyarakat di sekitarnya secara khusus dan Bangsa dan negara secara umum</li>
                    </ul>
                </div>     
            </div>
        </div>
    )
    return (
        <AboutLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}
