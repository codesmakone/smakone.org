import React from 'react'

export default function OsisSection(props) {
    return (
        <div className="m-3">
            <img src={ props.img } className="object-center w-3/12 rounded-lg shadow-xl mx-auto" alt={props.alt} />
            <div className="p-2">
                <h2 className="font-semibold text-center text-3xl">{ props.title }</h2>
                <p className="text-center mb-6">{ props.desc }</p>
            </div>
        </div>
    )
}
