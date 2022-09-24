import React from 'react';

function ShoppingCart(props) {
  const favouritesList = props.favourites.map((fav, id) => {
    return (
      <li key={id}>
        <img src={fav.imgUrl} alt={fav.model} />
        <p>{fav.brand}</p>
        <p>{fav.model}</p>
      </li>
    );
  });

  return (
    <div>
      <ul>{favouritesList}</ul>
    </div>
  );
}

export default ShoppingCart;
