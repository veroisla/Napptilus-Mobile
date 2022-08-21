import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Item.scss';
import Image from '../components/Image';

function Item(props) {
  const mobileElement = props.dataMobile.map((mobile, index) => {
    return (
      <Link to={`/api/product/${mobile.id}`}>
        <li key={index} className="item__mobileContainer">
          <div className="item__img">
            <Image mobile={mobile} />
          </div>
          <div className="item__desc">
            <p className="item__brandAndModel">
              <strong>{mobile.brand}</strong> - <strong>{mobile.model}</strong>
            </p>
            <p className="item__price">{mobile.price}€</p>
          </div>

          {/* <button className="btn__showMore">Ver más</button> */}
        </li>
      </Link>
    );
  });
  return (
    <section className="item">
      <ul className="item__list">{mobileElement}</ul>
    </section>
  );
}

export default Item;
