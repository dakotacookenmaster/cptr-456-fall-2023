import { IconButton, Paper, Typography, Box } from "@mui/material"
import { DeleteOutlineRounded, CreateRounded } from "@mui/icons-material"
import PropTypes from "prop-types"

const Transaction = (props) => {
    const { type, amount, name, id, setTransactions, handleOpen, setModifyId } = props
    return (
        <Paper
            elevation={9}
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
            }}
            square={true}
        >
            <Typography variant="h1">{name}</Typography>
            <Typography
                variant="h3"
                sx={{
                    color: (theme) =>
                        type === "withdrawal" ?
                            theme.palette.error.main :
                            theme.palette.success.main
                }}
            >
                {type === "withdrawal" && "-"}${amount.toFixed(2)}
            </Typography>
            <Box>
                <IconButton
                    size="large"
                    color="error"
                    onClick={
                        () => {
                            setTransactions(prevTransactions => {
                                return prevTransactions.filter(transaction => {
                                    return transaction.id !== id
                                })
                            })
                        }
                    }
                >
                    <DeleteOutlineRounded />
                </IconButton>
                <IconButton
                    size="large"
                    color="info"
                    onClick={
                        () => {
                            handleOpen()
                            setModifyId(id)
                        }
                    }
                >
                    <CreateRounded />
                </IconButton>
            </Box>
        </Paper>
    )
}

Transaction.propTypes = {
    type: PropTypes.oneOf(["deposit", "withdrawal"]).isRequired,
    amount: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}


export default Transaction