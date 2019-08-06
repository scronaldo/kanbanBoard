import  { CONSTANTS } from '.'

export const addList = (title) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title
    }
}

export const sort = (
    droppableIdStart,    
    droppableIdEnd,    
    droppableIndexStart,    
    droppableIndexEnd,    
    droppableId,
    type    
) => {
    return {
        type: CONSTANTS.DRAG_HAPPENDED,
        payload:  {
        droppableIdStart,    
        droppableIdEnd,    
        droppableIndexStart,    
        droppableIndexEnd,    
        droppableId,
        type
        }
    }
}

export const editTitle = (listID, newTitle) => {
    return {
      type: CONSTANTS.EDIT_LIST_TITLE,
      payload: {
        listID,
        newTitle
      }
    };
  };
  
  export const deleteList = listID => {
    return (dispatch) => {
      return dispatch({
        type: CONSTANTS.DELETE_LIST,
        payload: {
          listID
        }
      });
    };
  };