import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Title = styled.div`
  display: flex;
  align-items: center;
  font-family: "Lobster", cursive;
  font-weight: 700;
  color: var(--third);
  cursor: pointer;
  font-size: 2.8rem;
  padding: 1rem;
  height: 100%;
`;

const Logo = () => {
  const history = useHistory()

  return <Title onClick={() => history.push('/')}>My Todos</Title>;
}

export default Logo;
