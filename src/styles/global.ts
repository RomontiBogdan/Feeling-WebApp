import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --pink:hsl(335, 77.80%, 50.60%);
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    scroll-padding-top: 10rem;
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color:rgba(245, 245, 245, 0.79); /* Light theme background */
    color: var(--black); /* Light theme text color */
    transition: 0.5s;
  }

  body, input, textarea, button {
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  button, .button {
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover {
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  .logo {
    font-size: 3rem;
    color: var(--black);
  }

  header.header-fixed {
    background-color: #f5f5f550; /* Light theme header */
    a {
      color: var(--black);
    }
    .menu, .menu:before, .menu:after {
      background-color: var(--black); 
    }
    .menu.active {
      background-color: rgba(555,555,555,0);
    }
  }

  footer.footer {
    background-color: rgba(0,0,0,0.1);
    color: var(--black);
  }

  form {
    input, textarea {
      border: solid 1px var(--black);
      color: var(--black);
      &::placeholder {
        color: var(--black);
      }
    }
  }
`;
