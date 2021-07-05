import React from 'react'

export default function OsisTeam(props) {
    return (
        <div className="mx-auto justify-center">
            <img src={ props.img } className="object-center w-6/12 rounded-full shadow-xl mx-auto" alt={props.alt} />
            <div className="p-2">
                <h2 className="font-semibold text-center text-xl">{ props.title }</h2>
                <p className="text-center mb-6">{ props.desc }</p>
            </div>
        </div>
    )
}