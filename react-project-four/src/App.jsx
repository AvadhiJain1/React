import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Cards from './Components/Cards'
import Button from './Components/Button'

function App() {
  const [count, setCount] = useState(0)

  function clicking(){
    setCount(count+1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <Button clicking={clicking}></Button>
    </div>
  )
}

export default App
