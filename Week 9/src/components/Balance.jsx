import { Paper, Typography } from "@mui/material"
import PropTypes from "prop-types"

const Balance = (props) => {
    const { amount } = props
    return (
        <Paper sx={{ 
            p: "10px",
            mb: "10px",
        }}>
            <Typography variant="overline">Total Balance</Typography>
            <Typography 
                variant="h1"
                color={amount <= 0 ? "error.main" : "success.main" }
            >
                {amount < 0 && "-"}${ Math.abs(amount).toFixed(2) }
            </Typography>
        </Paper>
    )
}

Balance.propTypes = {
    amount: PropTypes.number.isRequired
}

export default Balance