import React from 'react'
import { Link } from 'gatsby';

function AlumniCard(props) {
    return(
        <div className="shadow-xl m-3">
            <img src={ props.img } className="object-contain" alt="Billy" />
            <div className="p-2">
                <h2 className="font-bold text-xl">{ props.title }</h2>
                <p className="text-justify my-6">{ props.desc }</p>
                <div className="font-medium text-xl my-3 text-gray-500">
                    <Link href="mailto:smak1.osis@bpkpenaburjakarta.or.id">
                        Kenali Lebih Lanjut {">"}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AlumniCard