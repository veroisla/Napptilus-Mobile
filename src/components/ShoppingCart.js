import React from 'react';
import '../styles/components/AddToCartButton.scss';
import { ImCross } from 'react-icons/im';

function ShoppingCart(props) {
  const handleReset = (ev) => {
    props.deleteFavourite();
  };

  const handleResetListFav = () => {
    props.deleteAllFavourites();
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
      {props.favourites.length === 0 ? (
        <h4>No tienes ningún producto en la cesta</h4>
      ) : (
        <>
          <h4>Productos comprados</h4>
          <ul>{favouritesList}</ul>
          <button onClick={handleResetListFav}>Borrar todo</button>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
