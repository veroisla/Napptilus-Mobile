import React from 'react';

function Image(props) {
  return (
    <img
      src={props.mobile.imgUrl}
      alt={props.mobile.model}
      title={props.mobile.model}
    />
  );
}

export default Image;
