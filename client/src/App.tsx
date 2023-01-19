import React, { useMemo} from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./layout/homePage";
import LoginPage from "./layout/loginPage";
import ProfilePage from "./layout/profilePage";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {

  const mode = useSelector((state: any )=> state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
   <BrowserRouter>
   <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/profile/:userid" element={<ProfilePage/>} />
      </Routes>
    </ThemeProvider>
   </BrowserRouter>
  )
}

export default App
