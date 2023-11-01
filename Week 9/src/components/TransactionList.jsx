import PropTypes from "prop-types"
import Transaction from "./Transaction"
import { Box } from "@mui/material"

const TransactionList = (props) => {
    const { transactions, setTransactions, handleOpen, setModifyId } = props

    return (
        <Box style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            { transactions.map(transaction => {
                return (
                    <Transaction 
                        key={transaction.id}
                        name={transaction.name}
                        amount={transaction.amount}
                        type={transaction.type}
                        id={transaction.id}
                        setTransactions={setTransactions}
                        handleOpen={handleOpen}
                        setModifyId={setModifyId}
                    />
                )
            })}
        </Box>
    )
}

TransactionList.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        type: PropTypes.oneOf(["deposit", "withdrawal"]).isRequired
    })).isRequired
}

export default TransactionList