const express = require('express');
const path = require('path');
const app = express();

app.use('/', (req, res)=>{
    res
    .status(201)
    .cookie("token", "test",{     // If a user is logging and I want to set his cookie from the backend, we will use res.cookie 
        expire: new Date(Date.now() + 8 * 3600000)
    })
    .cookie("hello", "hello")
    .redirect(301, "/admin")
})


// listens to a port
app.listen(5000);