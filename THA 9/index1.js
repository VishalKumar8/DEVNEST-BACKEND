const express = require('express');
const path = require('path');
const app = express();

// jade use karne ke liye ye two line set karni hoti h
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use('/', (req, res)=>{
    
    // dynamic file send index.jade 
    res.render('index', { title: "Express"});
})



// listens to a port
app.listen(5000);