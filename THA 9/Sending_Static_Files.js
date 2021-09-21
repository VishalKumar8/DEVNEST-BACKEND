
const express = require("express");
const app = express();
const path = require("path");

console.log(__dirname);


// used to check content-type  in header 
app.use("/",(req,res)=>{ //render this file
	res.sendFile(path.join(__dirname,"public/Hello.txt","test.txt");
})


//make client download
app.use("/",(req,res)=>{       
	res.download(path.join(__dirname,"public/hello.json","test.json");
})

>npm install -s jade //html templating engine or use ejs

// sending dynamic files
app.set("views",path.join(_dirname,"views"));
app.set("view engine","jade");
//create folder /views and ==> index.jade
extends layout //importing layout
block content
	h1 = title
	p welcome #{title}


//inside folder another file ==>layout.jade

doctype html
html
	head
		title = title
		link(rel="stylesheet",href="/stytlesheet/style.css")
	body
		block content

block content
	h1 = title
	p welcome #{title}  //pass key and value to template

app.use("/",(req,res)=>{
	res.render("index",{title:"Express"})
})


//setting cookies with middleware


app.use("/",(req,res)=>{
	res
	.status(201)
	.cookie("toke","test",{ //key-value
	expire: new Date(Date.now() + 8*3600*1000) //milli secs
	
	})
	.cookie("greet","hello") //key-value
	.redirect(301,"/admin")
})

//code 4
>mkdir /new_project 
>npx express-generator// for all directories for the app

>npm install && DEBUG=new_project:* npm start


// listens to a port
app.listen(2000);
