import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    body {
        height: 100vh;
        font-family: 'poppins', sans-serif;
    }

    a {
        text-decoration: none;
    }

    p {
        line-height: 1.9;
        letter-spacing: 1.1px;
    }

    img {
        width: 100%;
    }

    section {
        padding: 4em 2em;
        text-align: center;
        @media(min-width: 1050px) {
            padding: 4rem;
        }
        @media(min-width: 1250px) {
            padding: 10em 10em 4em 10em;
        }
        @media(min-width: 1550px) {
            padding: 6em 20em 4em 20em;
        }
    }

    // Animations
    @keyframes circleAnim {
        from {
            transform: translate(262px, 798px);
            z-index: 5;
        }
        to {
            transform: translate(262px, 830px);
        }
    }
`;


export default GlobalStyle