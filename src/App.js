import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // this code runs when app loads    
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
      //console.log(snapshot.docs.map(doc => doc.data()));
    });
  }, []);

  const addTodo = (event) => {
    // this fires when clicking add todo buttons
    if(input == '')
      return;

      db.collection('todos').add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">    
    <input value={input} onChange={event => setInput(event.target.value)}/>  
    <Button type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>

    <ul>
      {todos.map(todo => (
        <Todo todo={todo} />
      ))}
    </ul>


    </div>
  );
}

export default App;
