import styled from 'styled-components'

const StyledStats = styled.span`
  display: flex;
  align-items: center;

  b:nth-child(1) {
    margin-right: 0.5rem;
  }

  b:nth-child(2) {
    background-color: var(--white);
    color: var(--primary);
    padding-left: 5px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
  }
`;

export default StyledStats