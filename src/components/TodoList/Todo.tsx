import axios from 'axios'
import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EditTodo, { EdittedTodo } from '../EditTodo/EditTodo'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Checkbox } from '@mui/material'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
dayjs.extend(relativeTime);
type Props = {
    data: {
        title: string,
        description: string,
        _id: string,
        completed: boolean,
        archieved: boolean,
        updatedOn: Date,
        isStarred: boolean,
    },
    deleteTodo: (a: string) => void,

}
const Todo: FC<Props> = ({ deleteTodo, data: { title, description, _id, completed, archieved, isStarred, updatedOn } }) => {
    const [isEdit, setIsEdit] = React.useState(false);
    const [Title, setTitle] = useState(title);
    const [Description, setDescription] = useState(description);
    const [UpdatedOn, setUpdatedOn] = useState(updatedOn);
    const [IsStarred, setIsStarred] = useState(isStarred);
    const navigate = useNavigate();
    console.log()
    const handleDeleteTodo = () => {
        axios.delete(`http://localhost:5000/deletetodo/`, { data: { id: _id } }).then(res => {
            if (res.status === 204) {
                // console.log(res.data);
                // console.log("deleted");
                deleteTodo(_id);

            }
        }).catch(err => {
            console.log(err);
        })
    }
    const handleEditTodo = () => {
        setIsEdit(true);
        // navigate(`/edittodo/${_id}`)
        // createPortal(<EditTodo></EditTodo>, document.getElementById('modal')! as HTMLElement)
    }
    const handleStarredChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(IsStarred);
        setIsStarred((prev) => {
            // console.log(!prev);
            const body = {
                id: _id,
                fieldToUpdate: { isStarred: !prev, updatedOn: new Date() }
            }
            axios.patch('http://localhost:5000/updatetodo', body).then((res) => {
                if (res.status === 201) {
                    // console.log("updated");
                    // editTodo();
                } else {
                    console.log("server Error")
                    navigate('/servererror')
                }
            })
            return !prev
        })
    }
    const editTodo = (a: EdittedTodo) => {
        setTitle(a.title);
        setDescription(a.description);
        setIsStarred(a.isStarred);
        setUpdatedOn(a.updatedOn);
    }
    return (<>
        <div className='' >

            <div className='border p-2 m-2 float-left' >
                <Checkbox style={{ color: "slateblue" }}
                    onChange={handleStarredChanged}
                    checked={IsStarred}
                    icon={<StarBorderRoundedIcon></StarBorderRoundedIcon>} checkedIcon={<StarRoundedIcon></StarRoundedIcon>}

                ></Checkbox>
            </div>
            <div className='flex m-2 p-2 border border-black rounded-md shadow-sm shadow-slate-600 hover:scale-[1.01] transition-all time  hover:bg-slate-100' >
                <div className='p-2 pr-0 grow' >
                    <div className='flex justify-between '>
                        <div className='text-lg font-semibold font-mono px-3  border-red-500' >{Title}</div>
                        <div className='italic font-extralight text-xs w-35  border-pink-400' >Last Updated : {dayjs().to(dayjs(UpdatedOn))}</div>
                    </div>
                    <div className='text-slate-800' >{Description}</div>
                </div>
                <div className='flex flex-col p-2 col-span-5 justify-evenly'>
                    <button className='px-8 h-auto py-0 my-0 mr-4 border border-slate-900 rounded-xl font-medium hover:bg-slate-800 hover:text-white hover:scale-105 transition-all mb-2' onClick={handleDeleteTodo} >delete</button>
                    <button className='px-8 h-auto py-0 my-0 mr-4 border border-slate-900 rounded-xl font-medium hover:bg-slate-800 hover:text-white hover:scale-105 transition-all'
                        onClick={handleEditTodo}>edit</button>
                </div>
                {/* <div>{completed}</div>
            <div>{archieved}</div>
            {/* <div>{updatedOn.toString()}</div> */}
                {/* <div>{isStarred}</div> */}
                {
                    isEdit && <EditTodo setIsEdit={setIsEdit} editTodo={editTodo} data={{ title: Title, description: Description, _id, completed, archieved, isStarred: IsStarred, updatedOn: UpdatedOn }} ></EditTodo>
                }
            </div >
        </div>
    </>
    )
}
export default Todo
