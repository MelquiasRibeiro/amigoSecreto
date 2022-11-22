import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from  './App';

export default function Navegation(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" {...props} element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}