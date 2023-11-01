import * as React from 'react';
import { TextField, Box, Button, Typography, Modal, Select, MenuItem } from '@mui/material';
import { useState, useEffect } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#2a2a2a',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal(props) {
    const { open, handleClose, setModifyId, modifyId, transactions, setTransactions } = props

    const [formData, setFormData] = useState(null)

    useEffect(() => {
        const transaction = transactions.filter(transaction => {
            return modifyId === transaction.id
        })[0]

        if (transaction) {
            setFormData({
                ...transaction
            })
        }
    }, [modifyId])

    // state will look something like:
    /*
        {
        "id": 0,
        "name": "Salary",
        "amount": 14360,
        "type": "deposit"
    },
    */
    const handleEdit = () => {
        setTransactions(prevTransactions => {
            return prevTransactions.map(transaction => {
                if (transaction.id === modifyId) {
                    return formData
                } else {
                    return transaction
                }
            })
        })
        setModifyId(null)
        handleClose()
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: name === "amount" ? +value : value
        }))
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {formData ? (
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Transaction
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        p: "10px",
                    }}>
                        <Typography variant="overline">Transaction Name</Typography>
                        <TextField
                            name="name"
                            variant="outlined"
                            value={formData.name}
                            inputProps={{
                                style: {
                                    color: "white"
                                }
                            }}
                            onChange={handleChange}
                        />
                        <Typography variant="overline">Transaction Amount</Typography>
                        <TextField
                            name="amount"
                            value={formData.amount}
                            type="number"
                            inputProps={{
                                min: 0,
                                style: {
                                    color: "white"
                                }
                            }}
                            onChange={handleChange}
                        />
                        <Typography variant="overline">Transaction Type</Typography>
                        <Select
                            name="type"
                            value={formData.type}
                            style={{ color: "white" }}
                            onChange={handleChange}
                        >
                            <MenuItem value={"deposit"}>Deposit</MenuItem>
                            <MenuItem value={"withdrawal"}>Withdrawal</MenuItem>
                        </Select>
                        <Button onClick={handleEdit} variant="contained">Edit</Button>
                    </Box>
                </Box>
            ) : <></>}
        </Modal>
    );
}
