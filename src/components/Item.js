// lISTADO PRODUCTOS- Info del producto: img, marca, modelo, precio

import React from 'react';
import Image from '../components/Image';

function Item(props) {
  const mobileElement = props.dataMobile.map((mobile) => {
    return (
      <li key={mobile.id}>
        <a href="#">
          <Image mobile={mobile} />
          <h4>{mobile.brand}</h4>
          <h5>{mobile.model}</h5>
          <p>{mobile.price}</p>
        </a>
      </li>
    );
  });
  return (
    <section>
      <ul>{mobileElement}</ul>
    </section>
  );
}

export default Item;
