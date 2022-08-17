//VISUALIZAR IMAGEN PRODUCTO-- COMPONENTE VA DENTRO DEL COMPONENTE ITEM
import React from 'react';

function Image(props) {
  return <img src={props.mobile.imgUrl} alt="" />;
}

export default Image;
