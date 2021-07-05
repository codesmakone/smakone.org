import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Content from '../../components/block/Content'
import Team from '../../components/osis/OsisTeam'
import Banner from "../../images/banner2.jpg"
import Febryan from "../../images/team/Febryan.jpg"
import Valerie from "../../images/team/Valerie.jpg"
import Angeline from "../../images/team/Angeline.jpg"
import Evelyn from "../../images/team/Evelyn.jpg"
import Janice from "../../images/team/Janice.jpg"
import Amelia from "../../images/team/Amelia.jpg"
import Beatrice from "../../images/team/Beatrice.jpg"
import Birgitta from "../../images/team/Birgitta.jpg"
import Bob from "../../images/team/Bob.jpg"
import Chloe from "../../images/team/Chloe .jpg"
import dacen from "../../images/team/dacen.jpg"
import Darrel from "../../images/team/Darrel.jpg"
import Erika from "../../images/team/Erika.jpg"
import Ferdinand from "../../images/team/Ferdinand.jpg"
import Geoffrey from "../../images/team/Geoffrey.jpg"
import Gillian from "../../images/team/Gillian.jpg"
import Irving from "../../images/team/Irving.jpg"
import Jesselyne from "../../images/team/Jesselyne.jpg"
import JV from "../../images/team/Jessica_Dewanta.jpg"
import Jesslyn from "../../images/team/Jesslyn.jpg"
import Jocelyn from "../../images/team/Jocelyn.jpg"
import jolene from "../../images/team/jolene.jpg"
import jonat from "../../images/team/jonat.jpg"
import Kevin from "../../images/team/Kevin Frans.jpg"
import Meilista from "../../images/team/Meilista.jpg"
import Michael from "../../images/team/Michael.jpg"
import Mikhael from "../../images/team/Mikhael.jpg"
import Naomi from "../../images/team/Naomi.jpg"
import Rachel from "../../images/team/Rachel.jpg"
import Raynard from "../../images/team/Raynard.jpg"
import Sheperd from "../../images/team/Sheperd.jpg"
import Sherley from "../../images/team/Sherley.jpg"
import Stephanie from "../../images/team/Stephanie.jpg"
import Valensia from "../../images/team/Valensia.jpg"
import valeska from "../../images/team/valeska.jpg"
import Yoel from "../../images/team/Yoel.jpg"

