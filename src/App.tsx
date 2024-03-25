import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {First} from "./components/first/first";
import {Second} from "./components/second/second";
import {Navigate} from "./components/navigate/navigate";

function App() {
    return (
        <BrowserRouter>
            <Navigate/>
            <Routes>
                <Route path='/first' element={<First/>}></Route>
                <Route path='/second' element={<Second/>}></Route>
                <Route path='*'></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
