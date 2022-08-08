
import {React, useState } from 'react'
import Spline from '@splinetool/react-spline';
import './Style.css'
import reactLogo from '../assets/react.svg'
import '../App.css'
function Home() {
    const [count, setCount] = useState(0)
  return (
    <div>   
    <a href="http://dodohv.com.br" target="_blank">
      <img src="/dodohv.ico" className="logo" alt="Vite logo" />
    </a>
    <a href="https://reactjs.org" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>


  <h1>Dodohv + React Router Dom</h1>
  <h4>Sou um Desenvolvedor VBA e React JS / React-Native!</h4>
  <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>

    </p>
  </div>
  <p className="read-the-docs">
   
  </p> 
  </div>
  )
}

export default Home