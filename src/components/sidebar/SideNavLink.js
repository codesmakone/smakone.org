import React from 'react'
import {Link} from 'gatsby'

export default function SideNavLink({first = false,data}) {
    return (
        <div className={`block py-4 text-lg border-b-2 font-semibold text-gray-700 ${first?"border-t-2":""}`}><Link to={data.link} activeClassName="text-blue-400">{data.title}</Link></div>
    )
}
