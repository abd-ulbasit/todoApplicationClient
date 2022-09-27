import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { } from '../../types/Types';
import { AuthContext } from '../Context/AuthContext';
import Todo from './Todo';
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
    const authCtx = useContext(AuthContext);
    const [todos, setTodos] = React.useState([]);
    useEffect(() => {
        if (first) {
            first = false;
            return;
        }
        axios.get('http://localhost:5000/todolist', {
            params: {
                username: authCtx.userName
            }
        }).then((res) => {
            const todos = res.data.data
            sortByStarred(todos);

            // console.log(res.data.data);
            setTodos(todos);
        })
    }, [])
    const deleteTodo = (id: string) => {
        setTodos((prev) => {
            return prev.filter((todo: TodoType) => {
                return todo._id != id
            })
        })
    }
    const onArchiveTodo = (id: string) => {
        setTodos((prev) => {
            return prev.filter((todo: TodoType) => {
                return todo._id != id
            })
        })
    }
    return (
        <>{todos.length > 0 &&


            <div className='w-full   bg-slate-200 dark:bg-slate-500 h-screen fixed overflow-auto pb-16'>
                <div className='w-full sm:w-9/12 border-red-400 pt-4 mx-auto shadow-none shadow-slate-800 p-2 h-auto  text-slate-900 transition-all'
                >{todos.map((each: TodoType) => {
                    // console.log(each)
                    return <Todo data={each} key={each._id} deleteTodo={deleteTodo} archiveTodo={onArchiveTodo} ></Todo>
                })
                    }</div>
            </div>
        }{todos.length === 0 && <div className='bg-slate-200 flex justify-center items-center  font-black fixed h-screen w-screen pb-24  text-3xl  sm:text-6xl md:text-8xl text-slate-500 dark:bg-slate-500 dark:text-slate-700' >
            No Todos
        </div>

            }
        </>
    )
}

export default TodoList;
export function sortByStarred(array: TodoType[]) {
    array.sort(function (a: TodoType, b: TodoType): (1 | -1) {
        if ((a.isStarred ? 0 : 1) > (b.isStarred ? 0 : 1)) return 1;
        if ((a.isStarred ? 0 : 1) < (b.isStarred ? 0 : 1)) return -1;
        const atime = new Date(a.updatedOn);
        const btime = new Date(b.updatedOn);
        if (atime.getTime() > btime.getTime()) return -1;
        if (atime.getTime() < btime.getTime()) return 1;
        return 1
    })

}