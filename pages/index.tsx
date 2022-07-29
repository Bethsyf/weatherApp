import type { GetStaticProps, NextPage } from "next";
import Footer from "../components/views/Footer/Footer";
import Navbar from "../components/views/Navbar/Navbar";
import styles from "../styles/Home.module.scss";
import weatherApi from '../api/weatherApi';
import { CityWeather, Current } from "../interfaces/city-props";
import Image from "next/image";

interface Props{
    city: Location[]
    weather: Current[]
}

const HomePage: NextPage<Props> = ({ weather, city}) => {
  console.log(weather);
  

  return (
    <>
      <Navbar />
      <form className={styles.city} >
        <div>
          <input
            className={styles.search}
            type="text"
            name="city"
            placeholder="Nombre de la Ciudad"           
          />
        </div>
        <button type="submit" className={styles.btn}>
          Ver el Clima
        </button>
      </form>
      <div className={styles.card}>
        <h1>Bogota</h1>
        <p>temperatura: {city.cloud}°</p>        
        {/* <Image
          src={city.condition.icon}
          alt='ciudad'
          width={150}
          height={150}
          
        /> */}
        <p>soleado</p>
        <div>
          <p>humedad{city.humidity}</p>
          <p>velocidad del viento</p>
          <p>sensacion termica</p>
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
