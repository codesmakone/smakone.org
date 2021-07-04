import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Content from '../../components/block/Content'
import Banner from "../../images/banner2.jpg"
import Osis from '../../components/osis/OsisSection'
import jolene from '../../images/team/jolene.jpg'
import raynard from '../../images/team/Raynard.jpg'
import beatrice from '../../images/team/beatrice.jpg'

export default function bidang1() {
    const title = "Bidang 1"
    const content = (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-3 py-5">
                <div>
                    <Osis
                        img={ jolene } 
                        title="Billy Stevanus" 
                        desc='"Alumni yang selalu aktif dan bersemangat"'
                    />
                </div>
                <div>
                    <Osis
                        img={ raynard } 
                        title="Billy Stevanus" 
                        desc='"Alumni yang selalu aktif dan bersemangat"'
                    />
                </div>
                <div>
                    <Osis
                        img={ beatrice } 
                        title="Billy Stevanus" 
                        desc='"Alumni yang selalu aktif dan bersemangat"'
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
