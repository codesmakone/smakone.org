import React from 'react'
import { Link } from 'gatsby';

function HomeCard(props) {
    return(
        <div className="m-3 p-3 shadow-2xl rounded-xl bg-white">
            <img src={ props.img } className="object-contain rounded-lg" alt="Billy" />
            <div className="p-2">
                <p className="text-center">{ props.desc }</p>
                <h2 className="font-medium text-center text-lg mb-2">{ props.title }</h2>
                <div className="font-normal text-center mt-3 mb-2 text-gray-500">
                    <Link to={props.dir}>
                        Kenali Lebih Lanjut {">"}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeCard