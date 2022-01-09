import React from 'react'
import { Link } from 'react-router-dom'
import { NavStyle, Text, NavCover } from './Styles'

const NavLink = ({ title, link }) => (
    <div style={{ marginRight: '4rem' }}>
        <Link to={link}>
            <NavCover>
                <Text size='1.2rem'>{title}</Text>
            </NavCover>
        </Link> 
    </div>
)

const Nav = () => 
(
    <>
        <NavStyle>
            <Text bold size='2.2rem'>justin zhang 🚀</Text>
            <div style={{ display: 'flex' }}>
                <NavLink link='/' title='home' />
                <NavLink link='/about' title='about' />
                <NavLink link='/projects' title='projects' />
            </div>
        </NavStyle>
    </>
)

export default Nav