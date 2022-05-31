import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  align-items: center;
  font-family: "Lobster", cursive;
  font-weight: 700;
  font-size: 2.8rem;
  padding: 1rem;
  color: var(--third);
  height: 100%;
`;

const Logo = () => <Title>My Todos</Title>;

export default Logo;
