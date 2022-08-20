import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.scss';
import logo from '../images/logo.white.PNG';

function Header() {
  return (
    <header className="header">
      <Link to={'/'}>
        {' '}
        <img
          src={logo}
          alt="Logo Napptilus"
          title="Página principal"
          className="header__logo"
        />
      </Link>
      <div>
        <h1 className="header__title">Napptilus</h1>
      </div>
    </header>
  );
}

export default Header;
