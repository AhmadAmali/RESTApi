const express = require('express');
const app = express();

app.use('/', () => {
    console.log("this works innit");
});


app.get('/',(req,res) => {
    res.send('We are on home');

}); 
app.listen(3000);