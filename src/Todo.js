import React from "react";
import './Todo.css';
import {ListItemAvatar, List, ListItem, ListItemText} from "@material-ui/core";

function Todo(props) {
  return (
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar/>
          <ListItemText primary={props.text} secondary="Todo"/>
        </ListItem>
      </List>
  )
}

export default Todo