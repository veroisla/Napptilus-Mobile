import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

import Header from '../components/Header';
import Search from '../components/Search';
import Item from '../components/Item';
import Description from './Description';

import getApiData from '../services/listProducts';

function App() {
  const [dataMobile, setDataMobile] = useState([]);
  const [filterByModel, setFilterByModel] = useState('');

  // ITEM LIST
  useEffect(() => {
    getApiData().then((data) => {
      setDataMobile(data);
    });
  }, []);
  console.log(dataMobile);

  //FILTRO POR INPUT
  const handleFilterByText = (value) => {
    setFilterByModel(value);
  };

  const results = dataMobile.filter((item) => {
    return (
      item.model.toLowerCase().includes(filterByModel.toLowerCase()) ||
      item.brand.toLowerCase().includes(filterByModel.toLowerCase())
    );
  });

  //PREVENIR ENVÍO POR DEFECTO DEL FORMUALRIO
  const PreventSubmitForm = (ev) => {
    ev.preventDefault();
  };

  //OBTENER ID DE LA URL
  const { pathname } = useLocation();
  const dataPath = matchPath('/api/product/:id', pathname);
  console.log(dataPath);

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
