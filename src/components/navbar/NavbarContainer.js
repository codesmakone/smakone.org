import React from 'react'
import { Link } from 'gatsby';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function NavbarContainter() {
    return (
        <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400" href="#!">Gallery</a></li>
              <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400" to="/about">About Us</Link></li>
              <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400 lg:mb-0 mb-2" to="/alumni">Alumni</Link></li>
            </ul>
          </nav>
          <a href="#!" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
            <FontAwesomeIcon icon={faSearch} size="lg" className="rounded-full border-2 border-transparent hover:bor-gray-400" alt="Search Logo" />
          </a>
        </div>
    );
}

export default NavbarContainter
