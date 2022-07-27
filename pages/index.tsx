import type { NextPage } from 'next'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
    <Navbar/>
    <div>
      <input className={styles.search} type="text" />
    </div>
    <div className={styles.card}>
      <h1>Buenos Aires</h1>
      <p>15°</p>
      <p>6.1</p>
      <p>icono</p>
      <p>soleado</p>
      <div>
        <p>humedad</p>
        <p>velocidad del viento</p>
        <p>sensacion termica</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home
