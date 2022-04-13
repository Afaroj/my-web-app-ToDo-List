import React, { useState,useEffect } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";


function Todo({ todos, completeTodo, removeTodo, updateTodo,setItem }) {
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  }
  
  );
  //to update the value
  const submitUpdate = () => {
    updateTodo(edit.id, { id: edit.id, text: input });

    setEdit({
      id: null,
      value: "",
    });
    //console.log(submitUpdate);
  };

  //handleDelete box
  const handleDelete=(todo)=> {
    if(window.confirm(`You want to delete ${todo.text}`))
    {
      removeTodo(todo.id);
    }
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      {edit.id !== todo.id ? (
        <>
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => {handleDelete(todo)}  }
              className="delete-icon"
            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Update your item"
            defaultValue={edit.value}
            name="text"
            className="todo-input edit"
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => submitUpdate()} className="todo-button edit">
            Update
          </button>
        </>
      )}
    </div>
  ));
}

export default Todo;
