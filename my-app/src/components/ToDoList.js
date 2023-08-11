import React from "react";
import { ToDoElement } from "./ToDo";

const ToDoList = ({ toDo, setToDo, filterTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">

                {filterTodos.map(todo => (
                    <ToDoElement text={todo.text} key={todo.id} setToDo={setToDo} toDo={toDo} todo={todo} />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList