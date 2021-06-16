import React from 'react'
import AlumniPage from '../../components/Alumni/AlumniPage'
import AlumniCard from '../../components/Alumni/AlumniCard'

import BillyStevanus from '../../images/Card/BillyStevanus.jpg'
import ScottMoses from '../../images/Card/ScottMoses.jpg'
import NicoleCharlene from '../../images/Card/NicoleCharlene.jpg'

export default function index() {
    return (
        <AlumniPage>
            <div className="grid grid-cols-3 gap-3 py-5">
                <div>
                    <AlumniCard
                        img={ BillyStevanus } 
                        title="Billy Stevanus" 
                        desc="Billy Stevanus merupakan salah seorang alumni SMAK 1 Penabur yang lulus pada tahun ...."
                        dir="./scott"
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
                        desc="Billy Stevanus merupakan salah seorang alumni SMAK 1 Penabur yang lulus pada tahun ...."
                        dir="./scott"
                    />
                </div>
            </div>
        </AlumniPage>
    )
}