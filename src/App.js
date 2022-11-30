import React from "react";
import "./App.css";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./styles/theme.js";

// Page
import MainPage from "./pages/mainPage/index";
import GuidePage from "./pages/guidePage";
import ElementPage from "./pages/elementPage/index";

// 나중에 삭제하기 * 폰트 어썸
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, light, thin, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="/element" element={<ElementPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
