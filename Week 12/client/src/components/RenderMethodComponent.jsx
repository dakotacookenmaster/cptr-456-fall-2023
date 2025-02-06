const divStyles = {
    border: "2px solid white",
    background: "maroon",
    width: "100px",
    height: "100px"
}

const RenderMethodComponent = (props) => {
    const { render } = props

    return (
        <div style={divStyles}>
            { render(30) }
        </div>
    )
}

export default RenderMethodComponent
