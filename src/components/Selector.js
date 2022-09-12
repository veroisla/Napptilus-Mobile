import React from 'react';

function Selector(props) {
  return (
    <form action="" className="description__form">
      {/* Almacenamiento */}
      <label htmlFor="">Almacenamiento: </label>
      <select
        name="storageCode"
        id=""
        onChange={props.handleChangeMemory}
        defaultvalue={
          props.internalMemory.length === 1
            ? props.internalMemory[0]
            : props.internalMemory
        }
      >
        <option value="" disabled>
          Seleccione
        </option>
        {props.renderMemory()}
      </select>
      {/* Color */}
      <label htmlFor="" className="description__form__color">
        Color:{' '}
      </label>
      <select
        name="colorCode"
        id=""
        onChange={props.handleChangeColor}
        defaultValue={props.color.length <= 1 ? props.color[0] : props.color}
      >
        <option value="" disabled>
          Seleccione
        </option>
        {props.renderColor()}
      </select>
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
    </form>
  );
}

export default Selector;
