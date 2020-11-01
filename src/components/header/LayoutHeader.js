import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
const LayoutHeader = ({children}) => {
    return(
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}

export default LayoutHeader