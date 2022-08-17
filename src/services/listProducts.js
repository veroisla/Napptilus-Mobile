// https://front-test-api.herokuapp.com/api/product

const getApiDAta = () => {
  return fetch(' https://front-test-api.herokuapp.com/api/product')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default getApiDAta;
