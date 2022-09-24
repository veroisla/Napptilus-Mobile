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
      <form onSubmit={handleSubmitForm} className="search__container">
        <input
          className="search__input"
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
