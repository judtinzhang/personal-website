import React from 'react'
import { Row, Text, Foot, HyperLink } from './Styles'

const Footer = () => (
    <>
        <Foot>
            <Row jc='center'>
                <Text>
                    built with <HyperLink href='https://reactjs.org/' target='_blank'>react</HyperLink> by justin zhang 🚀 © 2022
                </Text>
            </Row>
        </Foot>
    </>
)

export default Footer