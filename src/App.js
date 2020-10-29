import React,{useEffect,useState} from 'react';
import './App.css';
import {Cards,Chart,Country} from './component';
import styles from './App.module.css';
import {fetchData} from './api/index';
import coronaImage from './image/image.png';

function App() {

  const [data, setData] = useState([])
  const [country, setCountry] = useState('')

  useEffect(() => {
    async function fetchCovidData() {
      const data = await fetchData();
      setData(data);
    }
    fetchCovidData()
  },[])

   async function handleCountryChange (country) {
    const data = await fetchData(country);
    setData(data);
    setCountry(country);
  }

  return (
    <div className={styles.container}>
      <img src={coronaImage} className="image" alt="COVID-19"/>
      <Cards data={data}/>
      <Country handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  );
}

export default App;
