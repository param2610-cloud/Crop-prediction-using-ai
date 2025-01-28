import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FarmerApp from './components/MobileInterfaceL0'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <FarmerApp/>
   </>
  )
}

export default App
