import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {First} from "./components/first/first";
import {Second} from "./components/second/second";
import {Navigate} from "./components/navigate/navigate";
import {Provider} from "react-redux";
import {fetchPosts, store} from "./store/store";

function App() {

    // store.dispatch(fetchPosts)
    return (
        <Provider store={store}>
        <BrowserRouter>
            <Navigate/>
            <Routes>
                <Route path='/first' element={<First/>}></Route>
                <Route path='/second' element={<Second/>}></Route>
                <Route path='*'></Route>
            </Routes>
        </BrowserRouter>
        </Provider>

    );
}

export default App;
