const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

//express.json gets data into json format
app.use(express.json());
//port
const PORT = process.env.PORT || 5500;
//use cors
app.use(cors());
//router
const TodoItemRoute = require('./routes/todoItems');

//connect mongodb
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Database connected'))
    .catch(err => console.log("there is an error"));

app.use('/', TodoItemRoute);

//connect to port
app.listen(PORT, () => console.log("server connected"));