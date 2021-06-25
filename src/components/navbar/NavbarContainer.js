import React from 'react'
import { Link } from 'gatsby';
import SMAK1 from '../../images/SMAK1PENABURJakarta.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function NavbarContainter() {
  const Navbar = ({ toggle }) => {
    return (
      <nav
        className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
        role='navigation'
      >
        <Link to='/' className='pl-8'>
          <img className="object-scale-down h-5" src={SMAK1} alt="OSIS SMAK 1 Logo" />
        </Link>
        <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
        <div className='pr-8 md:block  hidden'>
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400" to="/about">Tentang Kami</Link></li>
            <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400" to="#!">Kehidupan Smukierz</Link></li>
            <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400" to="/kegiatan">Kegiatan</Link></li>
            <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400" to="#!">Berita</Link></li>
            <li><Link className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-gray-400 lg:mb-0 mb-2" to="/alumni">Alumni</Link></li>
          </ul>
        </div>
      </nav>
      
    );
  };
}

export default NavbarContainter;
