import { useState } from "react"
import * as uuid from "uuid";
import './NewTodo.css';

function NewTodo({ createTodo }) {
    const [userInput, setUserInput] = useState('')
    function handleAdd() {
        createTodo({
            id: uuid.v4(),
            name: userInput
        })
        setUserInput('')
    }
    return (
        <div className="newTodo">
            <input
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                id="task"
                type="text"
                name="task"
                placeholder="New Todo"
            />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    )
}

export default NewTodo