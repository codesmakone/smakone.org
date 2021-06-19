import React from 'react'

export default function Title({children}) {
    return (
        <div className="text-4xl font-bold mb-6 text-gray-800 block">
            {children}
        </div>
    )
}
