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


const SkillStytled= styled.section``;