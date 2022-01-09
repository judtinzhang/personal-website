import React, { useState, useEffect } from 'react'
import ProjectJSON from '../../public/projects.json'

import Nav from './Nav'
import { HeaderSpace, Text, ProjCardWrapper, ProjAnchor } from './Styles'

const Projects = () => {

    const [projectList, setProjectList] = useState([])

    useEffect(() => {
        const json_projects = []
        ProjectJSON.forEach((entry) => {
            json_projects.push(entry)
        })
        setProjectList(json_projects.reverse())
    }, [])

    const ProjCard = ({ title, tech, image, description, link }) => (
        <ProjAnchor href={link} target='_blank'>
            <ProjCardWrapper mw='270px'>
                <Text bold size='1.5rem' lh='0'>{title}</Text>
                <Text>🛠 {tech}</Text>
                <img src={image} alt={title} width="270px" height="200px" style={{display: 'block', margin: 'auto', flexBasis: '90%'}} />
                <div style={{ display: 'flex' }}>
                    <Text>📔</Text>
                    <Text lh='1.5'>{description}</Text>
                </div>         
            </ProjCardWrapper>
         </ProjAnchor>
       
    )

    return (
        <>
            <Nav />
            <HeaderSpace />
            <Text bold size='3rem' style={{ textAlign: 'center'}}>projects 👨🏻‍💻</Text>
            {projectList.map(project => (
                <ProjCard key={project.id} link={project.link} title={project.title} image={project.image} tech={project.tech} description={project.description} />
            ))}            
        </>
    )
}

export default Projects