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