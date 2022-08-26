import React from 'react';
import Navbar from '../Navbar';
import Home from '../Home';
//import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from '../components/Create';
import BlogDetails from '../components/BlogDetails';
import NotFound from '../components/NotFound';
//import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import IndexHome from '../components/Home';
import About from '../components/About';
import Logar from '../components/Login';
import Subscribe from '../components/Subscribe';

function Rotas () {
   return(

    <Router>
    <div className="App">
      
      <div className="content">
        <Switch>
          <Route exact path="/">
            <IndexHome />
          </Route>
          <Route exact path="/api">
          <Navbar />
              <Home />
          </Route>
          <Route path="/cadastro">
            <Subscribe />
          </Route>
          <Route path="/login">
            <Logar />
          </Route>
          <Route path="/create">
          <Navbar />
            <Create />
          </Route>
          <Route path="/blogs/:id">
          <Navbar />
            <BlogDetails />
          </Route>
          <Route path="*">
          <Navbar />
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
   );
}

export default Rotas;

{/* <Route path="/create">
<Create />
</Route>
<Route path="/blogs/:id">
<BlogDetails />
</Route>
<Route path="*">
<NotFound />
</Route> */}
//        <Route exact path="/" element={<Index/>}/>
//<Route exact path="/login" element={<Login/>}/>
//<Route exact path="/cadastro" element={<Cadastro/>}/>/
//<Route exact path="/sobre" element={<Sobre/>}/>