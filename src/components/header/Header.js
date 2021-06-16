import React from 'react';
import { Link } from 'gatsby';
import NavbarContainer from "../navbar/NavbarContainer";

import SMAK1 from '../../images/SMAK1PENABURJakarta.png';
import './Checked.css';

function Header() {
  return (
    <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
        <div className="flex-1 flex justify-between items-center">
          <Link to="/">
            <img className="object-scale-down h-5" src={SMAK1} alt="OSIS SMAK 1 Logo" />
          </Link>
        </div>
        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block">
          <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <NavbarContainer></NavbarContainer>

        
      </header>
  );
}

export default Header