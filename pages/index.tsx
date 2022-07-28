import type { GetStaticProps, NextPage } from "next";
import Footer from "../components/views/Footer/Footer";
import Navbar from "../components/views/Navbar/Navbar";
import styles from "../styles/Home.module.scss";

interface Props{
    
}

const HomePage: NextPage = (props) => {
  console.log(props);

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
        <h1>Caracas</h1>
        <p>25°</p>        
        <p>icono</p>
        <p>soleado</p>
        <div>
          <p>humedad</p>
          <p>velocidad del viento</p>
          <p>sensacion termica</p>
        </div>
      </div>
      <Footer />
    </>
  );
};



export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log('Hola')

  return {
    props: {
      name: 'bethsy'
    }
  }
}

export default HomePage;
