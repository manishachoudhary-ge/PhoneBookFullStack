const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const db = require("./src/Config/db")

const corsOptions = {
    origin: 'http://localhost:5000', 
    methods: 'GET,POST', 
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));


app.get('/',(req, res)=>{
    res.send("Server Active");
})

app.use(express.json());

const userRoutes = require("./src/Routes/userRoutes");
app.use("/user", userRoutes);
    
const port = 5000;
app.listen(port, ()=>{
    console.log(`server is running on this port ${port}`);
}
)














// http://localhost:5000