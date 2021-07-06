import React from 'react'
import AboutLayout from '../../components/page_template/AboutLayout'
import Banner from "../../images/banner2.jpg"
import aula from "../../images/fasilitas/aula.jpg"
import audit from "../../images/fasilitas/auditorium.jpg"
import kantin from "../../images/fasilitas/kantin.jpg"
import kelas from "../../images/fasilitas/kelas.jpg"
import koperasi from "../../images/fasilitas/koperasi.jpg"
import labb from "../../images/fasilitas/labbio.jpg"
import labe from "../../images/fasilitas/labeng.jpg"
import labf from "../../images/fasilitas/labfis.jpg"
import labkim from "../../images/fasilitas/labkim.jpg"
import labkomp from "../../images/fasilitas/labkomp.jpg"
import lap from "../../images/fasilitas/lapangan.jpg"
import lift from "../../images/fasilitas/lift.jpg"
import lobi from "../../images/fasilitas/Lobi.jpg"
import musik from "../../images/fasilitas/musik.jpg"
import osis from "../../images/fasilitas/osis.jpg"
import park from "../../images/fasilitas/parkiran.jpg"
import perpus from "../../images/fasilitas/perpus.jpg"
import radio from "../../images/fasilitas/radio.jpg"
import top from "../../images/fasilitas/toiletpria.jpg"
import tow from "../../images/fasilitas/toiletwanita.jpg"
import UKS from "../../images/fasilitas/UKS.jpg"

export default function FasilitasPage() {
    const title = "Tentang Kami"
    const content = (
        <div>
            <h2 className="font-medium text-3xl lg:text-5xl mt-12 justify-center text-center">
                Fasilitas
            </h2>
            <br />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <img src={aula} alt="Aula"/>
                    <p className="justify-center text-center p-2">Aula</p>
                </div>
                <div>
                    <img src={kantin} alt="Kantin" />
                    <p className="justify-center text-center p-2">Kantin</p>
                </div>
                <div>
                    <img src={kelas} alt="Kelas" />
                    <p className="justify-center text-center p-2">Kelas</p>
                </div>
                <div>
                    <img src={koperasi} alt="Koperasi" />
                    <p className="justify-center text-center p-2">Koperasi</p>
                </div>
                <div>
                    <img src={labb} alt="lab bio" />
                    <p className="justify-center text-center p-2">Lab Biologi</p>
                </div>
                <div>
                    <img src={labf} alt="lab fisika" />
                    <p className="justify-center text-center p-2">Lab Fisika</p>
                </div>
                <div>
                    <img src={labkim} alt="lab kimia" />
                    <p className="justify-center text-center p-2">Lab Kimia</p>
                </div>
                <div>
                    <img src={labkomp} alt="lab komp" />
                    <p className="justify-center text-center p-2">Lab Komputer</p>
                </div>
                <div>
                    <img src={labe} alt="lab ing" />
                    <p className="justify-center text-center p-2">Lab Inggris</p>
                </div>
                <div>
                    <img src={lobi} alt="lobby"/>
                    <p className="justify-center text-center p-2">Lobi</p>
                </div>
                <div>
                    <img src={lift} alt="lift"/>
                    <p className="justify-center text-center p-2">Lift</p>
                </div>
                <div>
                    <img src={lap} alt="lapangan"/>
                    <p className="justify-center text-center p-2">Lapangan</p>
                </div>
                <div>
                    <img src={park} alt="taman" />
                    <p className="justify-center text-center p-2">Parkiran</p>
                </div>
                <div>
                    <img src={audit} alt="auditorium" />
                    <p className="justify-center text-center p-2">Auditorium</p>
                </div>
                <div>
                    <img src={musik} alt="musik" />
                    <p className="justify-center text-center p-2">Ruang Musik</p>
                </div>
                <div>
                    <img src={osis} alt="ruang osis" />
                    <p className="justify-center text-center p-2">Ruang OSIS</p>
                </div>
                <div>
                    <img src={perpus} alt="perpus" />
                    <p className="justify-center text-center p-2">Perpustakaan</p>
                </div>
                <div>
                    <img src={radio} alt="ruang radio" />
                    <p className="justify-center text-center p-2">Ruang Radio</p>
                </div>
                <div>
                    <img src={UKS} alt="uks" />
                    <p className="justify-center text-center p-2">Unit Kesehatan Sekolah (UKS)</p>
                </div>
                <div>
                    <img src={top} alt="toilet pria" />
                    <p className="justify-center text-center p-2">Toilet Pria</p>
                </div>
                <div>
                    <img src={tow} alt="toilet wanita" />
                    <p className="justify-center text-center p-2">Toilet Wanita</p>
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
