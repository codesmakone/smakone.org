import React from 'react'
import SideNavLink from './SideNavLink'

export default function Sidebar() {
    return (
        <div className="mr-8">
            <SideNavLink first = {true}/>
            <SideNavLink />
            <SideNavLink />
        </div>
    )
}
