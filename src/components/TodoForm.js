import React, { useState, useEffect, useRef } from "react";

//useState here will return current value and then we can edit the that value
//instead of that if we pass empty string then it will reove previous value automatically

function TodoForm(props) {
  const [isLoading, setLoading] = useState(false);
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  //to focus cursor on textinput area
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
    //console.log(handleChange);
  };

  //to focus cursor on textinput area
  useEffect(() => {
    inputRef.current.focus();
  });

  //to submit the value and set inpute text value again to empty string
  const handleSubmit = (e) => {
    if (!input) {
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    e.preventDefault();

    props.onSubmit({
      // id:Math.floor(Math.random() * 10000),
      text: input,
    });
    //console.log("Submit");
    setInput("");
  };
  
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <>
        <input
          type="text"
          placeholder="Add a todo List"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />

        <button disabled={isLoading} className="todo-button">
          {isLoading ? "Loading..." : "Add ToDo"}
        </button>
      </>
    </form>
  );
}

export default TodoForm;
