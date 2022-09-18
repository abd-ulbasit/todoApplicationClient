import React, { FC } from 'react'
import PropTypes from 'prop-types'
import Navbar from "./Navbar/Navbar"
const Wrapper: FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <>
            <Navbar></Navbar>
            <div>{children}</div>
        </>
    )
}


export default Wrapper