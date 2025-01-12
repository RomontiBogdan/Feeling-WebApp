import styled from "styled-components";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  id?: string; // Add `id` as a valid prop
}

export const Container = styled.section<ContainerProps>`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);

  .feeling-text {
    & > p {
      font-size: 1.8rem;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Added text shadow */
    }

    h1 {
      font-size: 7rem;
      text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3); /* Added text shadow */
    }

    h3 {
      color: var(--green);
      margin: 1rem 0;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Added text shadow */
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .feeling-image {
    img {
      max-width: 500px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Added shadow for image */
    }
  }

  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;

    .feeling-text {
      h1 {
        font-size: 5rem; /* Adjust font size for smaller screens */
      }
    }

    .feeling-image {
      display: flex; /* Ensures the image is visible */
      justify-content: center;
      align-items: center;

      img {
        max-width: 80%; /* Scales the image for smaller screens */
        height: auto; /* Maintains aspect ratio */
        margin: 0 auto; /* Centers the image */
      }
    }
  }

  @media (max-width: 600px) {
    margin-top: 25%;

    .feeling-image img {
      max-width: 70%;
    }
  }

  @media (max-width: 480px) {
    margin-top: 35%;

    .feeling-image img {
      max-width: 60%;
    }
  }
`;
