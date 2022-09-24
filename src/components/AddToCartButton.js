import React from 'react';
import '../styles/components/AddToCartButton.scss';

function AddToCartButton(props) {
  const handleClick = () => {
    props.addFavourite(props.mobileDescription);
  };
  return (
    <button
      type="button"
      className="description__btn__add"
      onClick={handleClick}
    >
      añadir a la cesta
    </button>
  );
}

export default AddToCartButton;
