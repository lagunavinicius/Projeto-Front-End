import styled from 'styled-components'

const Container = styled.section`
  background-size: cover;
  background: #212A3E url("https://cdn.discordapp.com/attachments/862792054877454336/1108183447190646794/image.png") no-repeat center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  justify-content: space-evenly;
  width: 100vw;
  flex-direction: column;
  /* overflow: hidden; */
`
const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 0.3125em;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`


const DashboardContainer = styled.div`
  //padding: 0 0.5rem;
  background-size: cover;
  background: #212A3E url("https://cdn.discordapp.com/attachments/862792054877454336/1108183447190646794/image.png") no-repeat center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`


export { Container, Main, Title, Description, CodeTag, DashboardContainer }
