import React from 'react'
import styles from '../search/Search.module.scss'

const Search = () => {
    const [query, setQuery] = React.useState("");

    const onChange = (e) => {
        const { value } = e.target;
        setQuery(value);
    }

  return (
    <form className={styles.city}  >
        <div key="">
          <input
            className={styles.search}
            type="text"            
            name="city"
            placeholder="Nombre de la Ciudad"           
          />
        </div>
        <button type="submit" className={styles.btn} onChange={onChange}>
          Ver el Clima
        </button>
      </form>
  )
}

export default Search