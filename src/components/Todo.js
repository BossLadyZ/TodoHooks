import React, {useState} from 'react';
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm';
import './Todo.css';

function Todo({todos, completeTodo, removeTodo, editTodo}) {
    const [edit, setEdit ] =useState({
        id: null,
        value: ""
    });
 
    const submitEdit = (value) => {
        editTodo(edit.id, value)
        setEdit({
            id:null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitEdit} />

    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
         key={index}>
             <div className="todo-text" key={todo.id} onClick={() =>completeTodo(todo.id)}>
                {todo.text}
             </div>
             <div className="icons">
               <RiCloseCircleLine 
               onClick={() => removeTodo(todo.id)}
               className="delete-icon"
               />
               <TiEdit 
               onClick={() => setEdit({id: todo.id, value: todo.text })}
               className="edit-icon"
               />
 
            </div> 


        </div>
    ))
}

export default Todo
