import React, { useState } from 'react'
import styles from '../search/Search.module.scss'


const Search = () => {
  const [text, setText] = useState("");

  
  const handleSubmit = (e)  => {
    e.preventDefault();
    const textTrim = text.trim();
    
  };

  return (
    <form className={styles.city} onSubmit={handleSubmit} >
        <div key="">
          <input
          value={text}
            className={styles.search}
            type="text"            
            name="city"
            onChange={e => setText(e.target.value)}          
            placeholder="Nombre de la Ciudad"           
          />
        </div>
        <button type="submit" className={styles.btn} >
          Ver el Clima
        </button>       
              
                {/* <li key={city.location.name}>
                  <Link href={`/location/${city.location.name}`}>
                    <a>
                      {city.location.name}
                      {city.location.region}
                      <span>({city.location.country})</span>
                    </a>
                  </Link>
                </li> */}                        
        
      </form>
  )
}

export default Search