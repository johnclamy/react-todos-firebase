import styled from 'styled-components'

export const Alert = styled.div`
  max-width: 580px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  border: 2px solid ${(props) => props.theme.border.grey};
  border-radius: 3px;
  background-color: ${(props) => props.theme.bg.light};

  p {
    font-weight: 700;
    font-size: 1.2rem;
    color: ${(props) => props.theme.text.light};
  }
`;