import React from 'react'
import OsisLayout from '../../components/page_template/OsisLayout'
import Content from '../../components/block/Content'
import Banner from "../../images/banner2.jpg"


export default function bidang3() {
    const title = "Deskripsi Bidang-bidang OSIS SMAK 1 PENABUR Jakarta"
    const content = (
        <Content>
            BPH: lorem ipsum <br></br>
            Bidang 1: lorem ipsum <br></br>
            Bidang 2: lorem ipsum <br></br>
            Bidang 3: lorem ipsum <br></br>
            Bidang 4: lorem ipsum <br></br>
            Bidang 5: lorem ipsum <br></br>
            Bidang 6: lorem ipsum <br></br>
            Bidang 7: lorem ipsum <br></br>
            Bidang 8: lorem ipsum <br></br>
            Bidang 9: lorem ipsum <br></br>
            Bidang 10: lorem ipsum <br></br>
            </Content>
    )
    return (
        <OsisLayout 
            hero = {Banner}
            title= {title}
            content={content}/>
    )
}