/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    @font-face {
        font-family: 'fontello';
        src: url('/fonts/fontello.eot?acca7606');
        src: url('/fonts/fontello.eot?acca7606#iefix') format('embedded-opentype'),
        url('/fonts/fontello.ttf?acca7606') format('truetype'),
        url('/fonts/fontello.woff?acca7606') format('woff'),
        url('/fonts/fontello.svg?acca7606#fontello') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5% // makes 1rem ===  10px (HAPPY REMS)
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem; // we set default font size value to the 16px as it was;
        margin: 0;
    }

    a, button {
        font-family: 'Montserrat', sans-serif;
    }

    .ff {
        font-family: 'fontello' !important;
        color: black;
        display: inline-block;
        font-style: normal;
    }

    p {
        margin: 0;
    }
`

export default GlobalStyle
