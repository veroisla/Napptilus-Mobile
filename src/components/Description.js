import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { getDescMobile } from '../services/descriptionProduct';

import Image from '../components/Image';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import '../styles/components/Description.scss';

function Description(props) {
  const [mobileDescription, setmobileDescription] = useState(null);
  console.log(mobileDescription);
  const [internalMemory, setInternalMemory] = useState([]);
  const [color, setColor] = useState([]);

  const params = useParams();
  useEffect(() => {
    getDescMobile(params.id, setmobileDescription);
  }, [params.id]);

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
        <option value={color.id} key={index}>
          {color}
        </option>
      );
    });
  };

  return (
    <>
      <section className="description">
        <Link to="/">
          <button type="text" class="description__btn__home">
            <HiOutlineArrowNarrowLeft />
            <span class="description__btn__underline hover-underline-animation">
              Back to home
            </span>
          </button>
        </Link>
        {mobileDescription != null ? (
          <article className="description__descAndImg">
            {/* IMG */}
            <div className="description__img">
              <Image mobile={props.mobile} />{' '}
            </div>
            {/* DESC */}
            <div className="description__description">
              {' '}
              <div>
                <div className="description__modelAndPrice">
                  <p className="description__model">
                    {mobileDescription.brand} - {mobileDescription.model}
                  </p>
                  {mobileDescription.price === '' ? (
                    ''
                  ) : (
                    <p>{mobileDescription.price} EUR</p>
                  )}
                </div>

                <div className="description__line">
                  <p>
                    <strong className="description__detail">
                      Dimensiones:
                    </strong>
                  </p>
                  <p>{mobileDescription.dimentions}</p>

                  {mobileDescription.weight === '' ? (
                    ''
                  ) : (
                    <div>
                      <p>
                        <strong> Peso:</strong>
                      </p>
                      <p>{mobileDescription.weight} g</p>{' '}
                    </div>
                  )}
                </div>
                <div className="description__line">
                  <p>
                    <strong> Resolución pantalla:</strong>
                  </p>
                  <p> {mobileDescription.displayResolution}</p>
                </div>
                <div className="description__line">
                  <p>
                    <strong>Cámara Frontal:</strong>
                  </p>
                  <p>{mobileDescription.primaryCamera}</p>
                  <p>
                    <strong>Cámara Trasera:</strong>
                  </p>
                  <p> {mobileDescription.secondaryCmera}</p>
                </div>
                <div className="description__line">
                  <p>
                    <strong>Sistema operativo: </strong>
                  </p>
                  <p>{mobileDescription.os}</p>
                  <p>
                    <strong>Ram:</strong>
                  </p>{' '}
                  <p>{mobileDescription.ram}</p>
                  <p>
                    <strong>Batería:</strong>
                  </p>
                  <p>{mobileDescription.battery}</p>
                  <p>
                    <strong> Procesador: </strong>
                  </p>
                  <p>CPU: {mobileDescription.cpu}</p>
                </div>
              </div>
              {/* SELECTORES */}
              <form action="" className="description__form">
                {/* Almacenamiento */}
                <label htmlFor="">Almacenamiento: </label>
                <select
                  name="storageCode"
                  id=""
                  onChange={handleChangeMemory}
                  defaultvalue={
                    internalMemory.length === 1
                      ? internalMemory[0]
                      : internalMemory
                  }
                >
                  <option value="" disabled>
                    Seleccione
                  </option>
                  {renderMemory()}
                </select>
                {/* Color */}
                <label htmlFor="" className="description__form__color">
                  Color:{' '}
                </label>
                <select
                  name="colorCode"
                  id=""
                  onChange={handleChangeColor}
                  defaultValue={color.length <= 1 ? color[0] : color}
                >
                  <option value="" disabled>
                    Seleccione
                  </option>
                  {renderColor()}
                </select>
                <button
                  onClick={() =>
                    console.log(
                      mobileDescription.id,
                      mobileDescription.colors,
                      mobileDescription.internalMemory
                    )
                  }
                  type="button"
                  className="description__btn__add"
                >
                  añadir a la cesta
                </button>
              </form>
            </div>
          </article>
        ) : (
          'Cargando...'
        )}
      </section>
    </>
  );
}
export default Description;
