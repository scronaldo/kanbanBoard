// action creators for  cards
import  { CONSTANTS } from '.'

// sound player func
const PlaySound = (url) => {
    const audio = new Audio(url);
    audio.loop = false;
    audio.play(); 
    console.log('sound done (by Thunk)')
    // yes i don't delete logs coz this is just a study orientated project - sorry
}

export const addCard = (listID, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: {text, listID}
    }
};

export const deleteCard = (id, listID) => {
    return {
        type: CONSTANTS.DELETE_CARD,
        payload: {id, listID}
    }
}

export const deleteCardThunk = (id, listID) =>  (dispatch) => {
    dispatch(deleteCard(id, listID)); // dispatch normal action creater func
    PlaySound('https://www.pacdv.com/sounds/preview/sound21.mp3'); // next action
}


export const editCard = (id, listID, newText) => {
    return {
      type: CONSTANTS.EDIT_CARD,
      payload: { id, listID, newText }
    };
    
  };


  export const editCardThunk = (id, listID, newText) => {
      return (dispatch) => {
          dispatch(editCard(id, listID, newText));
  
    PlaySound('https://freesound.org/data/previews/256/256113_3263906-lq.mp3'); 
    
      }
  }

  // ok, i know, it might be redundant but i just want to practice thunk here
  export const addCardThunk = (listID, text) => {
      return (dispatch, getState) => {
        dispatch(addCard(listID, text));    
        PlaySound('https://freesound.org/data/previews/263/263132_2064400-lq.mp3'); 

      }
  }