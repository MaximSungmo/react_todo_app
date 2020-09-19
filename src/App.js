import React, {useEffect, useState} from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';
import Todo from "./Todo";
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(``);

  // when the app load, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    /// this code here... fires when the app.js loads
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    })
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); // I will stop refresh the page
    setTodos([...todos, input]);
    setInput(''); // clear up the input after hitting submit
  }

  return (
      <div className="App">
        <h1>Hello World</h1>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input}
                 onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary"
                type={"submit"} onClick={addTodo}>
          Add Todo
        </Button>
        <ul>
          {todos.map(todo => (
              <Todo text={todo}/>
          ))}
        </ul>
      </div>
  );
}

export default App;
