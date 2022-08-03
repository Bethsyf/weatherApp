import React, { useState } from "react";
import styles from "../search/Search.module.scss";
import axios from "axios";
import { CityWeather } from "../../../interfaces/city-props";


const Search = () => {
  const [nameCity, setNameCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(
      `http://api.weatherapi.com/v1/current.json?key=bfceb7d7ca9a42a5adb202909222707&q=${nameCity}`
    );
  };

  const getData = async (url: string) => {
    let listarApi = await axios.get(url);
    let { data } = listarApi;
    console.log(data);
    return data;
  };

  return (
    <div key="">
      <form className={styles.city} onSubmit={handleSubmit}>
        <div>
          <input
            
            className={styles.search}
            type="text"
            name="city"
            onChange={(e) => setNameCity(e.target.value)}
            placeholder="Nombre de la Ciudad"
          />
        </div>
        <button type="submit" className={styles.btn}>
          Ver el Clima
        </button>        
        <div className={styles.card}>
          <h1>{}</h1>
        </div>
      </form>
    </div>
  );
};

export default Search;
