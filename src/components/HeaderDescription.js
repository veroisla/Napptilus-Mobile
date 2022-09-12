import React from 'react';
import Logo from '../components/Logo';
import { BsBag } from 'react-icons/bs';
import '../styles/components/HeaderDescription.scss';

function HeaderDescription() {
  return (
    <header className="header header__desc">
      <Logo />
      <div className=" header__cart__desc">
        <BsBag />
      </div>
    </header>
  );
}

export default HeaderDescription;
