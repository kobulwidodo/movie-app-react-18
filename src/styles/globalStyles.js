import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #F9F9F9;
        min-height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .disabled-link {
        pointer-events: none;
        opacity: .65;
    }
    .btn:focus,.btn:active {
        outline: 0 !important;
    }
    .player {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

export default GlobalStyle;
