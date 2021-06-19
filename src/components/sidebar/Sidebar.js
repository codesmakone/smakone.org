import React from 'react'
import SideNavLink from './SideNavLink'

export default function Sidebar({data}) {
    return (
    <div>
        <div className="mr-8">
            {
                data.map((link,index)=>{
                    return (<SideNavLink data={link} key={index} first={!!(index===0)}/>)
                })
            }
        </div>
    </div>
    )
}
