import styles from './SearchBar.module.css';
import { useState } from 'react';
import { connect } from "react-redux";
import { getCharacters } from '../redux/actions';

const SearchBar = (props) => {
   const [id, setId] = useState ('')

   const handleChange = ({target}) => {
      setId(target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      props.getCharacters(
        ...id
      )
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input 
               className={styles.imput} 
               type='search' 
               characterId=''   
               onChange={handleChange}/>
            <button 
            type="submit"
            className={styles.boton} 
            >Agregar Personage</button>
         </form>
      </div>
   );
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getCharacters: (id) => {dispatch(getCharacters(id))}
//     }
// }

// export default connect(null, mapDispatchToProps) (SearchBar);
export default SearchBar;
