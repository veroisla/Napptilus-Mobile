import React from 'react';
import '../styles/components/AddToCartButton.scss';

function AddToCartButton(props) {
  return (
    <button
      onClick={() =>
        console.log(
          props.mobileDescription.id,
          props.mobileDescription.colors,
          props.mobileDescription.internalMemory
        )
      }
      type="button"
      className="description__btn__add"
    >
      añadir a la cesta
    </button>
  );
}

export default AddToCartButton;
