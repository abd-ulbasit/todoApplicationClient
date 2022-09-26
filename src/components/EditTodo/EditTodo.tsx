import { Checkbox } from '@mui/material'
import React, { FC, useState } from 'react'
import { createPortal } from 'react-dom'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
export type EdittedTodo = {
    title: string,
    description: string,
    isStarred: boolean,
    updatedOn: Date
}
type Props = {
    editTodo: (a: EdittedTodo) => void,
    setIsEdit: (a: boolean) => void,
    data: {
        title: string,
        description: string,
        _id: string,
        completed: boolean,
        archieved: boolean,
        updatedOn: Date,
        isStarred: boolean,
    }

}
const EditTodo: FC<Props> = ({ setIsEdit, editTodo, data: {
    title, description, _id, completed, archieved, isStarred, updatedOn
} }) => {
    const navigate = useNavigate();
    const [Title, setTitle] = useState<string>(title);
    const [Description, setDescription] = useState<string>(description);
    const [IsStarred, setIsStarred] = useState<boolean>(isStarred);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const handleEditTodo = (e: React.FormEvent) => {
        e.preventDefault();
        const edittedTodo: EdittedTodo = {
            title: Title,
            description: Description,
            isStarred: IsStarred,
            updatedOn: new Date(),
        }
        const body = {
            id: _id,
            fieldToUpdate: edittedTodo
        }
        axios.patch('http://localhost:5000/updatetodo', body).then((res) => {
            if (res.status === 201) {
                editTodo(edittedTodo);
            } else {
                console.log("server Error")
                navigate('/servererror')
            }

        }).catch((err) => {
            alert(err.message)
        })
        setIsEdit(false);
    }
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }
    const handleIsStarred = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsStarred(e.target.checked);
    }
    // const navigate = useNavigate();
    // console.log(Navigate);
    return (createPortal(<>
        <div className='inset-0 fixed z-10 bg-slate-200 opacity-80 dark:opacity-100 dark:bg-slate-900 ' onClick={() => setIsEdit(false)} >
        </div>
        <div className='bg-slate-200   z-20 inset-x-10 inset-y-40 sm:inset-x-20 md:inset-40  fixed rounded-xl text-slate-900 border border-slate-700 dark:bg-slate-500 '>
            <div className='  bg-slate-500 rounded-t-lg p-3 font-mono font-bold  ' >
                Edit Todo
            </div>
            <form onSubmit={handleEditTodo}  >
                < div className='flex-grow px-2 '>
                    <div className='flex flex-col' >
                        <div className='flex align-middle justify-between items-baseline ' >
                            <label htmlFor='title' className='text-slate-700 font-semibold' >Title</label>
                            <Checkbox style={{ color: "slateblue" }}
                                onChange={handleIsStarred}
                                checked={IsStarred}
                                size={"medium"}
                                icon={<StarBorderRoundedIcon></StarBorderRoundedIcon>} checkedIcon={<StarRoundedIcon></StarRoundedIcon>}

                            ></Checkbox>
                        </div>
                        <input id="title" type="text" className='p-1 resize-none rounded-md border-2
                    focus:border-slate-900 text-slate-600 font-semibold outline-0 ' value={Title} onChange={handleTitleChange} />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='description' className='font-semibold text-slate-700' >Description</label>

                        <textarea className='p-3 resize-none rounded-md border-2
                    focus:border-slate-900 text-slate-600 font-semibold outline-0 ' rows={4} value={Description} onChange={handleDescriptionChange} ></textarea>
                    </div>
                </div>
                <div className='flex flex-col p-2 m-2 justify-between' >
                    <button className=' py-2 px-4 box-border border-2 hover:text-white border-slate-700 w-full rounded-lg text-slate-700 font-semibold hover:scale-[1.02] hover:bg-slate-500 focus:cursor-wait transition-all'>

                        Edit Todo
                    </button>
                </div>

            </form>
        </div>
    </>
        , document.getElementById('modal')! as HTMLElement)
    )
}

export default EditTodo;