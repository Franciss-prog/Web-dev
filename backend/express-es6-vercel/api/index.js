import express from "express"

// app
const app = express();

// port
const PORT = process.env.PORT || 5000;

// test the code
app.get("/",(req, res) => {
    res.send("test web server")
})

// listen
app.listen(PORT, () => console.log("Server is listening to port: " + PORT))


export default app