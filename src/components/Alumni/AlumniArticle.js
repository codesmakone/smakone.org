import React from 'react'

function AlumniArticle({children}) {
    return(
        <div>
            <p className="my-5 text-justify">
                { children }
            </p>
        </div>
    )
}

export default AlumniArticle