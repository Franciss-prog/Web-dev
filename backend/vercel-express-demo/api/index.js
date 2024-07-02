import express from "express"


const PORT = 5000;

const app = express();


app.get("/", (req, res) => {
    res.send("adfasdfasdf")
})


app.listen(PORT,  () => console.log("Server is listening to port", PORT))