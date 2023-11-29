import express from "express"
import randomColor from "randomcolor"
import cors from "cors"
import bodyparser from "body-parser"

const app = express()
const port = 3000

app.use(cors())
app.use(bodyparser.json())

const names = []

app.get("/", (request, response) => {
    return response.json({
        color: randomColor()
    })
})

app.post("/names", (request, response) => {
    const { name } = request.body
    names.push(name)
    return response.json(names)
})

app.get("/names", (request, response) => {
    return response.json(names)
})

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}.`)
})