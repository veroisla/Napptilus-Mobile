import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Item.scss';
import Image from '../components/Image';

function Item(props) {
  const mobileElement = props.dataMobile.map((mobile, index) => {
    return (
      <Link to={`/api/product/${mobile.id}`}>
        <li key={index} className="item__mobile">
          <Image mobile={mobile} />
          <h4>{mobile.brand}</h4>
          <h5>{mobile.model}</h5>
          <p>{mobile.price}</p>
          <p>{mobile.ram}</p>
        </li>
      </Link>
    );
  });
  return (
    <section className="item__section">
      <ul className="item__list">{mobileElement}</ul>
    </section>
  );
}

export default Item;
