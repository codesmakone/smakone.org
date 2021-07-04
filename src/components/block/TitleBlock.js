import React from 'react'

export default function TitleBlock({children}) {
    return (
        <div className="grid grid-cols-12 justify-center my-5 leading-7">
            <div className="hidden lg:block lg:col-span-1"></div>
            <div className="col-span-12 lg:col-span-10">
                <h1 className="mb-5 font-bold text-5xl text-center">{children}</h1>
            </div>
        </div>
    )
}
