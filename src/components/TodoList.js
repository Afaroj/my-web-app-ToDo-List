import React, { useState,useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

//package to send the data to the database
import axios from 'axios';
function TodoList() {
  const [isLoading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  
  
  // add todo
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    //previous add operation
    //const newTodos = [response.data, ...todos];
    //setTodos(newTodos);

    //to send the data to database and we can see it on http://localhost:5000/Todo
    
    axios.post('https://json-server-endpoint.herokuapp.com/todo', todo).then((response) => {
      
        const newTodos = [response.data, ...todos];
        setLoading(true);
        setTimeout(() => {
          setTodos(newTodos);
          setLoading(false)
      },3000)
        
        //setTodos(newTodos);
        
    })
  }

  // update todo list
  const updateTodo = (todoId, todo) => {
    console.log({ todoId, todo });
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    /*setTodos(todos.map((item) => (item.id == todoId ? todo : item)));
    //to show updated items on console
    console.log(todo);*/

    //to update the data in database using axios function and we can see it on http://localhost:5000/Todo
    axios.patch(`https://json-server-endpoint.herokuapp.com/todo/${todoId}`,todo).then((response)=>{
      setTodos(todos.map((item)=>(item.id == todoId ? todo : item)));
      console.log(todo);
    })

  };

  //remove todo from list
  const removeTodo = (id,todo) => {
    //previous delete operation
    /*const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);*/

    //to send the data to database and we can see it on http://localhost:5000/Todo
    axios.delete(`https://json-server-endpoint.herokuapp.com/todo/${id}`,todo).then((response)=>{
      const removeArr = [...todos].filter((todo) => todo.id !== id);
      setTodos(removeArr);
    })

  }; 

//to get the data or to save the data on screen only and we can see it on http://localhost:5000/Todo
  useEffect(() => {
    axios.get('https://json-server-endpoint.herokuapp.com/todo').then((response) => {
      // const newTodos = [todo, ...todos];
      setTodos(response.data);
  })
  },[])

  return (
    <div>
      <h1>What's the plan for today ?</h1>
      <div>
        <TodoForm onSubmit={addTodo} />
      </div>
      

      <Todo
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
