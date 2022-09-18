import React, { FC } from 'react'

const PasswordInput: FC = ({ }) => {
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const [password, setPassword] = React.useState('')
    return (
        <div className='w-100 mb-2'>
            <div>
                <label>Password</label>
            </div>
            <input type="password" minLength={5} value={password} className='p-1 rounded-md border-2 
                        tracking-widest
                    focus:border-emerald-700 text-slate-600 font-semibold outline-0' onChange={handlePasswordChange} />
        </div>
    )
}

export default PasswordInput