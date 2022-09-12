import React, { useState } from 'react';
import Logo from '../components/Logo';

import '../styles/components/HeaderHome.scss';

import { FiMenu } from 'react-icons/fi';
import { BsBag } from 'react-icons/bs';

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <header className="header" id="home">
      <div className="header__LogoAndNav">
        <Logo />
        {/* NAV DESKTOP */}
        <nav className="navDesktop">
          <ul className="navDesktop__list">
            <li>
              <a className="navDesktop__items" href="#">
                Iniciar sesión
              </a>
            </li>
            <li>
              <a className="navDesktop__items" href="#">
                Ayuda
              </a>
            </li>
            <li>
              <BsBag />
            </li>
          </ul>
        </nav>

        <FiMenu
          alt="Nav Menu Header"
          className="header__Hamburguer"
          onClick={showSideBar}
        />
      </div>
      {/* //NAV MOBILE */}
      <nav className={sidebar ? 'nav__menu--open' : 'nav__menu--notOpen'}>
        <div className="nav__container">
          <ul onClick={showSideBar} className="nav__list">
            <li>
              <a className="nav__items" href="#">
                Iniciar sesión
              </a>
            </li>
            <li>
              <a className="nav__items" href="#">
                Ayuda
              </a>
            </li>
            <li>
              <BsBag className="nav__items" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
