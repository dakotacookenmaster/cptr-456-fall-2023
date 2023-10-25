import { useState } from 'react'
import './App.css'
import Balance from './components/Balance'
import TransactionList from './components/TransactionList'
import data from "./data/data.json"
import { Box } from '@mui/material'
import TransactionAdder from './components/TransactionAdder'

const App = () => {
  const [transactions, setTransactions] = useState(data)
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-evenly"
    }}>
      <Box sx={{
        width: "65%",
      }}>
        <Balance amount={
          transactions.reduce((accumulator, transaction) => {
            if (transaction.type === "deposit") {
              return accumulator + transaction.amount
            } else {
              return accumulator - transaction.amount
            }
          }, 0)
        }
        />
        <TransactionList transactions={transactions} />
      </Box>
      <TransactionAdder setTransactions={setTransactions} />
    </Box>
  )
}

export default App
