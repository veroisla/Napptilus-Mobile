import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../components/Image';

function Item(props) {
  const mobileElement = props.dataMobile.map((mobile) => {
    return (
      <Link to={`/api/product/${mobile.id}`}>
        <li key={mobile.id}>
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
    <section>
      <ul>{mobileElement}</ul>
    </section>
  );
}

export default Item;
