import React from 'react';

function Image(props) {
  return (
    <img
      src={props.mobile.imgUrl}
      alt="Imagen móvil"
      title={props.mobile.model}
    />
  );
}

export default Image;
