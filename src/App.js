import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import React, { useState,useEffect} from 'react';

function App() {
  const [data, setData] = useState([]);
  let dataAPI="https://api.escuelajs.co/api/v1/"
   useEffect(() => {
    fetch(`${dataAPI}categories`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, []);
  return (
    <>
    <Table fetchData={data}/>
    </>
  );
}

export default App;
