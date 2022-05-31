import styled from 'styled-components'

// Global styled components

const Container = styled.section`
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;
  height: 100%;
`;

const Main = styled.main`
 width: 100%;
 min-height: calc(100vh - 6rem)
 margin-top: 6rem;
`

export {
  Container,
  Main,
}