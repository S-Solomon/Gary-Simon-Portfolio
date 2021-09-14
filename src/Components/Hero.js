import React from 'react'
import styled from 'styled-components'

const Hero = () => {
    return (
        <HeroStyled>
            <div className="content">
                <h1>Beautifully Crafted Web Experiences</h1>
                <div className="meet">
                    <span>👇</span>
                    <p>Meet Gary Simon</p>
                </div>
                <svg className="scroll" xmlns="http://www.w3.org/2000/svg" width="40" height="77" viewBox="0 0 40 77">
                    <g id="scroll" transform="translate(-253 -787)">
                        <g id="Rectangle_12" data-name="Rectangle 12" transform="translate(253 787)" fill="none" stroke="#fff" strokeWidth="4">
                            <rect width="40" height="77" rx="20" stroke="none"/>
                            <rect x="2" y="2" width="36" height="73" rx="18" fill="none"/>
                        </g>
                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="11" cy="11" r="11" transform="translate(262 798)" fill="#fff"/>
                    </g>
                </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="686" height="688" viewBox="0 0 686 688" className="hero-design">
                <g id="blockdesign" transform="translate(-935 -289)">
                    <rect id="Rectangle_2" data-name="Rectangle 2" width="172" height="172" rx="19" transform="translate(1277 289)" fill="#6e00ff"/>
                    <rect id="Rectangle_10" data-name="Rectangle 10" width="172" height="172" rx="86" transform="translate(1277 461)" fill="#ff64cb"/>
                    <rect id="Rectangle_8" data-name="Rectangle 8" width="172" height="172" rx="19" transform="translate(1449 461)" fill="#e5d5fa"/>
                    <rect id="Rectangle_5" data-name="Rectangle 5" width="172" height="172" rx="19" transform="translate(1277 633)" fill="#6e00ff"/>
                    <rect id="Rectangle_3" data-name="Rectangle 3" width="172" height="172" rx="19" transform="translate(1107 461)" fill="#fff"/>
                    <rect id="Rectangle_9" data-name="Rectangle 9" width="172" height="172" rx="86" transform="translate(1107 633)" fill="#00f7ff"/>
                    <rect id="Rectangle_7" data-name="Rectangle 7" width="172" height="172" rx="19" transform="translate(935 633)" fill="#fff" opacity="0.17"/>
                    <rect id="Rectangle_4" data-name="Rectangle 4" width="172" height="172" rx="19" transform="translate(1107 805)" fill="#fff"/>
                </g>
            </svg>

        </HeroStyled>
    )
}

export default Hero


const HeroStyled = styled.div`
    background: #6E00FF;
    color: white;
    display: grid;
    text-align: center;
    padding: 4em;

    .content {
        .meet {
            display: flex;
            margin: 0 auto;
            width: 200px;
            font-weight: bold;
            color: #FF64CB;
            margin-top: 1.5rem;
            span {
                padding-right: 1rem;
            }
        }
        .scroll {
            width: 30px;
            margin-top: 1.5rem ;
        }
    }

    .hero-design {
        display: none;
    }

    @media(min-width: 1050px) {
        height: 90vh;
        grid-template-columns: 66% auto;
        background: unset;
        padding: 0;
        .content {
            background: #6E00FF;
            padding: 6em 8em 6em 4em;
            text-align: left;
            @media(min-width: 1250px) {
                padding: 6em 8em 6em 10em;
            }
            @media(min-width: 1550px) {
                padding: 9em 20em 6em 20em;
            }
            h1 {
                font-size: 3rem;
                line-height: 1.2em;
                max-width: 450px;
            }
            .meet {
                margin: unset;
                padding-top: 1.5rem;
            }
        }
        .hero-design {
            display: unset;
            margin-left: -50%;
            margin-top: 15%;
            width: 100%;
        }
    }
`;