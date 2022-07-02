import styled from "styled-components";

const StyledMenu = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  height: 100vh;
  background-color: var(--primary);
  visibility: ${({ isDrawerShown }) => (isDrawerShown ? "visibile" : "hidden")};
  transform: translateY(${({ isDrawerShown }) => (isDrawerShown ? "0%" : "-100%")});
  transition: all 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  display: none;

  @media ${({ theme }) => theme.media.xs} {
    display: flex;
  }
`;

export default StyledMenu
