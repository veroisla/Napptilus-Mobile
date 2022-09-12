import React from 'react';

function Selector(props) {
  return (
    <form action="" className="description__form">
      <label htmlFor="">{props.label} </label>
      <select name="storageCode" id="" onChange={props.handleChange}>
        <option value="" disabled>
          Seleccione
        </option>
        {props.render}
      </select>
    </form>
  );
}

export default Selector;
