import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

import Header from '../components/Header';
import Search from '../components/Search';
import Item from '../components/Item';
import Description from '../components/Description';

import getApiData from '../services/listProducts';
import localStorage from '../services/localStorage';

function App() {
  const [dataMobile, setDataMobile] = useState(
    localStorage.get('dataMobile', [])
  );
  console.log(dataMobile);
  const [inputSearch, setInputSearch] = useState('');

  // ITEM LIST
  useEffect(() => {
    getApiData().then((data) => {
      localStorage.set('dataMobile', data);
      setDataMobile(data);
    });
  }, []);
  console.log(dataMobile);

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
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search
                handleFilterByText={handleFilterByText}
                PreventSubmitForm={PreventSubmitForm}
              />
              <Item dataMobile={results} />
            </>
          }
        />
        <Route
          path="/api/product/:id"
          element={<Description mobile={mobileFound} />}
        />
      </Routes>
    </>
  );
}

export default App;
