import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  p {
    margin: 0;
  }

  :root {
        font-size: 100%;
        
    }

    @media screen and (min-width: 3072px) {
        :root {
            font-size: 215%;
        }
    }
    @media screen and (min-width: 2560px) and (max-width: 3071px){
        :root {
            font-size: 165%;
        }
    }

    @media screen and (min-width: 1920px) and (max-width: 1559px) {
        :root {
            font-size: 125%;
        }
    }
    @media screen and (min-width: 1280px) and (max-width: 1600px) {
        :root {
            font-size:95%;
        }
    }

    @media screen and (min-width: 1024px) and (max-width: 1280px) {
        :root {
            font-size: 75%;
        }
    }
    @media screen and (min-width: 800px) and (max-width: 1024px) {
        :root {
            font-size: 65%;
        }
    }

    @media screen and (min-width: 500px) and (max-width: 800px) {
        :root {
            font-size: 45%;
        }
    }
  

`

export default GlobalStyle
