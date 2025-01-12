import styled from "styled-components";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;  // Add `id` as a valid prop
}

export const Container = styled.section<ContainerProps>`
  margin-top: 15rem;
  text-align: center;

  h2 {
    font-size: 4rem;
    margin-bottom: 5rem;
    color: var(--green); /* Use the app's green theme */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Added text shadow */
  }

  .cards {
    display: flex;
    justify-content: center;
    align-items: stretch; /* Ensures cards stretch equally */
    flex-wrap: wrap;
    gap: 2rem;

    .card {
      background-color: #f9f9f9;
      border-radius: 1.2rem;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      padding: 2rem;
      width: 25rem; /* Ensures consistent width */
      height: 28rem; /* Ensures consistent height */
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between; /* Space out title, content, and footer */
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        background-color: rgba(227, 31, 113, 0.4);
        color: #fff;
      }

      h3 {
        font-size: 2.4rem;
        color: var(--green);
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Added text shadow */
      }

      p {
        font-size: 1.6rem;
        color: var(--black);
        letter-spacing: 0.02rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Added text shadow */
      }
    }
  }

  @media (max-width: 960px) {
    .cards {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 740px) {
    .cards {
      flex-direction: column;
      align-items: center;
    }

    .card {
      width: 100%; /* Full width for smaller screens */
      max-width: 25rem; /* Maintain consistent card size */
    }
  }
`;
