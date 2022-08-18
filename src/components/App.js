import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';

//COMPONENTS
import Header from '../components/Header';
import Item from '../components/Item';
import Description from './Description';

//SERVICES
import getApiData from '../services/listProducts';

function App() {
  const [dataMobile, setDataMobile] = useState([]);

  useEffect(() => {
    getApiData().then((data) => {
      setDataMobile(data);
    });
  }, []);
  console.log(dataMobile);

  const { pathname } = useLocation();
  const dataPath = matchPath('/api/product/:id', pathname);
  console.log(dataPath);

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
              <Header />
              <Item dataMobile={dataMobile} />
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
