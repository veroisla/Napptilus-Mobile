// Input de búsqueda se comparará con la Marca y el Modelo.

import React from 'react';

function Search(props) {
  const handleChange = (ev) => {
    props.handleFilterByText(ev.target.value);
    console.log('yujuuu');
  };
  return (
    <section>
      <form>
        <label htmlFor="search">Búsqueda: </label>
        <input
          type="text"
          placeholder="Busca por marca o modelo"
          onChange={handleChange}
        />
      </form>
    </section>
  );
}

export default Search;
