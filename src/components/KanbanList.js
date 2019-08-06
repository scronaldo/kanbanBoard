import React, { useState } from "react";
import KanbanCard from './KanbanCard';
import KanbanActionButton from './KanbanActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Icon from "@material-ui/core/Icon";
import { editTitle, deleteList } from "../actions";
import { connect } from "react-redux";



const ListContainer = styled.div`
background-color: grey;
background: linear-gradient(45deg, rgba(145,232,79,1) 0%, rgba(0,128,128,1) 100%);
border-radius: 3px;
width: 300px;
padding: 4px 8px;
height: 100%;
margin: 0 10px 0 1px;
`;


const StyledInput = styled.input`
  width: 95%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  padding: 7px 5px;
  margin: 10px 5px 15px 5px;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DeleteButton = styled(Icon)`
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: 0.4;
  margin-bottom: 15px;
  &:hover {
    opacity: 0.8;
  }
`;

const ListTitle = styled.h4`
  transition: background 0.3s ease-in;
  font-size: 18px;
  font-weight: bold;
  margin: 1px 5px 20px 5px;
  &:hover {
    background: #ccc;
    padding: 0.5%;
  }
`;

const KanbanList = ({title, cards, listID, index, dispatch}) => {
    
    // handle list editing with hooks comps states
    const [isEditing, setIsEditing] = useState(false);
    const [listTitle, setListTitle] = useState(title);

    // the render func for edit feature
    const renderEditInput = () => {
        return (
          <form onSubmit={handleFinishEditing}>
            <StyledInput
              type="text"
              maxLength="45"
              value={listTitle}
              onChange={handleChange}
              autoFocus
              onFocus={handleFocus}
              onBlur={handleFinishEditing}
              
            />
          </form>
        );
      };

      // select input text by focus (halted for now)
      const handleFocus = e => {
        // e.target.select();
      };

      // save changes to state after every input change
      const handleChange = e => {
        e.preventDefault();
        setListTitle(e.target.value);
      };
      
      // save changes
      const handleFinishEditing = e => {
        setIsEditing(false); // hide input
        dispatch(editTitle(listID, listTitle));
      };

      // handle delete using listID from received props
      const handleDeleteList = () => {
        dispatch(deleteList(listID));
      };


    // functional component return  
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                  <ListContainer
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                    ref={provided.innerRef}
          >
                 <Droppable droppableId={String(listID)} type='card'>
                 {provided => (

                <div>
                `<div>
                  {isEditing ? (
                    renderEditInput()
                  ) : (
                    <TitleContainer>
                      <ListTitle  onClick={() => setIsEditing(true)}>{listTitle}</ListTitle>
                      <DeleteButton onClick={handleDeleteList}>
                        delete
                      </DeleteButton>
                    </TitleContainer>
                  )}
                </div>

                    <div {...provided.droppableProps} ref={provided.innerRef}>
                     
                     {/* for each card in array add component */}
                     {cards.map((card, index) => {
                         return <KanbanCard 
                         key={card.id} index={index} 
                         text={card.text} id={card.id}
                         listID={listID}
                         />
                     })}
                     <KanbanActionButton listID={listID} />
                    {/* provided.placeholder basically gives extra space to your <Droppable/> while a drag is occurring */}
                     {provided.placeholder}
                     </div>
                     </div>
                 )          
                 }
                 
                
                 </Droppable>
                 </ListContainer>
            )}
        </Draggable>
       
    )
}



export default connect()(KanbanList);