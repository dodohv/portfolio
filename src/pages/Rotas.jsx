import React from 'react';

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import IndexHome from '../components/Home';
import About from '../components/About';
import Logar from '../components/Login';
import Subscribe from '../components/Subscribe';

function Rotas () {
   return(
       <Routes> 
           <Route exact path="/" element={<IndexHome/>} />
           <Route exact path="/sobre" element={<About/>} />
           <Route exact path="/login" element={<Logar/>} />
           <Route exact path="/cadastro" element={<Subscribe/>} />
       </Routes>
   );
}

export default Rotas;
//        <Route exact path="/" element={<Index/>}/>
//<Route exact path="/login" element={<Login/>}/>
//<Route exact path="/cadastro" element={<Cadastro/>}/>/
//<Route exact path="/sobre" element={<Sobre/>}/>