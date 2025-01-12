import styled from "styled-components";

interface ContainerProps {
  id?: string;
  children?: React.ReactNode;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  overflow: hidden;

  .quiz-container {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    text-align: center;
    position: relative;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2); /* Added deeper shadow */
    
    h2 {
      font-size: 24px;
      margin-bottom: 20px;
      font-weight: bold;
      color: #333;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Added shadow for h2 */
    }

    .progress-bar {
      background: #e0e0e0;
      border-radius: 5px;
      height: 10px;
      margin-bottom: 20px;
      width: 100%;
      overflow: hidden;
      position: relative;

      .progress {
        background: #4caf50;
        height: 100%;
        width: 0%;
        border-radius: 5px;
        transition: width 0.5s ease;
      }
    }

    .question {
      font-size: 1.8rem;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for questions */
    }

    .options {
      padding-top: 15px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;

      .option-button {
        padding: 15px 20px;
        font-size: 16px;
        background-color: #4caf50;
        border: none;
        border-radius: 8px;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Button shadow for depth */
        width: 100%; /* Ensures the button takes up the full width */
        min-height: 50px; /* Set a minimum height */
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover {
          background-color: #45a049;
        }

        &:active {
          transform: scale(0.95);
        }
      }

    }

    .result {
      h3 {
        font-size: 24px;
        margin-bottom: 10px;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Added shadow to result heading */
      }

      p {
        font-size: 36px;
        margin-top: 10px;
        text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2); /* Subtle shadow for result text */
      }
    }

    .fade-in {
      opacity: 0;
      animation: fadeIn 1s forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
