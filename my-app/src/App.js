import { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form"
import ToDoList from "./components/ToDoList"


function App() {
  const [inputText, setInputText] = useState("")
  const [toDo, setToDo] = useState([]);
  const [status, setStatus] = useState("all")
  const [filterTodos, setFilterTodos] = useState([])

  return (
    <div className="App">
      <header>
        <h1>Your ToDo list</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        toDo={toDo} setToDo={setToDo}
        status={status}
        setStatus={setStatus}
        filterTodos={filterTodos}
        setFilterTodos={setFilterTodos}
      />
      <ToDoList
        toDo={toDo}
        setToDo={setToDo}
        filterTodos={filterTodos}
      />
    </div>
  );
}

export default App;
