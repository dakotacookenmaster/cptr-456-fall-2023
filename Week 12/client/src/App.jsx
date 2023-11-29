import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ccc");
  const [name, setName] = useState("")
  const [names, setNames] = useState([])

  // useEffect(() => {
  //   const getData = async () => {
  //     const rawData = await fetch("http://localhost:3000");
  //     const jsonData = await rawData.json();
  //     setColor(jsonData.color);
  //   };

  //   const dataInterval = setInterval(getData, 500);

  //   return () => {
  //     clearInterval(dataInterval);
  //   };
  // }, []);

  const submitName = async () => {
    const rawData = await fetch("http://localhost:3000/names", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    })

    const jsonData = await rawData.json()
    setNames(jsonData)
  }

  return (
    <>
      <div
        style={{
          width: "100px",
          height: "100px",
          border: "2px solid black",
          backgroundColor: color,
        }}
      ></div>
      <section>
        <input value={name} onChange={(event) => setName(event.target.value)}/>
        <button onClick={submitName}>Submit</button>
      </section>
      <section>
        { names.map((name, index) => {
          return <p key={index}>{ name }</p>
        })}
      </section>
    </>
  );
}

export default App;
