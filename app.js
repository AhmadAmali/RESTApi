const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


//importing routes
const postRoute = require('./routes/home');

app.use('/home', postRoute);

app.use('/', () => {
    console.log("this works innit");
});




// establishing db connection
mongoose.connect
(process.env.DB_CONNECTION, 
{ useNewUrlParser: true },
{ useUnifiedTopology: true }, 
() => console.log('connect to db')
);
app.listen(3000);