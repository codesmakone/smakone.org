import React from 'react'
import { Link } from 'gatsby';
import LogoPenabur from '../../images/Logo_BPK.png';
import LogoSMAK1 from '../../images/OSIS-SMAK-1.png';

function NavbarContainter() {
    return (
        <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400" href="#">Home</a></li>
              <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400" href="#">Gallery</a></li>
              <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400" href="#">About Us</a></li>
              <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400 lg:mb-0 mb-2" href="#">Alumni</a></li>
            </ul>
          </nav>
          <a href="#" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
            <img className="square-full w-10 h-10 border-2 border-transparent hover:border-gray-400" src={LogoSMAK1} alt="smakone" />
          </a>
        </div>
    );
}

export default NavbarContainter
