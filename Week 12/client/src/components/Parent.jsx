const divStyles = {
    background: "green",
    border: "4px solid teal",
    width: "100px",
    height: "100px",
}

const Parent = (props) => {
    const { children } = props

    return (
        <div style={divStyles}>
            { children }
        </div>
    )
}

export default Parent