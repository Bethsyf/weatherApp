import type { GetStaticProps, NextPage } from "next";
import Footer from "../components/views/Footer/Footer";
import Navbar from "../components/views/Navbar/Navbar";
import styles from "../styles/Home.module.scss";
import weatherApi from '../api/weatherApi';
import { CityWeather, Current } from "../interfaces/city-props";
import Image from "next/image";
import Head from "next/head";
import Search from "../components/controls/search/Search";

interface Props{
    city: Current[]
    // weather: Current[]
}

const HomePage: NextPage<Props> = ({  city}) => {
  
  

  return (
    <>
    <Head>
        <title>Weather App - Next</title>
      </Head>
      <Navbar />
      <Search/>
      <div className={styles.card}>
        <h1>Bogota</h1>
        <p>temperatura: {city.temp_c}°C</p>        
        {/* <Image
          src='http://cdn.weatherapi.com/weather/64x64/day/116.png'
          alt='ciudad'
          width={150}
          height={150}
          
        /> */}
        <p>soleado</p>
        <div>
          <p>humedad {city.humidity}</p>
          <p>velocidad del viento {city.wind_kph} kph</p>
          <p>sensacion termica {city.feelslike_c}°C </p>
        </div>
      </div>
      <Footer />
    </>
  );
};



export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await weatherApi.get<CityWeather>('/current.json?key=bfceb7d7ca9a42a5adb202909222707&q=Bogota')
  console.log(data)

  return {
    props: {
      city: data.current
    }
  }
}

export default HomePage;
