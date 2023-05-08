import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after {
    margin:0;
    padding: 0;
    box-sizing:border-box;
}

body {
    color:#000;
    font-size:16px;
}

a {
    text-decoration: none;
    color:inherit;
}

`;
