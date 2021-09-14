import React from 'react'
import styled from 'styled-components'
import servicesData from '../data/servicesData'

const Skills = () => {
    return (
        <SkillStytled>
            {
                servicesData.map(data => (
                    <div className="skillsContainer" key={data.id}>
                        <ul>
                            <li className="transition2">
                                <div className="iconContainer one">
                                    <img src={data.img} alt={data.title} />
                                </div>
                                <p className="skill-title">{data.title}</p>
                                <p className="featured-desc skill-desc">{data.text}</p>
                            </li>
                        </ul>
                    </div>
                ))
            }
        </SkillStytled>
    )
}

export default Skills


const SkillStytled= styled.section`
    background: #FF64CB;
    .skillsContainer {
        &:first-child {
            img {
                width: 50px;
            }
            .skill-title {
                padding: 1rem 0 .5;
            }
        }
        &:nth-child(2) {
            img {
                width: 140px;
            }
        }
        &:nth-child(3) {
            img {
                width: 60px;
            }
        }
        ul {
            li {
                background: white;
                padding: 2em;
                border-radius: 1em;
                margin-bottom: 1em;
                .iconContainer {
                    height: 100px;
                    display: grid;
                    place-content: center;
                    margin: 0 auto;
                }
                .skill-title {
                    font-weight: bold;
                }
            }
        }
    }
`;