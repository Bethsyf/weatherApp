import Navbar from "../../components/views/Navbar/Navbar";
import styles from '../../styles/pages/Date.module.scss'

const datePage = () => {
  return (
    <>
      <Navbar/>
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