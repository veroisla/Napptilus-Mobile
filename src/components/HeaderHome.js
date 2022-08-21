import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/HeaderHome.scss';
import logo from '../images/logo.white.PNG';
import { BsBag } from 'react-icons/bs';

function Header() {
  return (
    <header className="header">
      <Link to={'/'}>
        <img
          src={logo}
          alt="Logo Napptilus"
          title="Página principal"
          className="header__logo"
        />
      </Link>
      <div className="header__links">
        <p className="header__links__item">Iniciar sesión</p>
        <p className="header__links__item">Ayuda</p>{' '}
        <div className="header__cart">
          <BsBag />
        </div>
      </div>
    </header>
  );
}

export default Header;
