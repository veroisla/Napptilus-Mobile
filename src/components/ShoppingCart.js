import React from 'react';
import '../styles/components/AddToCartButton.scss';
import '../styles/components/ShoppingCart.scss';

function ShoppingCart(props) {
  const handleReset = (ev) => {
    props.deleteFavourite();
  };

  const favouritesList = props.favourites.map((fav, index) => {
    return (
      <section className="cart">
        <li key={index} className="cart__list">
          <div>
            <div className="cart__modelAndbrand">
              <p className="cart__brand">{fav.brand}</p> -
              <p className="cart__model">{fav.model}</p>
            </div>
            <img src={fav.imgUrl} alt={fav.model} className="cart__img" />
          </div>
          <div className="cart__priceAndButton">
            <p className="cart__price">{fav.price} EUR</p>
            <button className="cart__deleteButton" onClick={handleReset}>
              Eliminar
            </button>
          </div>
        </li>
      </section>
    );
  });

  return (
    <div>
      {props.favourites.length === 0 ? (
        <h4 className="cart__title">Tu cesta está vacía</h4>
      ) : (
        <>
          <h4 className="cart__title">Cesta ({props.favourites.length})</h4>
          <hr />

          <ul key={props.index}>{favouritesList}</ul>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
