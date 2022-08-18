import axios from 'axios';

const getDescMobile = async (id, state) => {
  const peticion = await axios.get(
    `https://front-test-api.herokuapp.com/api/product/${id}`
  );
  state(peticion.data);
  console.log(peticion.data);
};

export { getDescMobile };
