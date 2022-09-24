import Archive from '@mui/icons-material/Archive'
import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const Navbar = () => {
    const navigate = useNavigate()
    const authCtx = useContext(AuthContext);
    const handleLogout = () => {
        authCtx.setUserName(null);
        localStorage.removeItem("username")
        navigate('/')
    }
    return (
        <div className='bg-slate-600 p-2 flex justify-between sticky top-0 ' >
            <div className='[&>*]:border [&>*]:border-black  flex gap-24 [&>*]:m-1 [&>*]:p-1 [&>*]:px-7 [&>*]:rounded-lg align-baseline' >

                <NavLink to="/" className={({ isActive }) =>
                    (isActive ? "hover:scale-105 transition-all bg-slate-800   text-white " : " hover:scale-105")

                } >TODOS</NavLink>
                <NavLink to="/addtodo" className={({ isActive }) =>
                    (isActive ? "hover:scale-105 transition-all bg-slate-800   text-white " : " hover:scale-105")
                }
                >Add a New Todo</NavLink>
            </div>
            <div className='flex  justify-between items-center ' >
                <NavLink to="/archivedtodos" className={({ isActive }) =>
                    (isActive ? "hover:scale-105 transition-all bg-slate-800   text-white rounded-md " : " hover:scale-105 rounded-md  border border-slate-800")
                }>
                    <div className='p-1 px-4 mx-4 ' >
                        <Archive></Archive>
                    </div>
                </NavLink>
                <button className='px-8 h-auto py-2 my-0 mx-4 border border-slate-900 rounded-xl font-medium hover:bg-slate-800 hover:text-white hover:scale-105 transition-all' onClick={handleLogout} >LogOut</button>
            </div>
        </div>
    )
}

export default Navbar