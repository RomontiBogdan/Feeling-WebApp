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
  padding: 2rem;

  .feelings-text {
    h2, h3 {
      color: var(--green);
      margin-bottom: 1rem;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Added text shadow */
    }

    .feelings-grid, .celebrations-grid {
      margin-top: 1.6rem;
      display: grid;
      gap: 2rem;
    }

    .feelings-grid {
      grid-template-columns: 1fr 1fr 1fr; /* Default: 3 columns */
    }

    .celebrations-grid {
      grid-template-columns: 1fr 1fr; /* Default: 2 columns */
    }

    .feeling, .celebration {
      padding: 1.5rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      text-align: center;
      background: rgba(248, 248, 248, 0.6);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      
      h4 {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 1.6rem;
        color: var(--green);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      }

      h4 img {
        width: 24px;
        height: auto;
        border-radius: 4px;
      }

      p {
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.8rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  }

  .feelings-image {
    text-align: center;

    img {
      width: 90%;
      margin-top: 2rem;
      filter: grayscale(0);
      transition: filter 0.5s;
    }
  }

  /* Media Query for smaller screens */
  @media (max-width: 767px) {  /* Targeting devices smaller than 768px (including iPhone SE) */
    display: block;
    
    .feelings-grid {
      grid-template-columns: repeat(1, 1fr) !important; /* Force 1 column */
    }

    .celebrations-grid {
      grid-template-columns: repeat(1, 1fr) !important; /* Force 1 column */
    }

    .feeling, .celebration {
      padding: 1rem;
    }
  }
`;
