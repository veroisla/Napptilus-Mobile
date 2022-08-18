import React from 'react';

function Search(props) {
  const handleChange = (ev) => {
    props.handleFilterByText(ev.target.value);
    console.log('yujuuu');
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
        />
      </form>
    </section>
  );
}

export default Search;