export default function AnggotaPage() {
    const title = "Anggota-anggota OSIS SMAK 1 PENABUR Jakarta"
    const content = (
        <Content>
            <h1 className="font-semibold text-center text-2xl lg:text-4xl"><b>Anggota OSIS</b></h1>
            <br />
            <h1 className="font-semibold text-center text-lg lg:text-2xl">Badan Pengurus Harian</h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div>
                    <Team 
                        img={ Febryan } 
                        title="Febryan Hartanto" 
                        desc="Ketua OSIS"
                        alt="Febryan"
                    />
                </div>
                <div>
                    <Team 
                        img={ Valerie } 
                        title="Valerie Graciella" 
                        desc="Wakil Ketua OSIS"
                        alt="Valerie"
                    />
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 justify-center mx-auto">
                <div>
                    <Team 
                        img={ Angeline } 
                        title="Angeline Marcelle Lukito" 
                        desc="Sekretaris 1"
                        alt="Angeline"
                    />
                </div>
                <div>
                    <Team 
                        img={ Evelyn } 
                        title="Evelyn Nathasha Seyo" 
                        desc="Sekretaris 2"
                        alt="Evelyn"
                    />
                </div>
                <div>
                    <Team 
                        img={ Janice } 
                        title="Janice Andrea Claire" 
                        desc="Bendahara"
                        alt="Janice"
                    />
                </div>
            </div>
            <br />
            <h1 className=" text-center text-lg lg:text-xl">Bidang 1</h1>
            <h1 className="font-semibold text-center text-xl lg:text-2xl">Pembinaan Keimanan dan Ketakwaan Terhadap Tuhan Yang Maha Esa</h1>
            <br />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <Team 
                        img={ jolene } 
                        title="Jolene Eleora Mok" 
                        desc="Koordinator Bidang"
                        alt="Jolene"
                    />
                </div>
                <div>
                    <Team 
                        img={ Raynard } 
                        title="Raynard Valere Ho" 
                        desc="Anggota Bidang"
                        alt="Raynard"
                    />
                </div>
                <div>
                    <Team 
                        img={ Beatrice } 
                        title="Beatrice Valerina Djayasaputra" 
                        desc="Anggota Bidang"
                        alt="Beatrice"
                    />
                </div>
            </div>
            <br />
            <h1 className=" text-center text-lg lg:text-xl">Bidang 2</h1>
            <h1 className="font-semibold text-center text-xl lg:text-2xl">
                Pembinaan Budi Pekerti Luhur dan Akhlak Mulia
            </h1>
            <br />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <Team 
                        img={ Darrel } 
                        title="Darrel Afrian Tjahjadi" 
                        desc="Koordinator Bidang"
                        alt="Darrel"
                    />
                </div>
                <div>
                    <Team 
                        img={ Stephanie } 
                        title="Stephanie Patricia Anshell" 
                        desc="Anggota Bidang"
                        alt="Stephanie"
                    />
                </div>
                <div>
                    <Team 
                        img={ Chloe } 
                        title="Chloe Stephanie Sugiarto" 
                        desc="Anggota Bidang"
                        alt="Chloe"
                    />
                </div>
            </div>
            <br />
            <h1 className=" text-center text-lg lg:text-xl">Bidang 3</h1>
            <h1 className="font-semibold text-center text-xl lg:text-2xl">
                Pembinaan Kepribadian Unggul, Wawasan Kebangsaan, dan Bela Negara
            </h1>
            <br />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <Team 
                        img={ Meilista } 
                        title="Meilista Angelica Hierenvira" 
                        desc="Koordinator Bidang"
                        alt="Meilista"
                    />
                </div>
                <div>
                    <Team 
                        img={ Sheperd } 
                        title="Sheperd Petra Karauwan" 
                        desc="Anggota Bidang"
                        alt="Sheperd"
                    />
                </div>
                <div>
                    <Team 
                        img={ Sherley } 
                        title="Sherley Aurellia Pricilla Bong" 
                        desc="Anggota Bidang"
                        alt="Sherley"
                    />
                </div>
            </div>
            <br />
            <h1 className=" text-center text-lg lg:text-xl">Bidang 4</h1>
            <h1 className="font-semibold text-center text-xl lg:text-2xl">
                Pembinaan Prestasi Akademik dan Ilmu Pengetahuan dan Teknologi (IPTEK)
            </h1>
            <br />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <Team 
                        img={ Jesselyne } 
                        title="Jesselyne Gratia Sylvian" 
                        desc="Koordinator Bidang"
                        alt="Jesselyne"
                    />
                </div>
                <div>
                    <Team 
                        img={ Michael } 
                        title="Michael Evan Djunaidi" 
                        desc="Anggota Bidang"
                        alt="Michael"
                    />
                </div>
                <div>
                    <Team 
                        img={ Geoffrey } 
                        title="Geoffrey Li" 
                        desc="Anggota Bidang"
                        alt="Geoffrey"
                    />
                </div>
            </div>
            <br />
            <h1 className=" text-center text-lg lg:text-xl">Bidang 5</h1>
            <h1 className="font-semibold text-center text-xl lg:text-2xl">
                 Pembinaan Demokrasi, HAM, Pendidikan Politik, Lingkungan Hidup, Kepekaan, dan Toleransi Sosial Dalam Konteks Masyarakat Plural
            </h1>
            <br />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div className="justify-center mx-auto col-start-1 col-end-2">
                    <Team 
                        img={ Gillian } 
                        title="Gillian Season" 
                        desc="Koordinator Bidang"
                        alt="Gillian"
                    />
                </div>
                <div className="justify-center mx-auto col-start-3 col-end-4">
                    <Team 
                        img={ Jocelyn } 
                        title="Jocelyn Emmanuella Mok" 
                        desc="Anggota Bidang"
                        alt="Jocelyn"
                    />
                </div>
            </div>
            <br />
            <h1 className=" text-center text-lg lg:text-xl">Bidang 6</h1>
            <h1 className="font-semibold text-center text-xl lg:text-2xl">
                Pembinaan Kreativitas, Keterampilan, dan Kewirausahaan
            </h1>
            <br />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <Team 
                        img={ Bob } 
                        title="Bob Jesse Lie" 
                        desc="Koordinator Bidang"
                        alt="Bob"
                    />
                </div>
                <div>
                    <Team 
                        img={ Birgitta } 
                        title="Birgitta Graciella" 
                        desc="Anggota Bidang"
                        alt="Birgitta"
                    />
                </div>
                <div>
                    <Team 
                        img={ Jesslyn } 
                        title="Jesslyn Theodora" 
                        desc="Anggota Bidang"
                        alt="Jesslyn"
                    />
                </div>
            </div>
            <br />
            <h1 className=" text-center text-lg lg:text-xl">Bidang 7</h1>
            <h1 className="font-semibold text-center text-xl lg:text-2xl">
                Pembinaan Kualitas Olahraga, Jasmani, Kesehatan, dan Gizi Berbasis Sumber Gizi Terdiversifikasi
            </h1>
            <br />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div className="justify-center mx-auto row-start-1 row-end-4">
                    <Team 
                        img={ Valensia } 
                        title="Valensia Nadya Anthony" 
                        desc="Koordinator Bidang"
                        alt="Valensia"
                    />
                </div>
                <div>
                    <Team 
                        img={ JV } 
                        title="Jessica Valerie Dewanta" 
                        desc="Anggota Bidang"
                        alt="JV"
                    />
                </div>
                <div>
                    <Team 
                        img={ valeska } 
                        title="Valeska Theodora Beatrice" 
                        desc="Anggota Bidang"
                        alt="valeska"
                    />
                </div>
                <div className="justify-center mx-auto">
                    <Team 
                        img={ dacen } 
                        title="David Chen" 
                        desc="Anggota Bidang"
                        alt="dacen"
                    />
                </div>
            </div>
            <br />
            <h1 className=" text-center text-lg lg:text-xl">Bidang 8</h1>
            <h1 className="font-semibold text-center text-xl lg:text-2xl">
                Pembinaan Sastra Dan Budaya
            </h1>
            <br />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <Team 
                        img={ Rachel } 
                        title="Rachel Illona" 
                        desc="Koordinator Bidang"
                        alt="Rachel"
                    />
                </div>
                <div>
                    <Team 
                        img={ Erika } 
                        title="Erika Gabriella Ramiel" 
                        desc="Anggota Bidang"
                        alt="Erika"
                    />
                </div>
                <div>
                    <Team 
                        img={ Yoel } 
                        title="Yoel Kyocera Antony" 
                        desc="Anggota Bidang"
                        alt="Yoel"
                    />
                </div>
            </div>
            <br />
            <h1 className=" text-center text-lg lg:text-xl">Bidang 9</h1>
            <h1 className="font-semibold text-center text-xl lg:text-2xl">
                Pembinaan Teknologi, Informasi dan Komunikasi (TIK)
            </h1>
            <br />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <Team 
                        img={ jonat } 
                        title="Jonathan Kristian" 
                        desc="Koordinator Bidang"
                        alt="jonat"
                    />
                </div>
                <div>
                    <Team 
                        img={ Ferdinand } 
                        title="Ferdinand" 
                        desc="Anggota Bidang"
                        alt="Ferdinand"
                    />
                </div>
                <div>
                    <Team 
                        img={ Mikhael } 
                        title="Mikhael James Linsky" 
                        desc="Anggota Bidang"
                        alt="Mikhael"
                    />
                </div>
            </div>
            <br />
            <h1 className=" text-center text-lg lg:text-xl">Bidang 10</h1>
            <h1 className="font-semibold text-center text-xl lg:text-2xl">
                Pembinaan Komunikasi Dalam Bahasa Inggris
            </h1>
            <br />
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div>
                    <Team 
                        img={ Naomi } 
                        title="Naomi Hasian Felicia Butarbutar" 
                        desc="Koordinator Bidang"
                        alt="Naomi"
                    />
                </div>
                <div>
                    <Team 
                        img={ Amelia } 
                        title="Amelia Maureen Widiya" 
                        desc="Anggota Bidang"
                        alt="Amelia"
                    />
                </div>
                <div>
                    <Team 
                        img={ Irving } 
                        title="Irving Jorryn Lie" 
                        desc="Anggota Bidang"
                        alt="Irving"
                    />
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
