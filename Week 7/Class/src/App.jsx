import { useEffect, useState } from 'react'
import './App.css'
import Person from './components/Person'

function App() {
  const [state, setState] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [nextAddress, setNextAddress] = useState("https://swapi.dev/api/people/?page=1")

  useEffect(() => {
    (async () => {
      console.time("Data Loading Time")
      setIsLoading(true)
      const response = await fetch(nextAddress)
      const data = await response.json()
      setState(data)
      setIsLoading(false)
      console.timeEnd("Data Loading Time")
    })()
  }, [nextAddress])

  const handleChangePage = (page) => {
    setNextAddress(page)
  }

  return <>
    {isLoading && <h1>Loading...</h1>}
    {state && (
      <>
        <p># of People: {state.count}</p>
        <button disabled={!state.next} onClick={() => handleChangePage(state.next)}>Next Page</button>
        <button disabled={!state.previous} onClick={() => handleChangePage(state.previous)}>Prev Page</button>
        <progress value={+nextAddress[nextAddress.length - 1]} max={9} />
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-evenly"
        }}>
          {
            state.results.map(person => {
              return <Person data={person} />
            })
          }
        </div>
      </>
    )}
  </>
}

export default App
