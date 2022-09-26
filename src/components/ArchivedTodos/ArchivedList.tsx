import axios from 'axios';
const USERNAME = 'basit'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Todo } from '../../types/Types';
import { AuthContext } from '../Context/AuthContext';
import ArchivedTodo from './ArchivedTodo';
let first = true;
const ArchivedList = () => {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const [archivedTodos, setArchivedTodos] = useState<Todo[]>([])
    useEffect(() => {
        if (true) {
            first = false;
            axios.get('http://localhost:5000/archivedtodos', {
                params: {
                    username: authCtx.userName
                }
            }).then((res) => {
                // console.log(res.data.data);
                setArchivedTodos(res.data.data);
                console.log(res.data.data);
            })
        }
    }, [])
    const handleDelete = (id: string) => {

        axios.delete(`http://localhost:5000/deletetodo/`, { data: { id: id } }).then(res => {
            if (res.status === 204) {
                console.log('inside 204')
                setArchivedTodos((prev) => {
                    return prev.filter((todo: Todo) => {
                        return todo._id !== id
                    })
                })
                console.log(archivedTodos)
                console.log("deleted");
            }
        }).catch(err => {
            console.log(err);
        })
    }
    const unarchive = (id: string) => {
        // console.log(!prev);
        const body = {
            id: id,
            fieldToUpdate: { isArchived: false, updatedOn: new Date() }
        }
        axios.patch('http://localhost:5000/updatetodo', body).then((res) => {
            if (res.status === 201) {
                setArchivedTodos((prev) => {
                    let toUnarchive = prev.find((todo: Todo) => {
                        return todo._id === id
                    })
                    console.log(toUnarchive);
                    // toUnarchive?.isArchived=false;
                    let archived = prev.filter((todo) => {
                        return todo._id !== id
                    })
                    console.log(archived)
                    return archived
                })
            } else {
                navigate('/servererror')
            }
        }).catch((err) => {
            alert(err.message)
        })
    }
    return (
        <div className='bg-slate-200 dark:bg-slate-500 h-screen w-full my-0 fixed overflow-auto text-slate-900'>
            <div className='grid grid-cols-1  sm:grid-cols-1 md:grid-cols-2 my-0  w-4/6 mx-auto gap-4 p-3 m-3 ' >
                {archivedTodos.map((todo: Todo) => {
                    console.log("Renendered");
                    return <ArchivedTodo key={todo._id} deleteForever={handleDelete} unarchive={unarchive} todo={todo} ></ArchivedTodo>
                })

                }
            </div>{archivedTodos.length === 0 && <div className='bg-slate-300 flex justify-center items-center  text-8xl font-black fixed h-screen w-screen pb-24 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-cyan-800 font-mono  ' >
                Nothing here!
            </div>
            }
        </div>
    )
}

export default ArchivedList;