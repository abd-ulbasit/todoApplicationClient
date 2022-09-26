import React, { FC, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from "./Navbar/Navbar";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Checkbox } from '@mui/material';
import { ThemeContext } from './Context/ThemeContext';
const Wrapper: FC<{ children: JSX.Element }> = ({ children }) => {
    const themeCtx = useContext(ThemeContext);

    const handleDarkMode = () => {
        themeCtx.setDark((prev) => !prev)
        console.log("Dark is ", themeCtx.dark);
    }
    return (
        <>
            <Navbar></Navbar>
            <div>{children}</div>
            <div className='fixed bottom-5 left-0 pl-5 rounded-r-full w-25 h-25 border border-slate-900 dark:bg-slate-200 z-30 p-1 bg-slate-500' >{<Checkbox style={{ color: `${themeCtx.dark ? "slateblue" : "white"}` }}
                onChange={handleDarkMode}
                size={'medium'}
                checked={themeCtx.dark!}
                icon={<LightModeIcon></LightModeIcon>}
                checkedIcon={<DarkModeIcon></DarkModeIcon>}

            ></Checkbox>}</div>
        </>
    )
}


export default Wrapper