import "./App.css";
import GlobalStyle from "./styles/globalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/index";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
