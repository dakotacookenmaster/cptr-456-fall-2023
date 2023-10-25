import { Paper, TextField, Typography, Box, Select, MenuItem, Button } from "@mui/material"
import { useRef, useState } from "react"

const TransactionAdder = (props) => {
    const { setTransactions } = props
    const [formData, setFormData] = useState({
        name: "",
        amount: "",
        type: "deposit"
    })
    const id = useRef(4)

    const handleChange = (event) => {
        const { value, name } = event.target
        //       50     amount

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: name === "amount" ? +value : value
                // amount: 50
            }
        })
    }

    const addTransaction = () => {
        formData.id = id.current
        id.current++
        setTransactions(prevTransaction => {
            return [
                ...prevTransaction,
                formData
            ]
        })
    }

    return (
        <Paper elevation={9} sx={{ height: "fit-content" }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                p: "10px",
            }}>
                <Typography variant="overline" sx={{ fontSize: "30px" }}>Create a new transaction</Typography>
                <Typography variant="overline">Transaction Name</Typography>
                <TextField
                    name="name"
                    variant="outlined"
                    value={formData.name}
                    onChange={handleChange}
                />
                <Typography variant="overline">Transaction Amount</Typography>
                <TextField
                    name="amount"
                    value={formData.amount}
                    type="number"
                    inputProps={{
                        min: 0,
                    }} 
                    onChange={handleChange}
                />
                <Typography variant="overline">Transaction Type</Typography>
                <Select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                >
                    <MenuItem value={"deposit"}>Deposit</MenuItem>
                    <MenuItem value={"withdrawal"}>Withdrawal</MenuItem>
                </Select>
                <Button onClick={addTransaction} variant="contained">Create</Button>
            </Box>
        </Paper>
    )
}

export default TransactionAdder