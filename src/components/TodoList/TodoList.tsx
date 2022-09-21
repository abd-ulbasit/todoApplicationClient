import axios from 'axios';
import React, { useEffect } from 'react'
import Todo from './Todo';
const USERNAME = "basit";
type TodoType = {
    title: string,
    description: string,
    _id: string,
    completed: boolean,
    archieved: boolean,
    updatedOn: Date,
    isStarred: boolean,

}
let first = true;
const TodoList = () => {
    const [todos, setTodos] = React.useState([]);
    useEffect(() => {
        if (first) {
            first = false;
            return;
        }
        axios.get('http://localhost:5000/todolist', {
            params: {
                username: USERNAME
            }
        }).then((res) => {
            console.log(res.data.data);
            setTodos(res.data.data);
        })
    }, [])
    return (
        <div className='w-100 '>

            <div className='w-full sm:w-9/12 border-red-400 mt-4 mx-auto shadow-none shadow-slate-800 p-2 h-auto'
            >{todos.map((each: TodoType) => {
                console.log(each)
                return <Todo data={each} key={each._id} ></Todo>
            })
                }</div>
        </div>
    )
}

export default TodoList