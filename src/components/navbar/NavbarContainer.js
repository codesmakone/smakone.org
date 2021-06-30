import React from 'react'
import { Link } from 'gatsby';

function NavbarContainter() {
    return (
        <div className="hidden lg:flex lg:items-center lg:w-auto w-full py-7" id="menu">
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400" to="/about">Tentang Kami</Link></li>
              <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400" to="/smukierz">Kehidupan Smukierz</Link></li>
              <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400" to="/kegiatan">Kegiatan</Link></li>
              <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400 lg:mb-0 mb-2" to="/alumni">Alumni</Link></li>
            </ul>
          </nav>
        </div>
    );
}

export default NavbarContainter
