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
                {/* <Text bold size='3rem' style={{ textAlign: 'center'}}>projects 👨🏻‍💻</Text> */}
                </Row>
                <div style={{ textAlign: 'center'}}>
                    hi
                    </div>
                
            </Main>
            <Footer />
        </>
    )
}


/*

About Me:
Time to break down that collage from before!

I'm from Holmdel, NJ, now in Philly for college 
I think Penguins are great
Software Engineer Intern at MongoDB

Penn:
Penn Labs
CIS121 TA
Wharton VIP-X
Had the opportunity to take some for fun courses 
like design, philosophy, capitalism, human computation
theory based coursework mixed with application-heavy extracirriculars

Technology:
Java Python (Django, Flask, Pandas, Numpy), Javascript (React, Redux, Next, Express) C
MongoDB, PostgreSQL, SQLite and many ORM's (Django, SQLAcademy) 

Worked in devops AWS suite and CI/CD for research, little bit of containerization Docker & cloud infrastructure
Product development and agile

Git, Postman, Figma


For-Fun:
Going out to try out food (my favorite food is pizza)
Watching food reviews (Gordan ramsay dishes in 10, friend chicken sandwich review, popeyes, and mikey chen)
Driving around with friends
board games 
League of Legends
Movies and TV Shows
Music

*/


export default About