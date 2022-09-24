import React from 'react';
import '../styles/components/AddToCartButton.scss';

function ShoppingCart(props) {
  const favouritesList = props.favourites.map((fav, id) => {
    return (
      <section>
        <li key={id}>
          <img src={fav.imgUrl} alt={fav.model} />
          <p>{fav.brand}</p>
          <p>{fav.model}</p>
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
