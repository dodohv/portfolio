import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Spline from '@splinetool/react-spline';
import Rotas from './pages/Rotas';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
function App() {
  const [count, setCount] = useState(0)
 
  return (
    <div className="App">
      <Router>
        <Header/>
        <Rotas/>
      </Router>
   
    </div>
  )
}

export default App
