
import {React, useState } from 'react'
import Spline from '@splinetool/react-spline';
import './Style.css'
import dodohv2 from '../assets/dodohv.ico'
import reactLogo from '../assets/react.svg'
import { Button, Container, Row,Col } from 'react-bootstrap';
import '../App.css'
import Header from '../components/Header';
function Home() {
  const [dodohv, setDodohv] = useState(dodohv2)
    const [countInsta, setCountInsta] = useState(0)
    const [countBlog, setCountBlog] = useState(0)
    const [count, setCount] = useState(0)
  return (
    <div>   
  <Header/> 
    <a href="http://dodohv.com.br" target="_blank">
      {/* <img src="/dodohv.ico" className="logododohv" alt="Vite logo" /> */}
      <img src={dodohv} className="logododohv" alt="Vite logo" />
    </a>
  

  <h2>Douglas Villegas Vasquez</h2>
  <h5>Desenvolvedor React JS e React-Native, Entusiasta em novas Tecnologias, Programador VBA, Formado pela Universidade São Judas Tadeu (USJT) em Sistemas de Informação, Estudando RPA, Python, Office Script e TypeScript</h5>
 
  <div className="card">
    <Row>
      <a href="https://www.instagram.com/dooh_vasquez/">
      <Button className="bio" onClick={() => setCountInsta((countInsta) => countInsta + 1)}>
      Instagram {countInsta}
    </Button>
    </a>
    </Row>
    <Row>
    <a href="http://www.dodohv.com/api/">
      <Button className="bio" onClick={() => setCountBlog((countBlog) => countBlog + 1)}>
      Blog em React JS com API {countBlog}
    </Button>
    </a>
    </Row>
    <Row>
      <Button className="bio" onClick={() => setCount((count) => count + 1)}>
      Teste {count}
    </Button>
    </Row>
    <Row>
      <Button className="bio" onClick={() => setCount((count) => count + 1)}>
      Contador {count}
    </Button>
    </Row>
    <Row>
      <Button className="bio" onClick={() => setCount((count) => count + 1)}>
       {count}
    </Button>
    </Row>
    <Row>
      <Button className="bio" onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </Button>
    </Row>
    
        <p>

    </p>
  </div>
  <p className="read-the-docs">
   
  </p> 
  </div>
  )
}

export default Home