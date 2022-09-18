import React from 'react'
import { TextField } from '@mui/material'
const LogInForm = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [hasAccount, setHasAccount] = React.useState(false);
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }
    const handleformsubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log(username, password)
    }
    const handleHasAccount: React.MouseEventHandler<HTMLButtonElement> = () => {
        setHasAccount((prev) => !prev)
    }
    return (
        <div className='bg-slate-400 p-8 rounded-xl shadow-2xl' >
            <form onSubmit={handleformsubmit} >

                <div className='text-3xl text-black font-semibold  text-center'>{hasAccount ? "Sign In" : "Sign Up"}</div>
                <div className='mt-4'>
                    <div className='w-100'>
                        <div>

                            <label className='mb-6'>UserName</label>
                        </div>
                        <input type="text" className='p-1 rounded-md border-2
                    focus:border-emerald-700 text-slate-600 font-semibold outline-0'value={username} minLength={5} onChange={handleUsernameChange} />
                    </div>
                    <div className='w-100 mb-2'>
                        <div>
                            <label>Password</label>
                        </div>
                        <input type="password" minLength={5} value={password} className='p-1 rounded-md border-2 
                        tracking-widest
                    focus:border-emerald-700 text-slate-600 font-semibold outline-0' onChange={handlePasswordChange} />
                    </div>
                </div>
                <button className='p-2 box-border border-2 hover:text-white border-slate-700 w-full rounded-lg text-slate-700 font-semibold hover:scale-[1.02] hover:bg-slate-500 focus:cursor-wait transition-all'>{hasAccount ? "LogIn" : "SignUp"}</button>
            </form>
            <div className='text-sm' >{hasAccount ? "Don't have an Account? " : "Already have an account? "}<button className='text-lg underline underline-offset-2 pt-1 hover:text-blue-800' onClick={handleHasAccount} >{hasAccount ? "Sign Up " : "Sign In"}</button> </div>
        </div>
    )
}

export default LogInForm