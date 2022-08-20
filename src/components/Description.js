import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { getDescMobile } from '../services/descriptionProduct';
// import localStorage from '../services/localStorage';

import Image from '../components/Image';
import '../styles/components/Description.scss';

function Description(props) {
  const [mobileDescription, setmobileDescription] = useState(null);
  console.log(mobileDescription);
  const [internalMemory, setInternalMemory] = useState([]);
  const [color, setColor] = useState([]);

  const params = useParams();
  useEffect(() => {
    // localStorage.set('mobileDescription', params);
    getDescMobile(params.id, setmobileDescription);
  }, []);

  //------> SELECTOR MEMORIA

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

  //-------> SELECTOR COLOR

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
      {mobileDescription != null ? (
        <article>
          {' '}
          <div>
            <Image mobile={props.mobile} />
          </div>
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
          {/* --> MOVIL SELECCIONADO */}
          <p>
            El móvil seleccionado es de la marca
            <strong> {mobileDescription.model}</strong>, de color
            <strong> {color}</strong> y con una memoria interna de
            <strong> {internalMemory}</strong>
          </p>
        </article>
      ) : (
        'Cargando...'
      )}

      {/*  SECCIÓN ACTIONS */}

      {/* --> SELECTORES */}

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

      {/* --> BOTÓN AÑADIR */}

      <button type="button" className="btn--añadir">
        añadir a la cesta
      </button>

      {/* BACK TO HOME */}

      <Link to="/">
        <button type="text" class="cta">
          <svg
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
            className="btn_backToHome__svg"
          >
            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
          </svg>{' '}
          <span class="hover-underline-animation"> Back to home </span>
        </button>
      </Link>
    </>
  );
}
export default Description;
