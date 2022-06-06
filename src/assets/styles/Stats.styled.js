import styled from 'styled-components'

export const StyledStats = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
  text-align: center;

  p {
    text-transform: capitalize;
    color: ${(props) => props.theme.text.light};

    span {
      border-radius: 50%;
      border: 2px solid ${props => props.theme.border.dark};
      color: ${props => props.theme.text.dark};
      background-color: ${props => props.theme.bg.light};
      margin-left: 1rem;
      padding: 1px 8px;

    }
  }
`;