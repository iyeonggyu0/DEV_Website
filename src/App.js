import React from "react";
import "./App.css";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./styles/theme.js";

// Page
import MainPage from "./pages/mainPage/index";
import GuidePagem from "./pages/guidePage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/guide" element={<GuidePagem />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
