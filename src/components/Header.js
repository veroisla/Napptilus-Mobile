// -Icono de aplicación lleva a página principal -->
// - Mostrar breadcrumbs -->
// - Parte derecha se mostrará el carrito con nº de items añadidos -->

import React from 'react';
import { Link } from 'react-router-dom';
// import { Breadcrumbs, Link } from '@material-ui/core';

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
      <h1>Napptilus</h1>
    </header>
  );
}

export default Header;
