import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {GlobalStyle} from "./styles/globalStyle";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div style={{height: '100vh'}}>
            <BrowserRouter>
                <GlobalStyle/>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
