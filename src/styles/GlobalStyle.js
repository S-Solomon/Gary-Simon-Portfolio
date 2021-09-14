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
    }
`;


export default GlobalStyle