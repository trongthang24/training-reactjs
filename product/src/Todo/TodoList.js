import NewTodo from "./NewTodo";
import Todo from "./Todo";
import axios from 'axios';
import { useState, useEffect } from "react"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([])
    const [open, setOpen] = useState(false);
    const [todoId, setTodoId] = useState('');
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then(res => {
                setTodos(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[]);
    const handleClickOpen = (id) => {
        setOpen(true);
        setTodoId(id)
    };

    const handleClose = () => {
        setOpen(false);
    };

    function createTodo(newTodo) {
        setTodos([newTodo, ...todos]);
    }

    function handleRemove() {
        setTodos(todos.filter(todo => todo.id !== todoId));
        handleClose(false);
    }

    function update(id, updatedTodo) {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, name: updatedTodo };
            }
            return todo;
        });
        setTodos(updatedTodos);
    }
    return (
        <div className="todoList">
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete Todo"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you want to delete ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={() => handleRemove()} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
            <NewTodo createTodo={createTodo} />
            {todos.map(todo => (
                <Todo todo={todo} handleClickOpen={handleClickOpen} key={todo.id} update={update}/>
            ))}
        </div>
    )
}

export default TodoList;