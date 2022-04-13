import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
function TodoList() {
  const [todos, setTodos] = useState([]);
  // add todo
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    //console.log(...todos);
  };
  //update todo
  /*const updateTodo = (todoId, newValue,todo) =>
    {
        if(!newValue.text || /^\s*$/.test(newValue.text))
        {
            return;
        }
        //const newTodos = [todo, ...todos];
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue:item)));
        //setTodos(newTodos);
    };*/
  //New updation in todo list
  const updateTodo = (todoId, todo) => {
    console.log({ todoId, todo });
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    // const newTodos = [todo, ...todos];
    // setTodos(prev => prev.map(item => (item.id === todoId ? todo:item)));
    setTodos(todos.map((item) => (item.id == todoId ? todo : item)));
  };
  //remove todo from list
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  // const completeTodo = id => {
  //     let updatedTodos = todos.map(todo =>{
  //         if(todo.id === id)
  //         {
  //             todo.isComplete = !todo.isComplete;
  //         }
  //         return todo;
  //     });
  //     setTodos(updatedTodos);
  // }

  return (
    <div>
      <h1>What's the plan for today ?</h1>
      <TodoForm onSubmit={addTodo} />

      <Todo
        todos={todos}
        // completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
