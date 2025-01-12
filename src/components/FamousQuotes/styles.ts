import styled from "styled-components";

interface ContainerProps {
  id?: string;
  children?: React.ReactNode;
}

export const Container = styled.section<ContainerProps>`
  margin-top: 8rem;
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 3.5rem;
    color: var(--green);
    margin-bottom: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  .quote-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    padding: 2rem;
    
    .quote-card {
      background: rgba(248, 248, 248, 0.9); 
      padding: 2rem;
      border-radius: 1.5rem;
      text-align: left;
      display: flex;
      flex-direction: column;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
      height: 100%;
      transition: transform 0.25s, background-color 0.3s;

      &:hover {
        transform: translateY(-15px);
        background-color: rgba(227, 31, 113, 0.3)
      }

      .image-container {
        margin-bottom: 2rem;
        text-align: center;
        img {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--green);
        }
      }

      .quote {
        font-size: 1.9rem;
        font-style: italic;
        margin-bottom: 1.5rem;
        color: var(--green);
        font-weight:600
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      }

      .description {
        font-size: 1.5rem;
        opacity: 0.8;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  }

  @media (max-width: 960px) {
    .quote-cards {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .quote-cards {
      grid-template-columns: 1fr;
    }
  }
`;
