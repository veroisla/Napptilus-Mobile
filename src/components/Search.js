import React from 'react';
import '../styles/components/Search.scss';
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
        {' '}
        <label htmlFor="search">buscar</label>
        <input type="text" onChange={handleChange} value={props.inputSearch} />
      </form>
    </section>
  );
}

export default Search;
