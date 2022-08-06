import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Spline from '@splinetool/react-spline';

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div className="App">
      <div>
        <a href="http://dodohv.com.br" target="_blank">
          <img src="/dodohv.ico" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a>
        <Spline scene="https://prod.spline.design/uUaxIE8WEGyhXe3x/scene.splinecode" />

        </a>
      </div>
      <h1>Dodohv + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
