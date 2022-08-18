//DETALLE PRODUCTO

// import React from 'react';
// import Image from '../components/Image';

// function Description(props) {
//   return (
//     <article>
//       {' '}
//       <Image mobile={props.mobile} />
//       <h4>{props.mobile.brand}</h4>
//       <h5>{props.mobile.model}</h5>
//       <p>{props.mobile.price}</p>
//     </article>
//   );
// }

// export default Description;

import React from 'react';
import Image from '../components/Image';
import { useParams } from 'react-router-dom';

const Description = (props) => {
  const { id } = useParams();
  console.log(id);
  const [mobileDescription, setMobileDescription] = React.useState({});

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://front-test-api.herokuapp.com/api/product/${id}`
    );
    const mobile = await data.json();
    console.log(mobile);
    setMobileDescription(mobile);
  };

  return (
    <article>
      <Image mobile={props.mobile} />
      <h4>Marca: {mobileDescription.brand}</h4>
      <h5>Modelo: {mobileDescription.model}</h5>
      <p>Precio: {mobileDescription.price}</p>
      <p>CPU: {mobileDescription.cpu}</p>
      <p>RAM:{mobileDescription.ram}</p>
      <p>Resolución: {mobileDescription.displayResolution}</p>
      <p>Batería: {mobileDescription.battery}</p>
      <p>Cámara principal: {mobileDescription.primaryCamera}</p>
      <p>Cámara secundaria: {mobileDescription.secondaryCmera}</p>
      {/* --> Poner camara primaria y secundaria?? */}
      <p>Dimensiones: {mobileDescription.dimentions}</p>
      <p>Peso: {mobileDescription.weight}</p>
      <button type="text">
        <a href="#/">Listado productos</a>
      </button>
    </article>
  );
};

export default Description;

//--->>>> SI DA TIEMPO PASAR EL FECTH A COMPONENTE, Y ESTADOS DE VARIABLES A APP
