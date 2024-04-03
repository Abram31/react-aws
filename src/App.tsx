import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {First} from "./components/first/first";
import {Second} from "./components/second/second";
import {Navigate} from "./components/navigate/navigate";
import {Provider} from "react-redux";
import { store} from "./store/store";
import {ApolloProvider, useQuery} from '@apollo/client';
import {client} from "./apollo/client";
import {ALL_POSTS} from "./apollo/posts";


function App() {
    // store.dispatch(fetchPosts)
    return (
        <Provider store={store}>
        <BrowserRouter>
            <ApolloProvider client={client} >
            <Navigate/>
            <Routes>
                <Route path='/first' element={<First/>}></Route>
                <Route path='/second' element={<Second/>}></Route>
                <Route path='*'></Route>
            </Routes>
            </ApolloProvider>

        </BrowserRouter>
        </Provider>

    );
}

export default App;
