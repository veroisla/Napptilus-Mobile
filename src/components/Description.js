//DETALLE PRODUCTO

// import React from 'react';

// import Image from '../components/Image';
// import { useParams } from 'react-router-dom';

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
//       <p>Dimensiones: {mobileDescription.dimentions}</p>
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

//--->>>> OTRA MANERA MÁS LIMPIA, CON EL FECTH EN OTRO COMPONENTe, pero los datos se cargan más lento que de la otra manera, y no tengo las variables de estado en compoente App

import React from 'react';
import { useEffect, useState } from 'react';
import Image from '../components/Image';
import { useParams } from 'react-router-dom';
import { getDescMobile } from '../services/descriptionProduct';

function Description(props) {
  const [mobileDescription, setmobileDescription] = useState(null);

  //
  const params = useParams();
  useEffect(() => {
    getDescMobile(params.id, setmobileDescription);
  }, []);

  // GET COLORS
  const getColors = () => {
    const mobileColors = mobileDescription.map((mobile) => mobile.colors);
    console.log(mobileColors);
  };

  return (
    <>
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
        </article>
      ) : (
        'Cargando...'
      )}
      <form action="">
        <label htmlFor="">Almacenamiento: </label>
        <select name="" id="">
          <option value="">Seleccione</option>
        </select>
      </form>
      <button type="text">
        <a href="#/">Listado productos</a>
      </button>
    </>
  );
}
export default Description;
