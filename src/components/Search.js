import React from 'react';
//PONER COMENTARIO SI HACEN BÚSQUEDA QUE NO EXISTE
function Search(props) {
  const handleChange = (ev) => {
    props.handleFilterByText(ev.target.value);
  };
  const handleSubmitForm = (props) => {
    props.PreventSubmitForm();
  };
  return (
    <section>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="search">Búsqueda: </label>
        <input
          type="text"
          placeholder="Busca por marca o modelo"
          onChange={handleChange}
          value={props.inputSearch}
        />
      </form>
    </section>
  );
}

export default Search;
