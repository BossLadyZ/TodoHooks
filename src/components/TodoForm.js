import React, {useState, useEffect, useRef, useCallback} from 'react'
import './TodoForm.css'


function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value 
        : '');

    const inputRef = useRef(null)

    useEffect(()=> {
        inputRef.current.focus()
    })

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });

        setInput('')
    }
    
    const handleChange = (e) => {
        setInput(e.target.value)
    }


    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input
                type="text"
                placeholder="Edit Todo"
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange }
                ref={inputRef}/>
                <button className="add-todo">Update Todo</button>
                </>
                ) :
               (
               <>   
                <input
                type="text"
                placeholder="Add Todo"
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange }
                ref={inputRef}/>
                <button className="add-todo">Add Todo</button>
                </> 
            )
        }
        </form>
    )
}

export default TodoForm
