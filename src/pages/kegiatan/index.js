import React from 'react'
import { Link } from 'gatsby'
import MainContainer from '../../components/page_template/MainContainer'
import HeroImage from '../../global/HeroImage'
import KegiatanSection from '../../components/kegiatan/KegiatanSection'
import KegiatanList from '../../components/kegiatan/KegiatanList'

import SOC from '../../images/kegiatan/SOC.jpg'
import Soundscape from '../../images/kegiatan/soundscape.jpg'
import STN from '../../images/kegiatan/STN.jpg'
import KR1ZA from '../../images/kegiatan/KR1ZA.jpg'
import Seni from '../../images/kegiatan/Seni.jpg'

export default function index() {
    return (
        <MainContainer>
            <HeroImage/>

            <div className="container mx-auto">            
                <h2 className="font-bold text-7xl m-12 justify-center text-center">
                    Tunjukan gayamu sendiri!
                </h2>
                <p className="justify-center text-center">
                    Di SMAK 1 ada puluhan kegiatan yang bisa mengembangkan minatmu.<br/>
                    Dari kegiatan tahunan yang megah atau kegiatan harian yang bisa membuatmu tetap bersemangat.<br/>
                    Berkeringat di bawah terik matahari atau ruangan tertutup.<br/>
                    Berpetualang di alam liar atau melompat di antara gedung tinggi.<br/>
                </p>

                {/* Smakonecup section */}
                <KegiatanSection
                    title="Smakeonecup"
                    subtitle='"Acara tahunan yang penuh sinar matahari, keringat, dan kejutan"'
                    img={SOC}
                />
                <div className="pb-5">
                    <div className="text-center">
                        <Link className="text-white btn bg-purple-soc" target="blank" to="https://cup.smakone.org">
                            Kenali Lebih Lanjut {">"}
                        </Link>
                    </div>
                </div>

                {/* Soundscape section */}
                <KegiatanSection
                    title="Soundscape"
                    subtitle='"Malam penuh hiburan berkelas untuk menutup Smakonecup"'
                    img={Soundscape}
                />
                <div className="pb-5">
                    <div className="text-center">
                        <Link className="text-white btn bg-purple-600" target="blank" to="https://soundscape.id">
                            Kenali Lebih Lanjut {">"}
                        </Link>
                    </div>
                </div>

                {/* STN */}
                <KegiatanSection
                    title="SMUKIEZ Theater Night"
                    subtitle='"Saat berbagai seni dipadukan dan menghasilkan sebuah karya yang memukau"'
                    img={STN}
                />
                <div className="pb-5">
                    <div className="text-center">
                        <Link className="text-white btn bg-black"target="blank" to="https://stn.smakone.org">
                            Kenali Lebih Lanjut {">"}
                        </Link>
                    </div>
                </div>

                {/* KRIZA */}
                <KegiatanSection
                    title="KR1ZA"
                    subtitle='"Berkeringat dan kobarkan semangatmu"'
                    img={KR1ZA}
                />
                <div className="pb-5">
                    <div className="text-2xl text-left grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-10 px-10">
                        <KegiatanList name="Basket" />
                        <KegiatanList name="Bulutangkis" />
                        <KegiatanList name="Catur" />
                        <KegiatanList name="Futsal" />
                        <KegiatanList name="Pencak Silat" />
                        <KegiatanList name="Tenis Meja" />
                        <KegiatanList name="Voli" />
                    </div>
                </div>

                {/* Seni */}
                <KegiatanSection
                    title="Seni"
                    subtitle='"Ekspresikan dirimu lewat cara yang mempesona"'
                    img={Seni}
                />
                <div className="pb-5">
                    <div className="text-2xl text-left grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-10 px-10">
                        <KegiatanList name="Animasi" />
                        <KegiatanList name="Bahasa Korea" />
                        <KegiatanList name="Beauty Class" />
                        <KegiatanList name="Fotografi" />
                        <KegiatanList name="Manga" />
                        <KegiatanList name="Master of Ceremony" />
                        <KegiatanList name="Mini Orchestra" />
                        <KegiatanList name="Paduan Suara" />
                        <KegiatanList name="Teater" />
                        <KegiatanList name="Web Design" />
                    </div>
                </div>

                {/* Ekstrakulikuler lainnya */}
                <div className="pt-5">
                    <h2 className="font-medium text-5xl mt-12 mb-5 justify-center text-center">
                        Ekstrakulikuler Lainnya
                    </h2>
                </div>
                <div className="pb-5">
                    <div className="text-2xl text-left grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-10 px-10">
                        <KegiatanList name="Business Plan" />
                        <KegiatanList name="English Debate Society (EDS)" />
                        <KegiatanList name="Jurnalistik" />
                        <KegiatanList name="Multimedia" />
                        <KegiatanList name="Model United Nation" />
                        <KegiatanList name="Youth Christian Community" />
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}
