import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

import HeaderHome from '../components/HeaderHome';
import HeaderDescription from './HeaderDescription';
import Search from '../components/Search';
import Item from '../components/Item';
import Description from '../components/Description';
import BreadCrumbs from '../components/BreadCrumbs';

import getApiData from '../services/listProducts';
import localStorage from '../services/localStorage';

function App() {
  const [dataMobile, setDataMobile] = useState(
    localStorage.get('dataMobile', [])
  );

  const [inputSearch, setInputSearch] = useState(
    localStorage.get('inputSearch', '')
  );

  // ITEM LIST
  useEffect(() => {
    if (dataMobile.length === 0) {
      getApiData().then((dataFromApi) => {
        setDataMobile(dataFromApi);
      });
    }
    console.log(dataMobile);
  }, []);

  //LOCALSTORAGE

  useEffect(() => {
    localStorage.set('dataMobile', dataMobile); //--> Guarda la propiedad y su valor
    localStorage.set('inputSearch', inputSearch);
  }, [dataMobile, inputSearch]); // --> Guardamelo cuando cambie el estado de la variable.

  //FILTRO POR INPUT
  const handleFilterByText = (value) => {
    setInputSearch(value);
  };

  const results = dataMobile.filter((item) => {
    return (
      item.model.toLowerCase().includes(inputSearch.toLowerCase()) ||
      item.brand.toLowerCase().includes(inputSearch.toLowerCase())
    );
  });

  //PREVENIR ENVÍO POR DEFECTO DEL FORMUALRIO
  const PreventSubmitForm = (ev) => {
    ev.preventDefault();
  };

  //OBTENER ID DE LA URL
  const { pathname } = useLocation();
  const dataPath = matchPath('/api/product/:id', pathname);

  const mobileId = dataPath !== null ? dataPath.params.id : null;
  const mobileFound = dataMobile.find((item) => item.id === mobileId);
  console.log(mobileFound);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderHome />
              <Search
                inputSearch={inputSearch}
                handleFilterByText={handleFilterByText}
                PreventSubmitForm={PreventSubmitForm}
              />
              <Item dataMobile={results} inputSearch={inputSearch} />
            </>
          }
        />
        <Route
          path="/api/product/:id"
          element={
            <>
              <HeaderDescription />
              <Description mobile={mobileFound} />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
