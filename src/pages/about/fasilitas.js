import React from 'react'
import AboutLayout from '../../components/page_template/AboutLayout'
import Banner from "../../images/banner2.jpg"

export default function FasilitasPage() {
    const title = "Sejarah, Visi, dan Misi SMAKONE"
    const content = (
        <div>
            
        </div>
    )
    return (
        <AboutLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}
