import React from "react";
import KanbanCard from './KanbanCard';
import KanbanActionButton from './KanbanActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
background-color: grey;
background: linear-gradient(45deg, rgba(145,232,79,1) 0%, rgba(0,128,128,1) 100%);
border-radius: 3px;
width: 300px;
padding: 8px;
height: 100%;
margin: 0 8px 0 0;
`;


const KanbanList = ({title, cards, listID, index}) => {
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {provided => (
                  <ListContainer
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                    ref={provided.innerRef}
          >
                 <Droppable droppableId={String(listID)}>
                 {provided => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                     <h4 style={{fontSize: 18, fontWeight: 'bold'}}>{title}</h4> 
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
                 )          
                 }
                 
                
                 </Droppable>
                 </ListContainer>
            )}
        </Draggable>
       
    )
}



export default KanbanList;