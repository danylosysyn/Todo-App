import './App.css';
import Form from "./components/Form"
import ToDoList from "./components/ToDoList"


function App() {
  return (
    <div className="App">
      <header>
        <h1>Your ToDo list</h1>
      </header>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
