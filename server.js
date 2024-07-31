
const express = require ('express');
const bodyParser = require('body-parser');
const userrouter = require('./routes/user_routes');
const blogrouter = require('./routes/Blog_routes');

const {connectDB}= require('./config/db');

const app = express();


app.use(express.json());
app.use(bodyParser.json());

connectDB();

app.use('/user', userrouter);
app.use('/blog', blogrouter);


app.listen(5001,()=>{
    console.log("Server Started");
})

