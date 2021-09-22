                            //************************ THA  - 9 - SENDING STATIC FILES *****************************// 

// Run nodemon in other way 
// ./node_modules/nodemon/bin/nodemon.js index.js

const express = require("express");
const app = express();
const path = require("path");

console.log(__dirname);        // its give current dir path

app.use('/',(req,res)=>{
    // send and download static file server to fronted using below methods

    // res.sendFile(path.join(__dirname,"public/Hello.txt"), "test.txt");

    // res.sendFile(path.join(__dirname, "public/test.json"));
    // res.download(path.join(__dirname, "public/test.json"), "hello.json");

    // res.sendFile(path.join(__dirname, "public/parrot.jpg"));
    //res.download(path.join(__dirname, "public/parrot.jpg"), "tota.jpg");

})


app.listen(5000);