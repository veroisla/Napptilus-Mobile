import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

import HeaderHome from '../components/HeaderHome';
import HeaderDescription from './HeaderDescription';
import Search from '../components/Search';
import Item from '../components/Item';
import Description from '../components/Description';

import getApiData from '../services/listProducts';
import localStorage from '../services/localStorage';

function App() {
  const [dataMobile, setDataMobile] = useState(
    localStorage.get('dataMobile', [])
  );

  const [inputSearch, setInputSearch] = useState(
    localStorage.get('inputSearch', '')
  );

  useEffect(() => {
    if (dataMobile.length === 0) {
      getApiData().then((dataFromApi) => {
        setDataMobile(dataFromApi);
      });
    }
    console.log(dataMobile);
  }, []);

  useEffect(() => {
    localStorage.set('dataMobile', dataMobile);
    localStorage.set('inputSearch', inputSearch);
    setTimeout(function () {
      localStorage.clear();
    }, 3600 * 1000);
  }, [dataMobile, inputSearch]);

  const handleFilterByText = (value) => {
    setInputSearch(value);
  };

  const results = dataMobile.filter((item) => {
    return (
      item.model.toLowerCase().includes(inputSearch.toLowerCase()) ||
      item.brand.toLowerCase().includes(inputSearch.toLowerCase())
    );
  });

  const PreventSubmitForm = (ev) => {
    ev.preventDefault();
  };

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
