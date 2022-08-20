// -Icono de aplicación lleva a página principal -->
// - Mostrar breadcrumbs -->
// - Parte derecha se mostrará el carrito con nº de items añadidos -->

import React from 'react';
import { Link } from 'react-router-dom';
// import { Breadcrumbs, Link } from '@material-ui/core';

import '../styles/components/Header.scss';
import logo from '../images/logo.white.PNG';
// import logo_Apple from '../images/logo_Apple.png';

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
