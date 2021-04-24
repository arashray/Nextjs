import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`

    *,
    *::before,
    *::after{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body{ 
        font-size: 1.6rem;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    @media only screen and (max-width: 600px) {
        html {
        font-size: 6px;
        }
    }

    @media only screen and (min-width: 600px) {
        html {
        font-size: 6px;
        }
    }

    @media only screen and (min-width: 768px) {
        html {
        font-size: 7px;
        }
    }

    @media only screen and (min-width: 992px) {
        html {
        font-size: 8px;
        }
    }

    @media only screen and (min-width: 1280px) {
        html {
        font-size: 9px;
        }
    }   
     @media only screen and (min-width: 1536px) {
        html {
        font-size: 10px;
        }
    }


`;
