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


const FeaturedStyled = styled.section``;