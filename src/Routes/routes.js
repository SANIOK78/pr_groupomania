import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Profil from '../pages/Profil';
import Postage from '../pages/Postage';

const routes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profil' element={<Profil/>} />
            <Route path='/postage' element={<Postage />} />
            
        </Routes>
    );
};

export default routes;