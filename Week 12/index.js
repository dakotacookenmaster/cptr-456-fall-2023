import express from "express"
import randomColor from "randomcolor"
import cors from "cors"
const app = express()
const port = 3000

app.use(cors())

app.get("/", (request, response) => {
    return response.json({
        color: randomColor()
    })
})

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}.`)
})