import React from 'react'
import JustinMemoji from '../../public/justin_memoji.svg';
import Penn from '../../public/upennsheild.svg';

import Nav from './Nav'
import Footer from './Footer'
import { HeaderSpace, Main, Text, Row, AboutDiv, HyperLink } from './Styles'

const About= () => {
    
    return (
        <>
            <Nav />
            <HeaderSpace />
            <Main>
                <Row jc='center'>
                    <AboutDiv>
                            <Text bold size='4.2rem'>about me  🤠</Text>
                            <Text size='1.2rem'>
                                Long story short...
                            </Text>
                            <Text size='1.2rem'>
                                My favorite superhero is Batman, I use a MacBook Pro, and I think penguins are amazing animals 🐧. 
                            </Text>
                            <Text size='1.2rem'>
                                I am from Holmdel, NJ, and now in Philly for college. 
                            </Text>
                            <Text size='1.2rem'>
                                This summer, I will head off to New York City to join <HyperLink href="https://www.mongodb.com/" target="_blank">MongoDB</HyperLink> as a 2022 Software Engineer Intern 💻!
                            </Text>                        
                    </AboutDiv>
                    <div style={{ margin: '50px'}}>
                        <img src={JustinMemoji} alt="Justin Zhang" width="120%" height="auto" style={{display: 'block', margin: 'auto'}} />
                    </div>  
                </Row>
                <Row jc='space-around' style={{marginTop: "200px"}}>
                    <AboutDiv mw='50rem'>
                        <Text bold size='3.5rem'>me and penn 🤡</Text>
                        <Text  size='1.2rem'>
                            Barring virtual classes and faulty Zoom links, I've had a great time in college! 
                        </Text>
                        <Text  size='1.2rem'>
                            Right now, I am a Backend Engineer for <HyperLink href="https://pennlabs.org/" target="_blank">Penn Labs</HyperLink>, a product development club. 
                            I am also a CIS121 TA, which is the university's Data Structures and Algorithms course.
                        </Text>
                        <Text size='1.2rem'>
                            Last year, I had the opportunity to join the Wharton VIP-X program, which is a selective entreprenuerial accelerator program at Penn. There,
                            my friends and I grew our non-profit healthcare startup with the help of advisors, entreprenurial talks, and seed-funding. 
                            For more info about this, check out <HyperLink href="https://www.altruifoundation.org/rx" target="_blank">Altrui Rx</HyperLink>!
                        </Text>
                        <Text size='1.2rem'>
                            College has opened my eyes to fields I never thought I would study. Coursewise, I was exposed to the likes of philosophy, capitalism, human computation,
                            and even design principles! From my theory-based coursework to my application-heavy extracirriculars, I am so fortunate to be able to learn from
                            multiple fields and gain friends along the way 😃.
                        </Text>      
                    </AboutDiv>
                    <img src={Penn} alt="UPenn" width="18%" height="auto" style={{display: 'block', margin: '0'}} />
                </Row>
                <Row jc='space-around'>
                    <AboutDiv mw='50rem'>
                        <Text bold size='3.5rem'>technologies 📱</Text>
                        <Text size='1.2rem'>
                            I thought it would be more legible if I just listed them 😅. Each category is ordered by level of understanding (I am most experienced with the left-most item).
                        </Text>
                        <Text size='1.2rem'>
                            <b>Languages:</b> Python, Java, JavaScript, C, C++
                        </Text>
                        <Text size='1.2rem'>
                            <b>Frameworks:</b> Django, Flask, React, Express, Next, Numpy, Pandas, Redux
                        </Text>
                        <Text size='1.2rem'>
                            <b>Software Services:</b> AWS (EC2, S3, ECS, ECR, RDS), Git, Postman, MongoDB, Amazon MTurk, Figma, Docker
                        </Text>
                    </AboutDiv>
                    <img src={Penn} alt="UPenn" width="18%" height="auto" style={{display: 'block', margin: '0'}} />
                </Row>
                <Row jc='space-around'>
                    <AboutDiv mw='50rem'>
                        <Text bold size='3.5rem'>for fun 🥳</Text>
                        <Text size='1.2rem'>
                            On campus, I really enjoy going out and trying new restuarants. Fun fact: my favorite food is pizza 🍕!
                        </Text>
                        <Text size='1.2rem'>
                            Recently, I have gotten into watching food videos, such as Ramsay in 10, fried chicken sandwich reviews, and Mikey Chen vlogs.
                        </Text>
                        <Text size='1.2rem'>
                            Other than that, I like hanging out with my friends, whether that be going on walks, driving around,
                            playing board games, or teaming up on League of Legends!
                        </Text>
                        <Text size='1.2rem'>
                            I am also really big into movies and TV shows. I also listen to Spotify for at least 90 minutes a day 🎵.
                        </Text>
                    </AboutDiv>
                    <img src={Penn} alt="UPenn" width="18%" height="auto" style={{display: 'block', margin: '0'}} />
                </Row>
            </Main>
            <Footer />
        </>
    )
}


/*


Movies and TV Shows
Music

*/


export default About