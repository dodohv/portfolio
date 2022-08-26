import {React, useState}  from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Button, Container, Row,Col } from 'react-bootstrap';
import { BsSun, BsLightbulb,BsLightbulbFill, BsEnvelope, BsTelephone, BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs'; 
import Spline from '@splinetool/react-spline';

import './Style.css'
function Header() {

    const [temavalue, setTemaValue] = useState('Tema Escuro')
 
    const body = document.querySelector('body')
    const initialTheme = 'light'
    const setTheme = (theme) => {
      localStorage.setItem('theme', theme)
      body.setAttribute('data-theme', theme)
    }
    const toggleTheme = () => {
      const activeTheme = localStorage.getItem('theme');
    
      if (activeTheme === 'light') setTheme('dark'), setTemaValue('Tema Claro');
      else setTheme('light'), setTemaValue('Tema Escuro');
    }
    const setThemeOnInit = () => {
      const savedTheme = localStorage.getItem('theme');
      savedTheme 
          ? body.setAttribute('data-theme', savedTheme)
          : setTheme(initialTheme);
    }
     setThemeOnInit()
  return (
 <Container>
    <Row>
        <header id="main-header">
            <div className="header-content">
            <Col>
            <a href="http://dodohv.com.br">
            <Spline style={{width:'60px',height:'auto'}} scene="https://prod.spline.design/uUaxIE8WEGyhXe3x/scene.splinecode" />
            </a>
            </Col>
              
                <Col className="colheader">
                <Link className='link' to="/"> 
                    Home
                </Link>
                </Col>
                <Col className="colheader">
                    <Link className="link" to="/api">
                        Blog
                    </Link>
                </Col>

                <Col className="Tema" >
            
                    <a class="a" onClick={toggleTheme}>
                    <BsLightbulbFill/>{temavalue} 
                    </a>

                </Col>
            </div>
        </header>
    </Row>
 </Container>
  )
}

export default Header