import { Checkbox, TextareaAutosize, TextField } from '@mui/material'
const USERNAME = 'basit'
import React, { useContext, useState } from 'react'
import "../../index.css"
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { useNavigate } from 'react-router-dom';
import { Todo } from '../../types/Types';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { ThemeContext } from '../Context/ThemeContext';
const NewTodoForm = () => {
    const themeCtx = useContext(ThemeContext)
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState('');
    const [isStarred, setIsStarred] = useState(false);
    const handleIsStarred = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsStarred(e.target.checked);
    }
    const handleAddNewTodo: React.FormEventHandler = (e) => {
        e.preventDefault();
        console.log(title, description, isStarred);
        setTitle("");
        setDescription("");
        setIsStarred(false);
        const newTodo = {
            username: authCtx.userName,
            title,
            description,
            isStarred,
            isCompleted: false,
            updatedOn: new Date(),
            isArchived: false,
        }
        axios.post('http://localhost:5000/newtodo', newTodo).then(res => {
            if (res.data.status === "success") {
                console.log(res.data);
                navigate('/');

            }
        }).catch(err => {
            console.log(err);
        }
        )

    }
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }
    return (
        <div className='bg-slate-300 rounded-md p-3 w-3/4 dark:bg-slate-400 text-slate-900'  >
            <form onSubmit={handleAddNewTodo} className="flex  flex-col sm:flex-row" >
                < div className='flex-grow'>
                    <div className='flex flex-col g-3' >
                        <label htmlFor='title' >Title</label>
                        <input id="title" type="text" className='p-1 resize-y sm:resize-none rounded-md border-2
                    focus:border-slate-900 text-slate-700 font-semibold outline-0 ' value={title} onChange={handleTitleChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='description' >Description</label>
                        <textarea className='p-3 resize-none rounded-md border-2
                    focus:border-slate-900 text-slate-700 font-semibold outline-0 ' rows={3} value={description} onChange={handleDescriptionChange} ></textarea>
                    </div>
                </div>
                <div className='flex flex-col p-2 m-2 justify-between' >
                    <div className='' >
                        <Checkbox style={{ color: `${themeCtx.dark ? "white" : "slateblue"}` }}
                            onChange={handleIsStarred}
                            checked={isStarred}
                            size={"medium"}
                            icon={<StarBorderRoundedIcon></StarBorderRoundedIcon>} checkedIcon={<StarRoundedIcon></StarRoundedIcon>}

                        ></Checkbox>
                    </div>
                    <button className=' py-2 px-4 box-border border-2 hover:text-white border-slate-700 w-full rounded-lg text-slate-700 font-semibold hover:scale-[1.02] hover:bg-slate-500 focus:cursor-wait transition-all'>

                        Add Todo
                    </button>
                </div>
            </form >

        </div >
    )
}

export default NewTodoForm