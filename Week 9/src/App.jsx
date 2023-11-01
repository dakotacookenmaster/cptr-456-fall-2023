import { useState } from 'react'
import './App.css'
import Balance from './components/Balance'
import TransactionList from './components/TransactionList'
import data from "./data/data.json"
import { Box } from '@mui/material'
import TransactionAdder from './components/TransactionAdder'
import BasicModal from './components/BasicModal'

const App = () => {
  const [transactions, setTransactions] = useState(data)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modifyId, setModifyId] = useState(null)
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
        <TransactionList 
          setTransactions={setTransactions} 
          transactions={transactions} 
          handleOpen={handleOpen}
          setModifyId={setModifyId}
        />
      </Box>
      <TransactionAdder setTransactions={setTransactions} />
      <BasicModal 
        handleClose={handleClose} 
        open={open} 
        transactions={transactions}
        modifyId={modifyId}
        setModifyId={setModifyId}
        setTransactions={setTransactions}
      />
    </Box>
  )
}

export default App
