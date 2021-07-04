import React from 'react'

function FAQ(props) {
    return(
        <div>
            <h2 className="justify-left text-left font-semibold px-2 pt-4">
                {props.qtn}
            </h2>
            <p className=" text-justify p-2">
                {props.ans}
            </p>
        </div>
    )
}

export default FAQ