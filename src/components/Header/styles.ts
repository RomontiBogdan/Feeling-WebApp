import styled from "styled-components";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.8rem 10rem;
  
  background-color: #21212150;
  backdrop-filter: blur(6px);
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  .logo {
    color: #ffff;
    font-family: "Red Hat Display", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    transition: filter 0.25s;
  }

  .logo:hover {
    filter: brightness(0.6);
  }

  @media (max-width: 960px) {
    padding: 1.8rem 3rem;
  }
`;
