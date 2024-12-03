import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Hero from './components/custom/Hero'
import Header from './components/custom/Header'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    document.title = 'Sachi-Sakhi';
  }, []);

  const [count, setCount] = useState(0)

  return (
    <>
    {/*Hero section*/}
    <Header/>
    <Hero/>

    </>
      
  )
}

export default App
