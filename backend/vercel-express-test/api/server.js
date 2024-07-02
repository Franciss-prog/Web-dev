import express from "express"
import cors from "cors"


const PORT = 300;

// app init
const app = express();

// middlewares
app.use(cors())

// test the server
app.get("/", (req,res) => {
    res.send("<span>Hello World</span>")
})

// development
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
