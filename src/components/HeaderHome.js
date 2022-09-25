import React, { useState } from 'react';
import Logo from '../components/Logo';

import '../styles/components/HeaderHome.scss';
import { BsBag } from 'react-icons/bs';
import ShoppingCart from '../components/ShoppingCart';

function Header(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <header className="header" id="home">
      <div className="header__LogoAndNav">
        <Logo />
        <BsBag
          alt="Nav Menu Header"
          className="header__Cart"
          onClick={showSideBar}
        />
      </div>
      <nav className={sidebar ? 'nav__menu--open' : 'nav__menu--notOpen'}>
        <div className="nav__container" onClick={showSideBar}>
          <ShoppingCart
            favourites={props.favourites}
            dataMobile={props.dataMobile}
            deleteFavourite={props.deleteFavourite}
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
