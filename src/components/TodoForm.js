import React, {useState, useEffect, useRef} from 'react';

//useState here will return current value and then we can edit the that value
//instead of that if we pass empty string then it will reove previous value automatically

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    //to focus cursor on textinput area
    const inputRef = useRef(null)

    const handleChange = e =>
    {
        setInput(e.target.value);
    }
    //to focus cursor on textinput area
    // useEffect(() => {
    //     inputRef.current.focus()
    // })
    //to submit the value and set inpute text value again to empty string
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text : input
        });
        //console.log("Submit");
        setInput(" ");
    };

    return ( 
        <form className='todo-form' onSubmit={handleSubmit}>
            <>
                    <input 
                    type= 'text'
                    placeholder='Add a todo List'
                    value={input}
                    name='text'
                    className='todo-input'
                    onChange={handleChange}
                    ref = {inputRef}
                    />
                    <button  className='todo-button'>Add ToDo</button>
            </>
{/* 
            {props.edit ? (
            <>
                <input 
                type= 'text'
                placeholder='Update your item'
                value={input}
                name='text'
                className='todo-input edit'
                onChange={handleChange}
                ref = {inputRef}
                />
                <button  className='todo-button edit'>Update</button>
            </>
            ):
            (
                <>
                    <input 
                    type= 'text'
                    placeholder='Add a todo List'
                    value={input}
                    name='text'
                    className='todo-input'
                    onChange={handleChange}
                    ref = {inputRef}
                    />
                    <button  className='todo-button'>Add ToDo</button>
            </>
            )
            }
             */}
        </form>
     );
}

export default TodoForm;