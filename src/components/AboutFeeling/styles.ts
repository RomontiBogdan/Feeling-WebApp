import styled from "styled-components";

interface ContainerProps {
  id?: string;
  children?: React.ReactNode;
}

export const Container = styled.section<ContainerProps>`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  h2 {
    margin-bottom: 2rem;
    font-size: 3rem;
    color: var(--green);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Added black text shadow */
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Added black text shadow */
  }

  .feeling-image {
    text-align: center;

    img {
      margin-top: 2rem;
      width: 90%;
      filter: grayscale(0);
      transition: filter 0.5s;

      &:hover {
        filter: grayscale(0);
      }
    }
  }

  .feeling-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  @media only screen and (max-width: 480px) {
    .feeling-image {
      max-width: 100%;
      margin-top: 4rem;
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .feeling-image {
      display: flex;
      max-width: 100%;
    }
  }
`;
