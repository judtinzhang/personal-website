import React, { useState, useEffect } from 'react'
import ProjectJSON from '../../public/projects.json'

import Nav from './Nav'
import Footer from './Footer'
import { HeaderSpace, Text, ProjCardWrapper, ProjAnchor, Main } from './Styles'

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
        <ProjCardWrapper mw='270px'>
            <ProjAnchor href={link} target='_blank'>
                <div style={{ padding: '1.5rem'}}>
                    <Text bold size='1.4rem' lh='0'>{title}</Text>
                    <Text>🛠 {tech}</Text>
                    <img src={image} alt={title} width="270px" height="150px" style={{display: 'block', margin: 'auto', flexBasis: '90%'}} />
                    <div style={{ display: 'flex', marginTop: '10px' }}>
                        <Text>📔</Text>
                        <Text lh='1.5'>{description}</Text>
                    </div> 
                </div>
            </ProjAnchor>     
        </ProjCardWrapper>
    )

    return (
        <>
            <Nav />
            <HeaderSpace />
            <Main>
                <Text bold size='3rem' style={{ textAlign: 'center'}}>projects 👨🏻‍💻</Text>
                <div style={{ textAlign: 'center'}}>
                    {projectList.map(project => (
                        <ProjCard key={project.id} link={project.link} title={project.title} image={project.image} tech={project.tech} description={project.description} />
                    ))}
                </div>
            </Main>  
            <Footer />  
        </>
    )
}

export default Projects