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
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Added text shadow */
  }

  .zigzag {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .zigzag-item {
      display: flex;
      align-items: center;
      gap: 2rem;

      &.left {
        flex-direction: row;

        .icon {
          text-align: left;
        }

        .content {
          text-align: left;
        }
      }

      &.right {
        flex-direction: row-reverse;

        .icon {
          text-align: right;
        }

        .content {
          text-align: right;
        }
      }

      .icon {
        font-size: 4rem;
        color: var(--green);
        flex-shrink: 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Added text shadow */
      }

      .content {
        max-width: 600px;

        h3 {
          font-size: 2rem;
          color: var(--green);
          margin-bottom: 1rem;
          font-weight: 700;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Added text shadow */
        }

        p {
          font-size: 1.6rem;
          color: rgba(0, 0, 0, 0.8);
          text-align: justify;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); /* Added text shadow */
        }
      }
    }
  }

  /* Adjustments for smaller screens */
  @media (max-width: 960px) {
    .zigzag-item {
      flex-direction: column;

      .icon {
        margin-bottom: 1rem;
      }

      &.left,
      &.right {
        flex-direction: column;

        .content {
          text-align: center;
          p {
            text-align: justify;
          }
        }

        .icon {
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 740px) {
    .icon {
      font-size: 3rem;
    }

    .content h3 {
      font-size: 1.8rem;
    }

    .content p {
      font-size: 1.4rem;
    }
  }
`;
