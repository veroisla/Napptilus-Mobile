import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';

import HeaderHome from '../components/HeaderHome';
import Search from '../components/Search';
import Item from '../components/Item';
import Description from '../components/Description';

import getApiData from '../services/listProducts';
import localStorage from '../services/localStorage';
import ShoppingCart from './ShoppingCart';

function App() {
  const [dataMobile, setDataMobile] = useState(
    localStorage.get('dataMobile', [])
  );

  const [inputSearch, setInputSearch] = useState(
    localStorage.get('inputSearch', '')
  );

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (dataMobile.length === 0) {
      getApiData().then((dataFromApi) => {
        setDataMobile(dataFromApi);
      });
    }
  }, []);

  useEffect(() => {
    localStorage.set('dataMobile', dataMobile);
    localStorage.set('inputSearch', inputSearch);
  }, [dataMobile, inputSearch]);

  // ------ CESTA DE LA COMPRA   ------

  //AÑADIR A FAVORITOS
  const addFavourite = (id) => {
    const favList = favourites.concat([id]);
    setFavourites(favList);
  };

  //BORRAR MOVIL DE FAVORITOS
  const deleteFavourite = () => {
    favourites.splice(favourites, 1);

    console.log('fav', favourites);
  };

  //------------ FILTRADO POR MODELO Y MARCA
  const handleFilterByText = (value) => {
    setInputSearch(value);
  };

  const results = dataMobile.filter((item) => {
    return (
      item.model.toLowerCase().includes(inputSearch.toLowerCase()) ||
      item.brand.toLowerCase().includes(inputSearch.toLowerCase())
    );
  });

  //----------PREVENIR ENVÍO POR DEFECTO DEL FORM
  const PreventSubmitForm = (ev) => {
    ev.preventDefault();
  };

  //--------- DETALLE DE CADA MÓVIL
  const { pathname } = useLocation();
  const dataPath = matchPath('/api/product/:id', pathname);

  const mobileId = dataPath !== null ? dataPath.params.id : null;
  const mobileFound = dataMobile.find((item) => item.id === mobileId);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderHome
                favourites={favourites}
                dataMobile={dataMobile}
                deleteFavourite={deleteFavourite}
              />
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
              <HeaderHome
                favourites={favourites}
                dataMobile={dataMobile}
                deleteFavourite={deleteFavourite}
              />
              <Description
                mobile={mobileFound}
                addFavourite={addFavourite}
                dataMobile={dataMobile}
              />
            </>
          }
        />
        <Route
          path="/api/product/shoppingCart"
          element={
            <>
              <HeaderHome
                favourites={favourites}
                dataMobile={dataMobile}
                deleteFavourite={deleteFavourite}
              />
              <ShoppingCart
                favourites={favourites}
                dataMobile={dataMobile}
                deleteFavourite={deleteFavourite}
              />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
