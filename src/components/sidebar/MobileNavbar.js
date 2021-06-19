import React from 'react'
import {Link} from 'gatsby'
export default function MobileNavbar({data}) {
    return (
        <div >
            <div className="full-w bg-gray-200 bg-opacity-80 border-b-4 border-gray-300">
                <h1 className="py-3 px-2 font-bold">Dalam Bagian Ini</h1>
            </div>
            <div className="flex flex-col">
            {
                data.map((link,index)=>{
                    return (
                    <div className= "py-3 px-2 border-b-2 border-gray-300">
                        <Link to={link.link} key={index} activeClassName="text-blue-400">{link.title}</Link>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}
