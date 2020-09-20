const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//middlewars
app.use(cors());
app.use(bodyParser.json());


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