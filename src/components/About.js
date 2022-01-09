import React, { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { HeaderSpace } from './Styles'



const About= () => {
    return (
        <>
            <Nav />
            <HeaderSpace />
            
            <h1>hello about!</h1>
            <Footer />
        </>
    )
}

export default About