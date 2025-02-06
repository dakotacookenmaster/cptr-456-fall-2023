import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSnackbar } from 'notistack'

function App() {
  const [count, setCount] = useState(0)
  const { enqueueSnackbar } = useSnackbar()

  const addMessage = () => {
    enqueueSnackbar("This is a good message", { variant: "success" })
  }

  const addBadMessage = () => {
    enqueueSnackbar("This is a bad message", { variant: "error" })
  }

  const addInfoMessage = () => {
    enqueueSnackbar("This is an informational message", { variant: "info" })
  }

  return (
    <>
      <button onClick={addMessage}>Add Good Message</button>
      <button onClick={addBadMessage}>Add Bad Message</button>
      <button onClick={addInfoMessage}>Add Info Message</button>
    </>
  )
}

export default App
