import React from 'react';
import '../styles/components/AddToCartButton.scss';
import { ImCross } from 'react-icons/im';

function ShoppingCart(props) {
  const handleReset = (ev) => {
    props.deleteFavourite();
  };
  const favouritesList = props.favourites.map((fav, index) => {
    return (
      <section>
        <li key={index}>
          <img src={fav.imgUrl} alt={fav.model} />
          <p>{fav.brand}</p>
          <p>{fav.model}</p>
          <ImCross onClick={handleReset} />
        </li>
      </section>
    );
  });

  return (
    <div>
      <h4>Productos comprados</h4>
      <ul>{favouritesList}</ul>
    </div>
  );
}

export default ShoppingCart;
