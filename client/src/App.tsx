import React from 'react';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import {GlobalStyle} from "./styles/globalStyle";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
