import React, { FC } from 'react'
type Props = {
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
const Todo: FC<Props> = ({ data: { title, description, _id, completed, archieved, isStarred, updatedOn } }) => {
    return (
        <div className='flex m-2 p-2 border border-black rounded-md shadow-sm shadow-slate-600 hover:scale-[1.01] transition-all time  hover:bg-slate-100' >

            <div className='p-2  col-span-1  grow' >
                <div className='text-lg font-semibold font-mono px-4' >{title}</div>
                <div className='text-slate-800' >{description}</div>
            </div>
            <div className='flex flex-col p-2 col-span-5 '>
                <button className='px-8 h-auto py-0 my-0 mr-4 border border-slate-900 rounded-xl font-medium hover:bg-slate-800 hover:text-white hover:scale-105 transition-all mb-2' >delete</button>
                <button className='px-8 h-auto py-0 my-0 mr-4 border border-slate-900 rounded-xl font-medium hover:bg-slate-800 hover:text-white hover:scale-105 transition-all'>edit</button>
            </div>
            <div>{completed}</div>
            <div>{archieved}</div>
            {/* <div>{updatedOn.toString()}</div> */}
            <div>{isStarred}</div>
        </div >
    )
}

export default Todo