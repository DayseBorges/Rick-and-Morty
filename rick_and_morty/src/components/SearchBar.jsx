import styles from './SearchBar.module.css';
import { useState } from 'react';


const SearchBar = (props) => {

   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }


   const handleSubmit = (event) => {
         event.preventDefault()
         
      }

      
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input 
               className={styles.input} 
               type='search' 
               id=''   
               onChange={handleChange}/>
            <button 
            type="submit"
            className={styles.boton} 
            onClick={() => props.onSearch(id)}>Buscar Personaje</button>
         </form>
      </div>
   );
}

export default SearchBar;

// // const mapDispatchToProps = (dispatch) => {
// //     return {
// //         getCharacters: (id) => {dispatch(getCharacters(id))}
// //     }
// // }

// // export default connect(null, mapDispatchToProps) (SearchBar);
// export default SearchBar;




// const [id, setId] = useState ('')

//    const handleChange = ({target}) => {
//       setId(target.value)
//    }

//    const handleSubmit = (event) => {
//       event.preventDefault()
//    }

//    useEffect(() => {
//     fetch('https://rickandmortyapi.com/api/character/id')
//       .then((response) => response.json())
//       .then((data) => 
//       setId({
//          ...id,
//          id: data.response
//       })
//       )
//       .catch((error) => console.log(error));
//       }, [])     

   

   