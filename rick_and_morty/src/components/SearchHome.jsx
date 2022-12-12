import CardsBusca from './CardsBusca';
import character from '../data';
import { useState } from 'react';
import SearchBar from "./SearchBar.jsx";

const SearchHome = () => {
    const [charactersId, setCharactersId] = useState(character)

      const onSearch = (characterId) => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
          .then((response) => response.json())
          .then((data) => {
             if (data.name) {
                setCharactersId((oldChars) => [...oldChars, data]);
             } else {
                window.alert('No hay personajes con ese ID');
             }
          });
      }

    return(
        <>
            <SearchBar onSearch = {onSearch} />
            <CardsBusca charactersId = {charactersId} />
        </>
    )
}

export default SearchHome;