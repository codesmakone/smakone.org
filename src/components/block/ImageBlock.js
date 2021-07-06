import React from 'react'

function ImageBlock({src}) {
    return (
        <div className="grid grid-cols-12 my-5 leading-7">
        <div className="col-span-12 lg:col-span-12">
            <img src={src} className="rounded-lg" alt="#"/>
        </div>
    </div>
        
    )
}

export default ImageBlock
