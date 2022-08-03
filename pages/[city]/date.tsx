import Navbar from "../../components/views/Navbar/Navbar";
import styles from '../../styles/pages/Date.module.scss'
import { useRouter } from 'next/router';

const datePage = () => {

    const router = useRouter();
    const {city} = router.query
    console

  return (
    <>
      <Navbar/>
      <p>{city}</p>
      <div className={styles.container}>
       <input        
            type='date'          
            name="date"            
                     
          />
          <button   >
          Ver el Clima de ese día
        </button>
        </div>
    </>
  )
}

export default datePage