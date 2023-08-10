import { useState } from 'react';
import './App.css';
import Form from "./components/Form"
import ToDoList from "./components/ToDoList"


function App() {
  const [inputText, setInputText] = useState("")
  const [toDo, setToDo] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Your ToDo list</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} toDo={toDo} setToDo={setToDo} />
      <ToDoList toDo={toDo} setToDo={setToDo}/>
    </div>
  );
}

export default App;
