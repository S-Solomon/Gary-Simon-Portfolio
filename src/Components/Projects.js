import React from 'react'
import styled from 'styled-components'
import projectData from '../data/projectData'

const Projects = () => {
    return (
        <ProjectStyled>
            {
                projectData.map((data => (
                    <div className="projectContainer transition3" key={data.id}>
                        <div className="projectLeft">
                            <div className="inner">
                                <p className="subtitle">{data.subtitle}</p>
                                <p className="title">{data.title}</p>
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


const ProjectStyled = styled.section`
    background: #F7F7F7;
    .projectContainer {
        margin-bottom: 4rem;
        .projectLeft {
            .inner{
                .subtitle {
                    color: #6E00FF;
                    text-transform: uppercase;
                    font-weight: bold;
                    font-size: 0.85rem;
                }
                .title {
                    font-weight: bold;
                    font-size: 1.3em;
                }
            }
        }
        a {
            img {
                border-radius: 1em;
                margin-top: 1rem;
            }
        }
    }
    @media (min-width: 800px) {
        .projectContainer {
            display: grid;
            text-align: left;
            grid-template-columns: 40% auto;
            padding-top: 2rem;
            .projectLeft {
                display: grid;
                place-content: center;
            }
            a {
                img {
                    margin-left: 2rem;
                    float: right;
                    max-width: 500px;
                }
            }
        }
        
    }

`;