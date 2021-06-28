import React from 'react'
import { Link } from 'gatsby'
import AboutLayout from '../../components/page_template/AboutLayout'
import Content from '../../components/text_helper/Content'
import Banner from "../../images/banner2.jpg"

export default function SongsPage() {
    const title = "Sekilas Tentang SMAKONE"
    const content = (
        <Content>
            <h2 className="font-medium text-3xl lg:text-5xl mt-12 justify-center text-center">
                Cinta SMAK 1
            </h2>
            <br />
            <div className="mb-8 iframe-container">
                <iframe
                    title="Cinta SMAK 1"
                    src="https://www.youtube.com/embed/3u_OEOwSBjE" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            Lirik: 
            <br />
            <br />
            Bersama kami datang <br />
            Bersama kami blajar <br />
            Menuntut ilmu tuk masa depan <br />
            Dan jadi harapan bangsa <br />
            <br />
            SMAK 1 lah tempat kami <br />
            SMAK 1 lah cinta kami <br />
            Di SMAK 1 lah kita jaya <br />
            Itulah semboyan kami <br />
            <br />
            Kami bangga padanya <br />
            Dan berjanji kan setia <br />
            Kami tidak kan mengecewakan <br />
            Kami menjaga citra mu SMAK 1 <br />
            <br />
            Berdoa slalu padaNya <br />
            Belajar dan bekerjalah <br />
            Maju terus dan pantang mundur  <br />
            Di SMAK 1 kita jaya 
        </Content>
    )
    return (
        <AboutLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}