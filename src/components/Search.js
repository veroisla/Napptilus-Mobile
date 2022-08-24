import React from 'react';
import '../styles/components/Search.scss';

function Search(props) {
  const handleChange = (ev) => {
    props.handleFilterByText(ev.target.value);
  };
  const handleSubmitForm = (props) => {
    props.PreventSubmitForm();
  };

  return (
    <section className="search">
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
