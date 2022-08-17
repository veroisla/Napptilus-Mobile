//DETALLE PRODUCTO

import React from 'react';
import Image from '../components/Image';

function Description(props) {
  return (
    <article>
      {' '}
      <Image mobile={props.mobile} />
      <h4>{props.mobile.brand}</h4>
      <h5>{props.mobile.model}</h5>
      <p>{props.mobile.price}</p>
    </article>
  );
}

export default Description;
