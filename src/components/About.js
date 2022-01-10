import React, { useState } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { HeaderSpace, Main, Text, Row } from './Styles'



const About= () => {
    return (
        <>
            <Nav />
            <HeaderSpace />
            <Main>
                <Row>
                <Text bold size='3rem' style={{ textAlign: 'center'}}>projects 👨🏻‍💻</Text>
                </Row>
                <div style={{ textAlign: 'center'}}>
                    hi
                    </div>
                
            </Main>
            <Footer />
        </>
    )
}

export default About