import axios from 'axios';

export const GET_CHARACTERS = "GET_CHARACTERS";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const CREATE_CHARACTER = "CREATE_CHARACTER";
export const GET_DETAILS = "GET_DETAILS";

export const getCharacters = () => {
  return function (dispatch) {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: GET_CHARACTERS, payload: data.results })
      // .catch ((error) => console.log(error))
      );
  };
};

  export const deleteCharacter = (id) => {
    return {
        type: DELETE_CHARACTER,
        payload: id,
    }
  }

  export const createCharacter = (character) => {
    return {
        type: CREATE_CHARACTER,
        payload: character,
    }
  }

  export function getDetails(id) {
    return async function (dispatch) {
        try {
            let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            console.log(response.data)
            dispatch({
                type: GET_DETAILS,
                payload: response.data,
            })
        } catch (error) {
          console.log('error')
          window.alert('No')
      }
    }
}




  // return function (dispatch) {
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((response) => response.json())
  //     .then((data) =>
  //       dispatch({ type: GET_CHARACTERS, payload: data.results })
  //     );
  // };

//   return (dispatch) => { 
//     fetch(`https://rickandmortyapi.com/api/character/${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//      if (data.name) {
//         dispatch({type: GET_CHARACTERS, payload: data.id});
//      } else {
//         window.alert('No hay personajes con ese ID');
//      }
//   });
// } 