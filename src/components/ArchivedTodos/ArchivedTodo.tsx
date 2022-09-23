import { DeleteForever, Unarchive } from '@mui/icons-material'
import React, { FC, useState } from 'react'
import { Todo } from '../../types/Types'
type Props = {
    todo: Todo,
    deleteForever: (id: string) => void,
    unarchive: (id: string) => void,
}
const ArchivedTodo: FC<Props> = ({ deleteForever, unarchive, todo: { username, _id, title, description, isArchived, isStarred, isCompleted, updatedOn } }) => {
    console.log(isArchived)
    // const [Archived,setArchived]=useState<boolean>(isArchived)
    const HandleDeleteForever = (e: React.MouseEvent<HTMLElement>) => {
        deleteForever(_id)
    }
    const handleUnarchive = (e: React.MouseEvent<HTMLElement>) => {
        // isArchived = false;
        console.log(_id);
        unarchive(_id)
    }
    return (
        <div className='border flex flex-row  hover:scale-[1.01] rounded-md h-12 align-middle' >

            <button className='border h-auto  bg-slate-600 px-2 hover:bg-slate-700 rounded-md' onClick={HandleDeleteForever} ><DeleteForever></DeleteForever></button>
            <div className='flex-grow p-2 text-slate-700 font-light text-sm [&:not(first-line)]:truncate h-16' >{title ? title : description}</div>
            <button className='border h-auto px-2 bg-slate-600 hover:bg-slate-700 rounded-md' onClick={handleUnarchive} ><Unarchive></Unarchive></button>


        </div>
    )
}

export default ArchivedTodo