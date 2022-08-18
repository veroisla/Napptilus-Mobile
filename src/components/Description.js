// // //DETALLE PRODUCTO

// import React from 'react';
// import { useEffect } from 'react';
// import Image from '../components/Image';
// import { useParams } from 'react-router-dom';
// import { getDescMobile } from '../services/descriptionProduct';

// const Description = (props) => {

//   const { id } = useParams();
//   const [mobileDescription, setMobileDescription] = React.useState({});

//   React.useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       `https://front-test-api.herokuapp.com/api/product/${id}`
//     );
//     const mobile = await data.json();
//     console.log(mobile);
//     setMobileDescription(mobile);
//   };

//   return (
//     <article>
//       <Image mobile={props.mobile} />
//       <h4>Marca: {mobileDescription.brand}</h4>
//       <h5>Modelo: {mobileDescription.model}</h5>
//       <p>Precio: {mobileDescription.price}</p>
//       <p>CPU: {mobileDescription.cpu}</p>
//       <p>RAM:{mobileDescription.ram}</p>
//       <p>Resolución: {mobileDescription.displayResolution}</p>
//       <p>Batería: {mobileDescription.battery}</p>
//       <p>Cámara principal: {mobileDescription.primaryCamera}</p>
//       <p>Cámara secundaria: {mobileDescription.secondaryCmera}</p>
//        <p>Dimensiones: {mobileDescription.dimentions}</p>
//       <p>Peso: {mobileDescription.weight}</p>

//       <form action="">
//         <label htmlFor="">Almacenamiento: </label>
//         <select name="" id="">
//           <option value="">Seleccione</option>
//         </select>
//       </form>
//       <button type="text">
//         <a href="#/">Listado productos</a>
//       </button>
//     </article>
//   );
// };

// export default Description;

//--->>>> OTRA MANERA MÁS LIMPIA, CON EL FECTH EN OTRO COMPONENTE

import React from 'react';
import { useEffect, useState } from 'react';
import Image from '../components/Image';
import { useParams } from 'react-router-dom';
import { getDescMobile } from '../services/descriptionProduct';

function Description(props) {
  const [descMobile, setDescMobile] = useState(null);

  const params = useParams();
  useEffect(() => {
    getDescMobile(params.id, setDescMobile);
  }, []);

  return (
    <>
      {descMobile != null ? (
        <article>
          <Image mobile={props.mobile} />
          <h4>Marca: {descMobile.brand}</h4>
          <h4>Marca: {descMobile.brand}</h4>
          <h5>Modelo: {descMobile.model}</h5>
          <p>Precio: {descMobile.price}</p>
          <p>CPU: {descMobile.cpu}</p>
          <p>RAM:{descMobile.ram}</p>
          <p>Resolución: {descMobile.displayResolution}</p>
          <p>Batería: {descMobile.battery}</p>
          <p>Cámara principal: {descMobile.primaryCamera}</p>
          <p>Cámara secundaria: {descMobile.secondaryCmera}</p>
          <p>Dimensiones: {descMobile.dimentions}</p>
          {descMobile.weight === '' ? (
            'Peso: No hay datos sobre el peso'
          ) : (
            <p>Peso: {descMobile.weight}</p>
          )}
        </article>
      ) : (
        'No hay personaje'
      )}
    </>
  );
}

export default Description;
