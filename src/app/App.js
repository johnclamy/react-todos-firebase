import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { Wrapper } from '../assets/styles/Wrapper.styled'
import { Container } from '../assets/styles/Container.styled'
import GlobalStyles from '../assets/global';

export default function App() { 
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Container>
          <Main />
        </Container>
        <Footer />
      </Wrapper>
    </>
  );
}