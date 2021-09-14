import React from 'react'
import styled from 'styled-components'
import project1 from '../images/project-1.png'

const Featured = () => {
    return (
        <FeaturedStyled>
            <div className="left">
                <div className="inner transition2">
                    <p className="subtitle">Featured Project</p>
                    <a className="featured-title" href="/">Designcourse.com Redesign</a>

                    <p className="featured-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestiae, soluta autem nemo quae delectus quas? Excepturi
                    </p>
                </div>
            </div>
            <img className="right transition2" src={project1} alt="featured project" />
        </FeaturedStyled>
    )
}

export default Featured


const FeaturedStyled = styled.section`
    position: relative;
    &::before {
        content: '';
        position: absolute;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: #E5D5FA;
        top: 0;
        left: 0;
        z-index: -1;
    }
    .subtitle {
        text-transform: uppercase;
        font-weight: bold;
        color: #6E00FF;
        letter-spacing: .2em;
        font-size: .85em;
    }
    .featured-title {
        color: black;
        font-weight: bold;
        font-size: 1.3em;
        margin-top: .4em;
        display: block;
    }
    .featured-desc {
        color: #252525;
        font-size: .9em;
        line-height: 1.8em;
        font-weight: 500;
        padding: 1.5rem 0;
    }
`;