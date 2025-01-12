import React from "react";
//import { useEffect } from 'react'
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
    </>
  );
}

export default App;
