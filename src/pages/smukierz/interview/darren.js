import React from 'react'
import SmukierzLayout from '../../../components/page_template/SmukierzLayout'
import AlumniArticle from '../../../components/alumni/AlumniArticle'

import Darren from '../../../images/Card/DarrenJonathan.jpg'
import Banner from "../../../images/17an.jpg"

export default function DarrenPage() {
    const title = "Kehidupan SMUKIERZ"
    const content = (
        <div className="grid grid-cols-1 gap-3 py-5">
            <div className="pb-20">
            <img src={ Darren } className="lg:h-96 mx-auto rounded-lg" alt="Darren Jonathan" />
            <h1 className="text-center mt-5 font-bold text-5xl">
                Darren Jonathan
            </h1>
            <p className="text-center mb-8">"Pebulutangkis cerdas dengan smash yang mematikan"</p>
            <AlumniArticle>
                Darren Jonathan merupakan salah satu alumni lulusan 2021 SMAK 1 yang dikenal dengan kemampuannya terutama pada bidang olahraga. 
                Perjalanan Darren dimulai sejak ia berusia tiga tahun. Awalnya, ia dikenalkan bulu tangkis oleh ayahnya. 
                Sejak itu, Darren mulai tertarik dengan dunia olahraga dan terus mengenal cabang olahraga lain, seperti basket, sepakbola, dan floorball.
            </AlumniArticle>
            <AlumniArticle>
                Beranjak dewasa, Darren mulai menyalurkan hobinya dengan bergabung dengan klub olahraga.
                Salah satunya, adalah klub basket Gading Muda. Selain itu, Darren juga tergabung sebagai anggota KR1ZA, sebuah klub olahraga di SMAK 1 yang menaungi
                beberapa cabang olahraga, seperti voli, bulu tangkis, futsal, basket, floorball, dan masih banyak lagi.
                Selama berada di KR1ZA, Darren menjadi anggota dari KR1ZA bulu tangkis dan juga merupakan posisi <i>guard</i> dalam KR1ZA basket.
            </AlumniArticle>
            <AlumniArticle>
                Selama di SMAK 1, Darren juga telah mengharumkan nama SMAK 1 dalam berbagai ajang kompetisi.
                Pada tahun 2019, ia pernah mengikuti DBL bersama KR1ZA basket putra dan mengikuti O2SN bulu tangkis.
                Selain itu, ia juga meraih prestasi dalam kompetisi antar sekolah, seperti juara 1 basket dalam Cup sekolah Dian Harapan dan
                Tiara Kasih, serta juara bulu tangkis beregu dalam SMAKONECUP.
            </AlumniArticle>
            <AlumniArticle>
            Bagi Darren, tetap fokus dalam menyeimbangkan kemampuannya di bidang olahraga maupun akademik memanglah sulit. 
            Namun, dengan adanya dukungan serta pengertian dari guru-guru, Darren selalu berhasil untuk menjaga performa akademiknya. 
            Selain itu, dukungan dari sekolah juga sangat berpengaruh terhadap Darren selama di SMAK 1 PENABUR. 
            Bahkan, Darren juga menyarankan bagi teman-teman yang ingin fokus secara akademik dan olahraga untuk bersekolah di SMAK 1 PENABUR. 
            </AlumniArticle>
            </div>
        </div>
    )
    return (
        <SmukierzLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}