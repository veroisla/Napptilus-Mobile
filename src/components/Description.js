import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//COMPONENTS
import BackToHome from './BackToHome';
import Selector from '../components/Selector';
import AddToCartButton from './AddToCartButton';

//DATA
import { getDescMobile } from '../services/descriptionProduct';

import Image from '../components/Image';
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
        <BackToHome />
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
            </div>
          </article>
        ) : (
          'Cargando...'
        )}{' '}
        <Selector
          label="Almacenamiento:"
          handleChange={handleChangeMemory}
          render={renderMemory()}
        />
        <Selector
          label="Color:"
          handleChange={handleChangeColor}
          render={renderColor()}
        />
        <AddToCartButton
          internalMemory={internalMemory}
          color={color}
          mobileDescription={mobileDescription}
        />
      </section>
    </>
  );
}
export default Description;
