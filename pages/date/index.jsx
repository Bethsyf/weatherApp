import Navbar from "../../components/views/Navbar/Navbar";

const datePage = () => {
  return (
    <>
      <Navbar/>
      <div>
       <input        
            type='date'          
            name="date"                
            placeholder="fecha"           
          />
          <button   >
          Ver el Clima de ese día
        </button>
        </div>
    </>
  )
}

export default datePage