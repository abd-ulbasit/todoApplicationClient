import React from 'react'

const UserNameInput = () => {

    const [username, setUsername] = React.useState('')
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }


    return (
        <div className='w-100'>
            <div>

                <label className='mb-6'>UserName</label>
            </div>
            <input type="text" className='p-1 rounded-md border-2
                    focus:border-emerald-700 text-slate-600 font-semibold outline-0'value={username} minLength={5} onChange={handleUsernameChange} />
        </div>
    )
}

export default UserNameInput