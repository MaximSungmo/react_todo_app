import React, {useState} from "react";
import './Todo.css';
import {
  ListItemAvatar,
  List,
  ListItem,
  ListItemText,
  Modal, Input
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const handleOpen = () => {
    setOpen(false);
  };

  const updateTodo = () => {
    // update the todo with the new input text
    db.collection('todos').doc(props.todo.id).set({
      todo: input
    }, {merge: true});
    setOpen(false);
  }

  return (
      <>
        <Modal open={open} onClose={handleOpen}>
          <div className={classes.paper}>
            <h1>Update Todo</h1>
            <Input
                placeholder={props.todo.todo}
                value={input}
                onChange={event => setInput(event.target.value)}
            />
            <Button onClick={e => updateTodo()}>Update todo</Button>
          </div>
        </Modal>
        <List className="todo__list">
          <ListItem>
            <ListItemAvatar/>
            <ListItemText id={props.todo.id} primary={props.todo.todo}
                          secondary="Todo"/>
          </ListItem>
          <Button onClick={e => setOpen(true)}>edit</Button>
          <DeleteForeverIcon onClick={event => {
            db.collection('todos').doc(props.todo.id).delete();
          }}/>
        </List>
      </>
  )
}

export default Todo