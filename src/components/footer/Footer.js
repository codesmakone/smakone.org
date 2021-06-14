import React from 'react';
import { Link } from 'gatsby';

//  fontawsome icon for Instagram, Line, Youtube
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLine } from '@fortawesome/free-brands-svg-icons';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

import LogoPenabur from '../../images/Logo_BPK.png';
import LogoSMAK1 from '../../images/OSIS-SMAK-1.png';

function Footer() {
    return (
        <div>
            <footer>
                <div className="container mx-auto py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="flex justify-items-center lg:justify-items-start">
                            <img src={LogoPenabur} className="object-scale-down h-24 mr-2" alt="BPK PENABUR Logo"/>
                            <img src={LogoSMAK1} className="object-scale-down h-24" alt="OSIS SMAK 1 Logo"/>
                        </div>
                        <div className="flex justify-center object-center ">
                            <p className="text-center">
                                Jalan Tanjung Duren Raya Nomor 4<br/>
                                Jakarta Barat, DKI Jakarta 11470<br/>
                                Tel:(+62)21 5666962
                            </p>
                        </div>
                        <div className="text-center lg:text-right">
                            <h3 className="mb-3 font-bold">
                                Hubungi Kami
                            </h3>
                            <Link href="mailto:smak1.osis@bpkpenaburjakarta.or.id" className="mr-2"><FontAwesomeIcon icon={faEnvelopeSquare} size="2x" /></Link>
                            <Link href="https://www.instagram.com/smukiee/" className="mr-2"><FontAwesomeIcon icon={faInstagram} size="2x" /></Link>
                            <Link href="http://line.me/ti/p/~@xwk9576e" className="mr-2"><FontAwesomeIcon icon={faLine} size="2x" /></Link>
                            <Link href="https://www.youtube.com/channel/UCscmFcZIn8T0-Of192snpcQ"><FontAwesomeIcon icon={faYoutubeSquare} size="2x" /></Link>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-200 text-center py-1 text-xs">
                    <p>
                        Copyright © 2021 SMAK ONE Student Council All Rights Reserved
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer