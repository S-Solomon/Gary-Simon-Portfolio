import React from 'react'
import styled from 'styled-components'
import projectData from '../data/projectData'

const Projects = () => {
    return (
        <ProjectStyled>
            {
                projectData.map((data => (
                    <div className="project-container transition3" key={data.id}>
                        <div className="project-left">
                            <div className="inner">
                                <p className="subtitle">{data.subtitle}</p>
                                <p className="featured-title">{data.title}</p>
                                <p className="featured-desc">{data.para}</p>
                            </div>
                        </div>
                        <a href="youtube.com">
                            <img src={data.img} alt="Fretastic" />
                        </a>
                    </div>
                )))
            }
        </ProjectStyled>
    )
}

export default Projects


const ProjectStyled = styled.section``;