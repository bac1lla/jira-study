import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {GlobalStyle} from "./styles/globalStyle";
import NavBar from "./components/NavBar";

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
