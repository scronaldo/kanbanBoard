import React, {Component} from 'react';
import KanbanList from './KanbanList';
import { connect } from 'react-redux';
import KanbanActionButton from './KanbanActionButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
    marginRight: 8
`;

class App extends Component {

  onDragEnd = (result) => { 
    // destructuring for result obj properties
    const {destination, source, draggableId, type } = result;
    // console.log(result);
    if(!destination) {
      return;
    }
    // sort items
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      ))
    }


  render() {

    const lists = this.props.lists;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <h3 style={{color: 'white', padding: '0 1%',
    textTransform: 'uppercase'}}>KANBAN: add, edit, delete, listen (eng only) and drag&drop your cards.</h3>
        <Droppable 
        droppableId='all-lists' 
        direction='horizontal' 
        type='list'>
          {provided => (
             <ListsContainer 
             {...provided.droppableProps} 
             ref={provided.innerRef}
             >
             {/* render lists with KanbanList comp using lists reducer's state (array of lists objects) */}
             {lists.map((list, index) => (
               <KanbanList 
               listID={list.id} 
               title={list.title} 
               key={list.id} 
               cards={list.cards}
               index={index}
               />
               ))}
               {provided.placeholder}
               <KanbanActionButton list />
            </ListsContainer>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}



const mapStateToProps = (state, ownProps) => { 
  return {
  lists: state.lists

  }
  // tied up with 
//   export default combineReducers({
//     lists: listsReducer
// });
};
export default connect(mapStateToProps) (App);
