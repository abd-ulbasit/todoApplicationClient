import Archive from '@mui/icons-material/Archive'
import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddIcon from '@mui/icons-material/Add';
import Add from '@mui/icons-material/Add';
const Navbar = () => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const handleLogout = () => {
        authCtx.setUserName(null);
        localStorage.removeItem("username")
        navigate('/')
    }
    return (
        <div className='bg-slate-600 p-2 flex justify-between sticky top-0 z-50' >
            <div className='[&>*]:border [&>*]:border-black  flex gap-4 [&>*]:m-1 [&>*]:p-1 [&>*]:rounded-lg align-baseline  [&>*]' >

                <NavLink to="/" className={({ isActive }) =>
                    (isActive ? "hover:scale-105 transition-all bg-slate-800   text-white g-3" : " hover:scale-105")

                } >
                    <div className='flex px-2 sm:px-4 justify-evenly align-middle items-center [&>*]:mx-2' >

                        <div>{<FormatListBulletedIcon></FormatListBulletedIcon>}</div>
                        <div className='hidden sm:block' > Todos</div>
                    </div>
                </NavLink>
                <NavLink to="/addtodo" className={({ isActive }) =>
                    (isActive ? "hover:scale-105 transition-all bg-slate-800   text-white " : " hover:scale-105")
                }
                >
                    <div className='flex px-2 sm:px-4 justify-evenly align-middle items-center [&>*]:mx-0' >

                        <div className=' sm:pr-3'>{<Add></Add>}</div>
                        <div className='hidden sm:block ml-2' > Add New Todo</div>
                    </div>

                </NavLink>
            </div>
            <div className='flex  justify-between items-center ' >
                <NavLink to="/archivedtodos" className={({ isActive }) =>
                    (isActive ? "hover:scale-105 transition-all bg-slate-800   text-white rounded-md hover:text-white hover:bg-slate-800" : " hover:scale-105 rounded-md  border border-slate-800 hover:bg-slate-800 hover:text-white ")
                }>
                    <div className='p-1 px-4 mx-2 sm:mx-4 ' >
                        <Archive></Archive>
                    </div>
                </NavLink>
                <button className='px-4 sm:px-6 h-auto py-1 my-0 mx-4 border border-slate-900 rounded-md font-medium hover:bg-slate-800 hover:text-white hover:scale-105 transition-all' onClick={handleLogout} >LogOut</button>
            </div>
        </div>
    )
}

export default Navbar