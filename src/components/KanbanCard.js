import React, { useState } from 'react';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Icon from "@material-ui/core/Icon";
import styled from "styled-components";
import {Draggable} from 'react-beautiful-dnd';
import { connect } from "react-redux";
import { deleteCardThunk, editCardThunk } from "../actions";
import KanbanButton from "./KanbanButton";
import KanbanForm from "./KanbanForm";






const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;



const KanbanCard = React.memo(({text, listID, id, index, dispatch}) => {

    // use hooks state to handle editing

    // show form html if being edited(true)
    const [isEditing, setIsEditing] = useState(false);
    // text local state
    const [cardText, setText] = useState(text);




  const handleDeleteCard = e => {
    // delete card using AC func
    dispatch(deleteCardThunk(id, listID));
  }

  const closeForm = e => {
    setIsEditing(false);
  };

  // bind text field data changes to state
  const handleChange = e => {
    setText(e.target.value);
  };


  const saveCard = e => {
    e.preventDefault();
    // save edited text and close the form
    dispatch(editCardThunk(id, listID, cardText));
    setIsEditing(false);
  }; 

  // the render funcs

  // render edit form and pass it event funcs as props
  const renderEditForm = () => {
    return (
      <KanbanForm text={cardText} onChange={handleChange} closeForm={closeForm}>
        <KanbanButton onClick={saveCard}>Save</KanbanButton>
      </KanbanForm>
    );
  };

  // render card func
  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <CardContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditing(true)}
          >
            <Card>
              <EditButton
                onMouseDown={() => setIsEditing(true)}
                fontSize="small"
              >
                edit
              </EditButton>
              <DeleteButton fontSize="small" onMouseDown={handleDeleteCard}>
                delete
              </DeleteButton>

              <CardContent>
                <Typography>{text}</Typography>
              </CardContent>
            </Card>
          </CardContainer>
        )}
      </Draggable>
    );
  };
  // show/hide editable card logic
  return isEditing ? renderEditForm() : renderCard();
});

export default connect()(KanbanCard);