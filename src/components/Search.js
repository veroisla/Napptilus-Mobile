import React from 'react';
import '../styles/components/Search.scss';
import { CgSearch } from 'react-icons/cg';

//PONER COMENTARIO SI HACEN BÚSQUEDA QUE NO EXISTE
function Search(props) {
  const handleChange = (ev) => {
    props.handleFilterByText(ev.target.value);
  };
  const handleSubmitForm = (props) => {
    props.PreventSubmitForm();
  };
  return (
    // <section className="search">
    //   <form onSubmit={handleSubmitForm}>
    //     {' '}
    //     <label htmlFor="search">
    //       <CgSearch /> buscar
    //     </label>
    //     <input type="text" onChange={handleChange} value={props.inputSearch} />
    //   </form>
    // </section>
    <section className="search">
      {' '}
      <form onSubmit={handleSubmitForm} class="search__container">
        <input
          class="search__input"
          type="text"
          placeholder="Buscar"
          onChange={handleChange}
          value={props.inputSearch}
        />
      </form>
    </section>
  );
}

export default Search;
