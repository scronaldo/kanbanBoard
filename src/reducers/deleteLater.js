class App extends Component {
   onDragEnd = result => {
     const { destination, source, draggableId, type } = result;
 
     if (!destination) {
       return;
     }
 
     this.props.dispatch(
       sort(
         source.droppableId,
         destination.droppableId,
         source.index,
         destination.index,
         draggableId,
         type
       )
     );
   };
 
   render() {
     const { lists } = this.props;
     return (
       <DragDropContext onDragEnd={this.onDragEnd}>
         <h2>Hello Youtube</h2>
         <Droppable droppableId="all-lists"
          direction="horizontal" type="list">
           {provided => (
             <ListsContainer
               {...provided.droppableProps}
               ref={provided.innerRef}
             >
               {lists.map((list, index) => (
                 <TrelloList
                   listID={list.id}
                   key={list.id}
                   title={list.title}
                   cards={list.cards}
                   index={index}
                 />
               ))}
               {provided.placeholder}
               <TrelloActionButton list />
             </ListsContainer>
           )}
         </Droppable>
       </DragDropContext>
     );
   }
 }
 
























/// duplicate
          const {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexEnd,
            droppableIndexStart,
            draggableId,
            type
            
        } = action.payload;

        const newState = [...state];

    // draggin lists around
      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

       // If the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

          // if dropped to other list
          if (droppableIdStart !== droppableIdEnd) {
            // find the list where the drag happened
            const listStart = state.find(list => droppableIdStart === list.id);
            // pull out the card from this list
            const card = listStart.cards.splice(droppableIndexStart, 1);
            // find the list where the drag ended
            const listEnd = state.find(list => droppableIdEnd === list.id);
    
            // put the card in the new list
            listEnd.cards.splice(droppableIndexEnd, 0, ...card);
          }
    
          return newState;      

       

