import React from 'react'
import { Link } from 'gatsby';

function HomeCard(props) {
    return(
        <div className="m-3">
            <img src={ props.img } className="object-cover w-full h-48 rounded-lg" alt={props.alt} />
            <div className="p-2">
                <h2 className="font-medium text-center text-lg">{ props.title }</h2>
                <p className="text-center mb-2">{ props.desc }</p>
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