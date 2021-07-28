import React from 'react'

export default function KegiatanSection(props) {
    return (
        <div className="m-3">
            <div className="p-2">
                <h2 className="font-semibold text-center text-3xl">{ props.title }</h2>
                <p className="text-center mb-6">{ props.subtitle }</p>
            </div>
            <img src={ props.img } className="object-cover w-full rounded-lg shadow-xl" alt={props.alt} />
        </div>
    )
}