import styles from './SearchBar.module.css';
import { useState } from 'react';
import character from '../data'
import CardsBusca from './CardsBusca';

const SearchBar = (props) => {

   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const handleSubmit = (event) => {
         event.preventDefault()
         
      }

      const [characters, setCharacters] = useState(character)

      const onSearch = (characterId) => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
          .then((response) => response.json())
          .then((data) => {
             if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
             } else {
                window.alert('No hay personajes con ese ID');
             }
          });
      }
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input 
               className={styles.imput} 
               type='search' 
               id=''   
               onChange={handleChange}/>
            <button 
            type="submit"
            className={styles.boton} 
            onClick={() => onSearch(id)}>Agregar Personage</button>
            <CardsBusca characters= {characters}/>
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

   

   