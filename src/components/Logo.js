import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.white.PNG';

function Logo() {
  return (
    <Link to={'/'}>
      <img
        src={logo}
        alt="Logo Napptilus"
        title="Página principal"
        className="header__logo"
      />
    </Link>
  );
}

export default Logo;
