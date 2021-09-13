import React from 'react'
import styled from 'styled-components'
import dribble from '../images/dribbble.png'
import behance from '../images/behance.png'
import twitter from '../images/twitter.png'

const Navbar = () => {
    return (
        <NavbarStyled>
            <header>
                <a className="logo" href="/">Gary Simon</a>
                <nav>
                    <ul>
                        <li><a href="/">My work</a></li>
                        <li><a href="/">My skills</a></li>
                        <li><a href="/">Hire me</a></li>
                    </ul>
                </nav>
            </header>
            <ContainerStyled className="social">
                <ul>
                    <li><a href="dribble.com"><img src={dribble} alt="dribbble" /></a></li>
                    <li><a href="behance.com"><img src={behance} alt="behance" /></a></li>
                    <li><a href="twitter.com"><img src={twitter} alt="twitter" /></a></li>
                </ul>
            </ContainerStyled>
        </NavbarStyled>
    )
}

export default Navbar



const NavbarStyled = styled.div`
    background: #6700EE;
    a {
        color: white;
    }
    header {
        display: flex;
        justify-content: space-between;
        padding: 2em;
        .logo {
            color: #00F7FF;
            font-weight: bold;
        }
        ul {
            display: flex;
        a {
            display: block;
            padding: 0 1em;
        }
    }
}
`;

const ContainerStyled = styled.div`
    display: none;
`;