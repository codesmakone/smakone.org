import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import Febryan from '../../images/team/Febryan.jpg'
import Valerie from '../../images/team/Valerie.jpg'
import Angeline from '../../images/team/Angeline.jpg'
import Evelyn from '../../images/team/Evelyn.jpg'
import Janice from '../../images/team/Janice.jpg'

export default function bph() {
    const title = "OSIS"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5 text-center">
                <h1 className="font-semibold text-center text-4xl"><b>Badan Pengurus Harian</b></h1>
                <div>
                    <Osis
                        img={ Febryan } 
                        title="Febryan Hartanto"
                        desc="Halo! Kenalin aku Febryan, kelas 12, selaku Ketua OSIS. Ini instagramku ya, @febryanxh, jangan lupa di follow 😉. Fun fact! Tau gasih, salah satu fakta unik tentangku adalah aku tidak bisa makan makanan yang pedas. Selain itu, aku suka berenang. Go Confidently in the Direction of Your Dreams, Live the Life You've Imagined, itulah motto hidupku!
                        "
                    />
                </div>
                <div>
                    <Osis
                        img={ Valerie } 
                        title="Valerie Graciella" 
                        desc="Halo! Kenalin aku Valerie, kelas 11, selaku Wakil Ketua OSIS. Ini instagramku ya, @valerie_graciella, jangan lupa di follow 😉. Fun fact! Tau gasih, salah satu fakta unik tentangku adalah aku bisa tidur selama 12 jam sehari lhoo! Selain itu, aku suka baca buku, nonton film, dan bermain musik. Keep planting and sowing, living and knowing that beautiful things take time, and that is okay, itulah motto hidupku!"
                    />
                </div>
                <div>
                    <Osis
                        img={ Angeline } 
                        title="Angeline Marcelle Lukito" 
                        desc="Halo! Kenalin aku Angeline, kelas 12, selaku Sekretaris OSIS. Ini instagramku ya, @angelinemarcellee, jangan lupa di follow 😉. Fun fact! Tau gasih, salah satu fakta unik tentangku adalah aku bisa lari pakai high heels loh! Selain itu, aku suka baca buku dan ngobrol sama teman. Trust the timing of your life, itulah motto hidupku!
                        "
                    />
                </div>
                <div>
                    <Osis
                        img={ Evelyn } 
                        title="Evelyn Natasha Seyo" 
                        desc="Halo! Kenalin aku Evelyn, kelas 12, selaku Sekretaris OSIS. Ini instagramku ya, @evelynseyo, jangan lupa di follow 😉. Fun fact! Tau gasih, salah satu fakta unik tentangku adalah zodiak ku Libra. Selain itu, aku suka menonton film dan melukis. Life is not a problem to be solved but a reality to be lived, itulah motto hidupku! "
                    />
                </div>
                <div>
                    <Osis
                        img={ Janice } 
                        title="Janice Andrea Claire" 
                        desc="Halo! Kenalin aku Janice, kelas 12, selaku Bendahara OSIS. ini instagramku ya, @janiceandreaaa, jangan lupa di follow 😉. Fun Fact! Tau gasih, salah satu fakta unik tentangku adalah aku bisa menonton satu film yang aku suka secara berulang kali. Selain itu, aku suka menari dan juga menyanyi. Live this Day as If it is Your Last, itulah motto hidupku!
                        "
                    />
                </div>
            </div>
        </div>
        )
    return (
        <OsisLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}
