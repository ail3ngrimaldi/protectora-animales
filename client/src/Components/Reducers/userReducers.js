import {
    GET_USER
  } from "../Constants/userConstants";
  
  const initialState = {
    usuarios: []
    
     
    };
  
  export default function usuario(state = initialState, action) {
      switch (action.type) {
        case GET_USER:
            return {
              ...state,
              usuarios: state.usuarios
            };
  
          default:
        return state;
      }
  }