import type { GetStaticProps, NextPage } from "next";
import Footer from "../components/views/Footer/Footer";
import Navbar from "../components/views/Navbar/Navbar";
import styles from "../styles/pages/Home.module.scss";
import weatherApi from '../api/weatherApi';
import { CityWeather, Current } from '../interfaces/city-props';
import Image from "next/image";
import Head from "next/head";
import Search from "../components/controls/search/Search";
import Link from "next/link";

interface Props{
    city: CityWeather
    
}

const HomePage: NextPage<Props> = ({  city }) => {
  
  

  return (
    <>
    <Head>
        <title>Weather App - Next</title>
      </Head>
      <Navbar />
      <Search/>
      <div className={styles.card} key={city.location.name}>
        <h1>{city.location.name}</h1>
        <p>{city.location.region}</p>
        <p>{city.location.country}</p>
        <p>{city.current?.condition.text}</p>
        {/* <Image
          src={city.current?.condition[1]}
          alt={city.current?.condition.text}
          width={100}
          height={100}          
        /> */}
        <p>temperatura: {city.current?.temp_c}°C</p> 
        <p>Sensacion termica: {city.current?.feelslike_c}°C </p>    
        <div>
          <p>Humedad: {city.current?.humidity}</p>
          <p>Velocidad del viento: {city.current?.wind_kph} kph</p>
          <button><Link href='/date'><a className={ styles.link }>Buscar por fechas</a></Link></button>  
        </div>
      </div>
      <Footer />
    </>
  );
};



export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await weatherApi.get<CityWeather>(`/current.json?key=${process.env.API_KEY}&q=Medellin`)
  console.log(data)
  

  return {
    props: {
      city: data
    }
  }
}

export default HomePage;
