import React from 'react';
import { useState, useEffect } from 'react';
//COMPONENTS
import Header from '../components/Header';
//SERVICES
import getApiData from '../services/listProducts';

function App() {
  const [dataMobile, setDataMobile] = useState([]);

  useEffect(() => {
    getApiData().then((data) => {
      setDataMobile(data);
      console.log(dataMobile);
    });
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <main></main>
    </>
  );
}

export default App;
