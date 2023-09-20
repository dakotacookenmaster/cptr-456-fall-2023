import { useState } from "react"
import "./Navbar.css"

const Navbar = (props) => {
    const { links } = props
    const [value, setValue] = useState(10)

    console.log("Rendering Navbar")

    const handleChange = () => {
        setValue((prevValue) => {
            return prevValue + 10
        })
    }

    return (
        <ul style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            display: "flex",
            gap: "10px",
        }}>
            {
                links.map((link, index) => {
                    const styles = {
                        marginLeft: index === 0 ? "auto" : "initial",
                    }

                    return <li style={styles} key={`list-item-${index}`}>{link}</li>

                })
            }
            <h1>{ value }</h1>
            <button onClick={handleChange}>Change Value</button>
        </ul>
    )
}

export default Navbar