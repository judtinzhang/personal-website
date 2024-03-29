import React from 'react'

import JustinArt from '../public/justin_art.svg';
import Nav from './components/Nav'
import Footer from './components/Footer'

import {
    Text,
    HeaderSpace,
    Card,
    Row,
    HyperLink,
    Anchor,
    ConnectTabs,
    Main,
} from './components/Styles'

const App = () => {

    const ConnectionBar = ({ href, iClass, text}) => (
        <>
            <Anchor href={href} target="_blank">
                <ConnectTabs>
                    <i className={iClass} style={{ width: '2.6rem'}}/>
                    <Text>{text}</Text>
                </ConnectTabs>
            </Anchor>
        </>
    )

    return (
        <>
            <Nav />
            <HeaderSpace />
            <Main>
                <Row>
                    <div>
                        <Card>
                            <Text bold size='3rem'>
                                Hey there, I'm Justin 👋
                            </Text>
                            <Text>
                                I am a current junior at the <HyperLink href="https://www.upenn.edu/" target="_blank">University of Pennsylvania</HyperLink> studying Computer Science.
                            </Text>
                            <Text>
                                Recently, I have been dabbling in product development and so far it has been an amazing experience. 😃
                            </Text>
                            <Text>
                                When I'm not working, you can find me for-fun coding, watching movies, or playing games with friends!
                            </Text>
                            <Text>
                                Also, just to clarify, some people call me Judtin because of a fat-finger fiasco that happened during my sophomore year of high school.
                                The nickname has stuck and seems to have no intention of stopping... 😅
                            </Text>
                        </Card>
                        <Card>
                            <Text bold size='2rem'>
                                Let's Connect! 😎
                            </Text>
                            <Text>
                                Please feel free to reach out! I am available via any of the following:
                            </Text>
                            <ConnectionBar
                                href='mailto: judtin@seas.upenn.edu'
                                iClass="fas fa-envelope fa-2x"
                                text='judtin@seas.upenn.edu'
                            />
                            <ConnectionBar
                                href='https://github.com/judtinzhang'
                                iClass="fab fa-github fa-2x"
                                text='judtinzhang'
                            />
                            <ConnectionBar
                                href='https://www.linkedin.com/in/justin-a-zhang/'
                                iClass="fab fa-linkedin-in fa-2x"
                                text='justin-a-zhang'
                            />
                        </Card>
                    </div>
                    <img src={JustinArt} alt="Justin Zhang" width="53%" height="auto" style={{display: 'block', margin: 'auto'}} />
                </Row>
            </Main>
            <Footer />
        </>
    )
}
export default App