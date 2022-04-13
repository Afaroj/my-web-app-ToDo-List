import React, { useState } from "react";
//import TodoForm from './TodoForm';
//import TodoList from './TodoList';
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
// import TodoForm from './TodoForm';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [input, setInput] = useState("");

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  // const displayTodo = todo =>
  // {

  //     const newTodos = [todo, ...todos];

  //     displayTodo(newTodos);
  //     //console.log(...todos);
  // };
  //to update the value
  const submitUpdate = () => {
    updateTodo(edit.id, { id: edit.id, text: input });

    setEdit({
      id: null,
      value: "",
    });
    //console.log(...todos);
  };
  // const displayTodoList =(todo )=>{
  //     const newTodos = [todo];
  //     displayTodo(newTodos);

  // }
  // if(edit.id)
  // {
  //     return(<TodoForm
  //         edit={edit}
  //         onSubmit={submitUpdate}
  //         displayTodoList={displayTodoList}
  //     />
  //     );

  // }
  // if(edit.id)
  //   {
  //       return( <TodoForm edit={edit}
  //         onSubmit={submitUpdate}
  //         displayTodo={displayTodo}

  //      /> );
  //   }
  /*if(edit.id)
      {
          return <TodoForm edit={edit}
            onSubmit={submitUpdate}
         />;
      }*/
  //to update the value2
  /*const submitUpdate = value =>
    {
        updateTodo(edit.id,value);
        setEdit({
            id: null,
            value: ''
        });
    };
    
     if(edit.id)
     {
         return <TodoForm edit={edit}
            onSubmit={submitUpdate}
         />;
     }*/

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
              onClick={() => removeTodo(todo.id)}
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
