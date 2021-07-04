import React from 'react'

export default function ContentBlock({children}) {
    return (
        <div className="grid grid-cols-12 my-5">
            <div className="hidden lg:block lg:col-span-1"></div>
            <div className="col-span-12 lg:col-span-10">
                {children}
            </div>
        </div>
    )
}
