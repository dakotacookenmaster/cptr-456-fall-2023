import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("#ccc")

  useEffect(() => {
    const getData = async () => {
      const rawData = await fetch("http://localhost:3000")
      const jsonData = await rawData.json()
      setColor(jsonData.color)
    }

    const dataInterval = setInterval(getData, 500)

    return () => {
      clearInterval(dataInterval)
    }
  }, [])

  return (
    <div style={{
      width: "100px",
      height: "100px",
      border: "2px solid black",
      backgroundColor: color,
    }}></div>
  )
}

export default App
