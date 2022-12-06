const express = require('express');

const connectDB = require('./db/dbConfig');
const port = process.env.PORT || 8000;

//dbConnection
connectDB();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const app = express();

app.listen(port, ()=> {
    console.log(`Server is listening on port: ${port}`);
})