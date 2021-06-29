import React from 'react'
import AlumniLayout from '../../components/page_template/AlumniLayout'
import AlumniCard from '../../components/alumni/AlumniCard'

import BillyStevanus from '../../images/Card/BillyStevanus.jpg'
import ScottMoses from '../../images/Card/ScottMoses.jpg'
import NicoleCharlene from '../../images/Card/NicoleCharlene.jpg'
import Banner from "../../images/bannerAlumni.jpg"


export default function AlumniPage() {
    const title = "Alumni Kami"
    const content = (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-5">
            <div>
                <AlumniCard
                    img={ BillyStevanus } 
                    title="Billy Stevanus" 
                    desc='"Alumni yang selalu aktif dan bersemangat"'
                    dir="./billy"
                />
            </div>
            <div>
                <AlumniCard
                    img={ ScottMoses } 
                    title="Scott Moses" 
                    desc='"Anak muda berbakat dengan segudang pengalaman di bidangnya"'
                    dir="./scott"
                />
            </div>
            <div>
                <AlumniCard
                    img={ NicoleCharlene } 
                    title="Nicole Charlene" 
                    desc='"Perempuan yang suka melayani dengan segudang prestasi"'
                    dir="./nicole"
                />
            </div>
        </div>
    )
    return (
        <AlumniLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}
