import React from 'react'
import Ass1stSection from '../../components/Ass1st/Ass1stSection'
import Ass1stLayout from '../../components/page_template/Ass1stLayout'

import harvard from '../../images/Ass1st/gambar univ/harvard.jpg'
import ucl from '../../images/Ass1st/gambar univ/UCL.jpg'
import uoft from '../../images/Ass1st/gambar univ/UofT.jpg'
import hku from '../../images/Ass1st/gambar univ/HKU.jpg'
import eduhk from '../../images/Ass1st/gambar univ/EducationUHongKong.jpg'
import ntu from '../../images/Ass1st/gambar univ/NTU.jpg'
import uny from '../../images/Ass1st/gambar univ/UNYogya.jpg'
import upi from '../../images/Ass1st/gambar univ/UnivPendidikanIndo.jpg'
import malang from '../../images/Ass1st/gambar univ/UNMalang.jpg'
import guru from '../../images/Ass1st/guru.jpg'

import Banner from "../../images/bannerKegiatan.jpg"


export default function KeguruanPage() {
    const title = "Ass1st"
    const content = (
        <div className="container mx-auto"> 
            <Ass1stSection
                title="Keguruan dan Pendidikan"
                img={guru}
                alt="Keguruan dan Pendidikan"
            />
            <p className="justify-center text-justify p-2">
                Keguruan dan Pendidikan merupakan bidang ilmu yang menyiapkan lulusannya untuk menjadi seorang Guru. kamu akan dibekali 
                dengan berbagai keterampilan yang dapat menunjang pelaksanaan tugas profesi mulia tersebut. Selain mempelajari suatu bidang 
                studi, kamu juga fokus mempelajari bagaimana proses transfer ilmu yang efektif dari guru kepada murid, bagaimana cara yang 
                tepat untuk mengajar, bagaimana mengelola kelas, bagaimana mengembangkan program pembelajaran di kelas, dan sebagainya.  
            </p>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Dunia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={ucl} alt="University College London (England)"/>
                    <p className="justify-center text-center p-2">University College London (England)</p>
                </div>
                <div>
                    <img src={harvard} alt="Harvard University (USA)" />
                    <p className="justify-center text-center p-2">Harvard University (USA)</p>
                </div>
                <div>
                    <img src={uoft} alt="University of Toronto (Canada)" />
                    <p className="justify-center text-center p-2">University of Toronto (Canada)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Asia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={hku} alt="The University of Hong Kong (Hong Kong)"/>
                    <p className="justify-center text-center p-2">The University of Hong Kong (Hong Kong)</p>
                </div>
                <div>
                    <img src={ntu} alt="Nanyang Technological University (Singapore)" />
                    <p className="justify-center text-center p-2">Nanyang Technological University (Singapore)</p>
                </div>
                <div>
                    <img src={eduhk} alt="The Education University of Hong Kong (Hong Kong)" />
                    <p className="justify-center text-center p-2">The Education University of Hong Kong (Hong Kong)</p>
                </div>
            </div>
            <h2 className="justify-left text-center text-3xl font-semibold px-2 pt-4 pb-2">Top Universitas Indonesia</h2>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-4">
                <div>
                    <img src={uny} alt="Universitas Negeri Yogyakarta"/>
                    <p className="justify-center text-center p-2">Universitas Negeri Yogyakarta</p>
                </div>
                <div>
                    <img src={upi} alt="Universitas Pendidikan Indonesia" />
                    <p className="justify-center text-center p-2">Universitas Pendidikan Indonesia</p>
                </div>
                <div>
                    <img src={malang} alt="Universitas Negeri Malang" />
                    <p className="justify-center text-center p-2">Universitas Negeri Malang</p>
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
