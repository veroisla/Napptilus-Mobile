import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.white.PNG';
import { BsBag } from 'react-icons/bs';
import '../styles/components/HeaderDescription.scss';

function HeaderDescription() {
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
      <div className="header__cart header__cart__desc">
        <BsBag />
      </div>
    </header>
  );
}

export default HeaderDescription;
