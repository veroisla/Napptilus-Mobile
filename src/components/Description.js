import React from 'react';
import { useEffect, useState } from 'react';
import Image from '../components/Image';
import { useParams } from 'react-router-dom';
import { getDescMobile } from '../services/descriptionProduct';

function Description(props) {
  const [mobileDescription, setmobileDescription] = useState(null);
  console.log(mobileDescription);

  const params = useParams();
  useEffect(() => {
    getDescMobile(params.id, setmobileDescription);
  }, []);

  const [internalMemory, setInternalMemory] = useState([]);
  const [color, setColor] = useState([]);

  //SELECTOR MEMORIA

  const handleSelectByMemory = (value) => {
    setInternalMemory(value);
  };

  const handleChangeMemory = (ev) => {
    handleSelectByMemory(ev.target.value);
  };

  const renderMemory = () => {
    if (!mobileDescription || !mobileDescription.internalMemory) {
      return null;
    }

    return mobileDescription.internalMemory.map((memory, index) => {
      return (
        <option value={memory} key={index}>
          {memory}
        </option>
      );
    });
  };

  //SELECTOR COLOR

  const handleSelectByColor = (value) => {
    setColor(value);
  };

  const handleChangeColor = (ev) => {
    handleSelectByColor(ev.target.value);
  };

  const renderColor = () => {
    if (!mobileDescription || !mobileDescription.colors) {
      return null;
    }

    return mobileDescription.colors.map((color, index) => {
      return (
        <option value={color} key={index}>
          {color}
        </option>
      );
    });
  };

  return (
    <>
      <form action="">
        <label htmlFor="">Almacenamiento: </label>
        <select
          name="storageCode"
          id=""
          onChange={handleChangeMemory}
          value={internalMemory}
        >
          <option value="" disabled>
            Seleccione
          </option>
          {renderMemory()}
        </select>
        <label htmlFor="">Color: </label>
        <select
          name="colorCode"
          id=""
          onChange={handleChangeColor}
          value={color}
        >
          <option value="" disabled>
            Seleccione
          </option>
          {renderColor()}
        </select>
      </form>

      {mobileDescription != null ? (
        <article>
          <Image mobile={props.mobile} />
          <h4>Marca: {mobileDescription.brand}</h4>
          <h4>Marca: {mobileDescription.brand}</h4>
          <h5>Modelo: {mobileDescription.model}</h5>
          <p>Precio: {mobileDescription.price}</p>
          <p>CPU: {mobileDescription.cpu}</p>
          <p>RAM:{mobileDescription.ram}</p>
          <p>Resolución: {mobileDescription.displayResolution}</p>
          <p>Batería: {mobileDescription.battery}</p>
          <p>Cámara principal: {mobileDescription.primaryCamera}</p>
          <p>Cámara secundaria: {mobileDescription.secondaryCmera}</p>
          <p>Dimensiones: {mobileDescription.dimentions}</p>

          {mobileDescription.weight === '' ? (
            'Peso: No hay datos sobre el peso'
          ) : (
            <p>Peso: {mobileDescription.weight}</p>
          )}
          <p>Movil seleccionado: {mobileDescription.model}</p>
          <p>Color seleccionado: {color}</p>
          <p>Alamacenamiento: {internalMemory}</p>
        </article>
      ) : (
        'Cargando...'
      )}

      <button type="text">
        <a href="#/">Listado productos</a>
      </button>
    </>
  );
}
export default Description;
