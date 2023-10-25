import { Paper, Typography } from "@mui/material"
import PropTypes from "prop-types"

const Transaction = (props) => {
    const { type, amount, name } = props
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
            <Typography variant="h1">{ name }</Typography>
            <Typography 
                variant="h3"
                sx={{
                    color: (theme) => 
                        type === "withdrawal" ? 
                        theme.palette.error.main : 
                        theme.palette.success.main
                }}
            >
                {type === "withdrawal" && "-"}${ amount.toFixed(2) }
            </Typography>
        </Paper>
    )
}

Transaction.propTypes = {
    type: PropTypes.oneOf(["deposit", "withdrawal"]).isRequired,
    amount: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}


export default Transaction