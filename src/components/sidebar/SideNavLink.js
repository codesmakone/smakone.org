import React from 'react'

export default function SideNavLink({first = false}) {
    if(first){
        return (
            <div className="block py-4 text-lg border-t-2 border-b-2">Hello</div>
        )
    }
    return (
        <div className="block py-4 text-lg border-b-2">Hello</div>
    )
}
