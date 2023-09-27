import './App.css'
import Card from './components/Card'
import data from "./data/data.json"
import { useRef, useState } from 'react'

function App() {
  const [listItems, setListItems] = useState(data)
  const [input, setInput] = useState("")
  const id = useRef(4)

  const handleAddItem = () => {
    setListItems((prevListItems) => {
      return [...prevListItems, { id: id.current, value: input }]
    })
    id.current++
    setInput("")
  }

  const handleChangeInput = (event) => {
    const { value } = event.target // extracts value from the input
    setInput(value)
  }

  const handleRemoveItem = (id) => {
    setListItems(prevListItems => {
      return prevListItems.filter(item => {
        return item.id !== id
      })
    })
  }

  const handleToggleItem = (id) => {
    setListItems(prevListItems => {
      return prevListItems.map(item => {
        if(item.id === id) {
          return {
            ...item,
            checked: !item.checked
          }
        }

        return item
      })
    })
  }

  return (
    <>
    <h1>Shopping List</h1>
    <hr />
    <input value={input} onChange={handleChangeInput} />
    <button onClick={handleAddItem}>➕</button>
      {
        listItems.map(datum => {
          return <Card 
            handleRemoveItem={handleRemoveItem} 
            handleToggleItem={handleToggleItem}
            item={datum} 
            key={datum.id} 
          />
        })
      }
    </>
  )
}

export default App
