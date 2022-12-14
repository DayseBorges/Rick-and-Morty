import { CREATE_CHARACTER, DELETE_CHARACTER, GET_CHARACTERS, GET_DETAILS } from "./actions";
import myImg from '../imagenes/Mi.jpg';

const inicialState = {
    characters: [],
    myCharacters: [{image: (myImg), name: 'Dayse (Creator)'}],
    detail: {},
    details: [],
}

const rootReducer = ( state = inicialState, action ) => {
    switch (action.type)  {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
            }
        
        case DELETE_CHARACTER:
            return {
                ...state,
                characters: state.characters.filter(
                    (char) => char.id !== action.payload
                ),
            }
        
        case CREATE_CHARACTER:
            return {
                ...state,
                myCharacters: [...state.myCharacters, action.payload],
            }

        case GET_DETAILS:
            return {
                ...state,
                details: action.payload,
            }
    
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer;