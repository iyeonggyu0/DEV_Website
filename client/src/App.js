import React from "react";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./styles/theme.js";

// Page
import MainPage from "./pages/mainPage/index";
import GuidePage from "./pages/guidePage";
import ElementPage from "./pages/elementPage/index";
import DataInputPage from "./pages/dataInputPage";
import DeletePage from "./pages/deletePage";
import RankingPage from "./pages/rankingPage";

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
            <Route path="/delete" element={<DeletePage />} />
            <Route path="/datainput/:game" element={<DataInputPage />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="/element" element={<ElementPage />} />
            <Route path="/rank/:type" element={<RankingPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
