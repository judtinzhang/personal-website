import React from 'react'
 
import Nav from './components/Nav'
import { Text, HeaderSpace, Card, Column, HyperLink, Anchor } from './components/Styles'

const App = () => {
    return (
        <>
            <Nav />
            <HeaderSpace />
            <Card>
                <Text bold size='3rem'>
                    Hey there, I'm Justin 👋
                </Text>
                <Text>
                    I am a current sophomore at the <HyperLink href="https://www.upenn.edu/" target="_blank">University of Pennsylvania</HyperLink> studying Computer Science and Economics.
                </Text>
                <Text>
                    Recently, I have been dabbling in product development and have enjoyed every minute of it. 😃 
                </Text>
                <Text>
                    When I'm not working, you can find me for-fun coding, watching movies, or playing games with friends!
                </Text>
                <Text>
                    Also, just to clarify, some people call me Judtin because of a fat-finger fiasco that happened my sophomore year of high school.
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

                {/* work on this! */}
                <i class="fas fa-envelope fa-2x"></i> judtin@seas.upenn.edu
                <Anchor href="https://www.linkedin.com/in/justin-a-zhang/" target="_blank">
                <i class="fab fa-github fa-2x" /> GitHub
                </Anchor>
                <Anchor href="https://www.linkedin.com/in/justin-a-zhang/" target="_blank">
                    <i class="fab fa-linkedin-in fa-2x" /> LinkedIn
                </Anchor>
            </Card>
        </>
    )
}
export default App