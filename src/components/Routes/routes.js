import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../../containers/pages/Home';
import Profil from '../../containers/pages/Profil';
import Postage from '../../containers/pages/Postage';



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