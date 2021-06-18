import React from 'react'
import { Link } from 'gatsby'
import MainContainer from '../../components/page_template/MainContainer'
import HeroImage from '../../components/global/HeroImage'
import SOC from '../../images/kegiatan/SOC.jpg'

export default function index() {
    return (
        <MainContainer>
            <HeroImage/>

            <div className="container mx-auto">
                <h2 className="font-bold text-5xl m-12 justify-center text-center">
                    Tunjukan gayamu sendiri!
                </h2>
                <p className="justify-center text-center">
                    Di SMAK 1 ada puluhan kegiatan yang bisa mengembangkan minatmu.<br/>
                    Dari kegiatan tahunan yang megah atau kegiatan harian yang bisa membuatmu tetap bersemangat.<br/>
                    Berkeringat di bawah terik matahari atau ruangan tertutup.<br/>
                    Berpetualang di alam liar atau melompat di antara gedung tinggi.<br/>
                </p>
                <h2 className="font-medium text-5xl mt-12 justify-center text-center">
                    Smakonecup
                </h2>
                <p className="mb-6 justify-center text-center text-lg text-gray-500">
                    "Acara tahunan yang penuh sinar matahari, keringat, dan kejutan."
                </p>
                <img src={ SOC } className="mb-6"/>
                <button className="justify-center bg-color-soc rounded-lg">
                    <Link className="text-white" target="blank" to="https://cup.smakone.org">
                        Kenali Lebih Lanjut {">"}
                    </Link>
                </button>
            </div>
        </MainContainer>
    )
}
