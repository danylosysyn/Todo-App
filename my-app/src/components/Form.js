import { React, useEffect } from "react";

const Form = ({ setInputText, setToDo, toDo, inputText, status, setStatus, filterTodos, setFilterTodos }) => {


    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setToDo([...toDo, { text: inputText, completed: false, id: Math.random() * 1000 }]);
        setInputText("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilterTodos(toDo.filter(el => el.completed == true))
                break
            case "uncompleted":
                setFilterTodos(toDo.filter(el => el.completed == false))
                break
            default:
                setFilterTodos(toDo)
                break

        }
    }


    useEffect(() => {
        filterHandler();
    }, [toDo, status]);

    return (
        <form>
            <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
            <button className="todo-button" type="submit" onClick={submitHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form