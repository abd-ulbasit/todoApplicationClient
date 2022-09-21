import React from 'react'
import NewTodoForm from './NewTodoForm'

const AddTodo = () => {
    return (
        <div className='bg-slate-200 flex justify-center items-center  font-black fixed h-screen w-screen pb-24   ' >

            <NewTodoForm></NewTodoForm>
        </div>
    )

}

export default AddTodo