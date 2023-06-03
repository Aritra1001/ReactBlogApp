import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../NavPages/Home/Home';
import Bollywood from '../NavPages/Bollywood/Bollywood';
import Technology from '../NavPages/Technology/Technology';
import Hollywood from '../NavPages/Hollywood/Hollywood';
import Sport from '../NavPages/Sport/Sport';
import Food from '../NavPages/Food/Food';

function RouterCompo(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/bollywood' element={<Bollywood/>}/>
                    <Route path='/technology' element={<Technology/>}/>
                    <Route path='/hollywood' element={<Hollywood/>}/>
                    <Route path='/sport' element={<Sport/>}/>
                    <Route path='/food' element={<Food/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterCompo;