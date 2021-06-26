import React from 'react'

export default function KegiatanSection(props) {
    return (
        <div>
            <h2 className="font-medium text-3xl lg:text-5xl mt-12 justify-center text-center">
                {props.title}
            </h2>
            <p className="mb-6 justify-center text-center text-lg text-gray-500">
                {props.subtitle}
            </p>
            <img src={props.img} className="mb-8 text-center" alt="Smakonecup"/>
        </div>
    )
}
