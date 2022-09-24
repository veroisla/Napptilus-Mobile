import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Item.scss';
import Image from '../components/Image';
import { ImMobile2 } from 'react-icons/im';

function Item(props) {
  if (props.dataMobile.length === 0) {
    return (
      <div className="item__dontExist">
        <ImMobile2 className="item__dontExist__mobile" />
        <p className="item__dontExist__search">Sin resultados de búsqueda</p>
        <p className="item__dontExist__result">
          No se han encontrado resultados para la búsqueda: "{props.inputSearch}
          "
        </p>
      </div>
    );
  } else {
    const mobileElement = props.dataMobile.map((mobile, index) => {
      return (
        <>
          <Link to={`/api/product/${mobile.id}`}>
            <li key={index} className="item__mobileContainer">
              <div className="item__img">
                <Image mobile={mobile} />
              </div>
              <div className="item__desc">
                <p className="item__brandAndModel">
                  <strong>{mobile.brand}</strong> -{' '}
                  <strong>{mobile.model}</strong>
                </p>
                {mobile.price === '' ? (
                  'Sin datos €'
                ) : (
                  <p className="item__price">{mobile.price}€</p>
                )}
              </div>
            </li>
          </Link>
        </>
      );
    });
    return (
      <section className="item">
        <ul className="item__list">{mobileElement}</ul>
      </section>
    );
  }
}
export default Item;
