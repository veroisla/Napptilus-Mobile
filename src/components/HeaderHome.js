// import { React, useState } from 'react';
// import { Link } from 'react-router-dom';

// import '../styles/components/HeaderHome.scss';
// import logo from '../images/logo.white.PNG';
// import Hamburguer from '../images/icon-hamburger.svg';
// import { BsBag } from 'react-icons/bs';

// function Header() {
//   const [sidebar, setSidebar] = useState(false);

//   const showSideBar = () => setSidebar(!sidebar);
//   return (
//     <header className="header">
//       <Link to={'/'}>
//         <img
//           src={logo}
//           alt="Logo Napptilus"
//           title="Página principal"
//           className="header__logo"
//         />
//       </Link>
//       <nav className="header__links">
//         <p className="header__links__item">Iniciar sesión</p>
//         <p className="header__links__item">Ayuda</p>{' '}
//         <div className="header__cart">
//           <BsBag />
//         </div>
//       </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/HeaderHome.scss';

import Logo from '../images/logo.white.PNG';
import { FiMenu } from 'react-icons/fi';
import { BsBag } from 'react-icons/bs';

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <header className="header">
      <div className="header__LogoAndNav">
        <Link to={'/'}>
          <img src={Logo} alt="Logo Web" className="header__Logo" />
        </Link>
        {/* NAV DESKTOP */}
        <nav className="navDesktop">
          <ul className="navDesktop__list">
            <li>
              <a className="navDesktop__items" href="#About">
                Iniciar sesión
              </a>
            </li>
            <li>
              <a className="navDesktop__items" href="#Services">
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
