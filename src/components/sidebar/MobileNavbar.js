import React,{useState} from 'react'
import {Link} from 'gatsby'
import { FaAngleDown } from "react-icons/fa";

export default function MobileNavbar({data}) {
    const [active,setActive] = useState(false);
    const handleClick = ()=>{
        setActive(!active)
    }

    return (
        <div className="lg:hidden mt-9">
            <div className="full-w bg-gray-200 bg-opacity-80 border-b-4 border-gray-300 cursor-pointer">
                <div className="py-3 px-3 text-right grid grid-cols-12">
                    <div class="col-start-1 col-end-7 flex items-center font-bold">Dalam Bagian Ini</div>
                    <div class="col-end-13 text-3xl col-span-1 justify-self-end" onClick={handleClick}><FaAngleDown /></div>
                </div>
            </div>
            {
                active &&
                <div className="flex flex-col">
                {  
                    data.map((link,index)=>{
                        return (
                        <div className= "py-3 px-3 border-b-2 border-gray-300">
                            <Link to={link.link} key={index} activeClassName="text-blue-400">{link.title}</Link>
                        </div>
                        )
                    })
                }
            </div>
            }
        </div>
    )
}
