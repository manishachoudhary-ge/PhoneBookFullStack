const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const db = require("./src/Config/db")

const corsOptions = {
    origin: 'https://phonebook-tan.vercel.app', 
    methods: 'GET,POST', 
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));


app.get('/',(req, res)=>{
    res.send("Server Active");
})

app.use(express.json());
// app.use(express.urlencoded())

const userRoutes = require("./src/Routes/userRoutes");
app.use("/user", userRoutes);

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "swagger api docs",
            version: "0.1.0",
            description: 
            " This is the Phonebook Backend apis documented with swagger",
        },
        servers: [
            {
                url: 'http://localhost:5000/',
            },
        ],
    },
    apis: ['./src/Routes/*.js'],
}


const spacs = swaggerJSDoc(options)
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(spacs)
)
const port = 5000;
app.listen(port, ()=>{
    console.log(`server is running on this port ${port}`);
}
)














// http://localhost:5000
