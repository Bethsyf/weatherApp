import Image from "next/image"
import weather from '../../assets/weather.png'
import styles from './Navbar.module.scss'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className={styles.container}>     
      <Image          
          src={weather}
          alt='logo-app'
          width={150}
          height={150}
        />             
      </header>
    </>
  )
}

export default Navbar