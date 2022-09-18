import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-slate-600 p-2 flex justify-between sticky' >
            <div className='[&>*]:border [&>*]:border-black  flex gap-24 [&>*]:m-1 [&>*]:p-1 [&>*]:px-7 [&>*]:rounded-lg align-baseline' >

                <NavLink to="/h" className={({ isActive }) =>
                    (isActive ? "hover:scale-105 transition-all bg-slate-800   text-white " : " hover:scale-105")

                } >TODOS</NavLink>
                <NavLink to="/g" className={({ isActive }) =>
                    (isActive ? "hover:scale-105 transition-all bg-slate-800   text-white " : " hover:scale-105")
                }
                >Add a New Todo</NavLink>
            </div>
            <button className='px-8 h-auto py-0 my-0 mr-4 border border-slate-900 rounded-xl font-medium hover:bg-slate-800 hover:text-white hover:scale-105 transition-all' >LogOut</button>
        </div>
    )
}

export default Navbar