const Person = (props) => {
    const { data } = props

    return (
        <div style={{
            padding: "10px",
            border: "2px solid white",
            boxShadow: "5px 5px 10px 2px black",
            width: "fit-content",
        }}>
            <p>Name: { data.name }</p>
            <p>Height: { data.height }</p>
            <p>Skin Color: { data.skin_color} </p>
        </div>
    )
}

export default Person