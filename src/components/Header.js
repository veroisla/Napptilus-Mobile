import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.scss';
import logo from '../images/logo.white.PNG';
import { BsBag } from 'react-icons/bs';

function Header() {
  return (
    <header className="header">
      <div className="header__icons">
        <Link to={'/'}>
          <img
            src={logo}
            alt="Logo Napptilus"
            title="Página principal"
            className="header__logo"
          />
        </Link>
        <BsBag className="header__cart" />
      </div>

      <h1 className="header__title">Napptilus</h1>
    </header>
  );
}

export default Header;
