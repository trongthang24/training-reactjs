import { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import './Todo.css';

function Todo({ todo, handleClickOpen, update }) {
    const [isEditing, setIsEditing] = useState(false)
    const [task, setTask] = useState(todo.name)
    const toggleForm = () => {
        setIsEditing(!isEditing);
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        update(todo.id,task)
        toggleForm();
    }
    let result;
    if (isEditing) {
        result = (
            <div className="todo">
                <form className="Todo-edit-form" onSubmit={handleUpdate}>
                    <input onChange={(e) => setTask(e.target.value)} value={task} type="text" />
                    <button>Save</button>
                </form>
            </div>
        )
    } else {
        result = (
            <div className="todo">
                <li key={todo.id}>
                    <div>
                        {todo.name}
                    </div>
                    <div>
                        <button onClick={toggleForm}><FaPen /></button>
                        <button onClick={() => handleClickOpen(todo.id)}><FaTrash /></button>
                    </div>
                </li>
            </div>
        )
    }
    return result;
}

export default Todo