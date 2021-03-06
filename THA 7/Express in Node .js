///////////------------------------------------------------------- THA Day 7 Installing Community Packages From npm ------------------------------------------------//////////
______________________________________________________________________________________________________________________________________________________________________________

=>First create .json for dependencies for the app
=>So we first create app and list dependencies for nodejs app

>npm init 

=>for versioning : 1.0.0 (major.minor.bug fixes)

Now,
>npm install --save express

>for seeing live changes while exec like live server in react, in nodejs  we have nodemon.

>npm install save-dev nodemon (for dev env not prod env)

we are doing server programming with data send with http methods. browser sends requests. We need to process it and give responses to client .

keep in mind : Security , Performance, Edge cases (backend me me bottom to top approch hoti h)

////------------------ code index.js --------------------------////

const express = require('express');         //express ek function defination (export = e;) ko pass karta h
const app = express();			    // usko hame const app = express();  se call karna padta h


we now // CRUD ->  Create => POST | Read => GET |  Update => PUT |  Delete => DELETE 

app.get('/',(req, res) => {
    res.send("Hello");
});
          OR 

const slash = (req,res)=> {
res.send("hello");
}


************* For GET Methods *************
app.get('/',slash);
app.get('/url',slash);
app.listen(5000);

*************other methods***************
For sending requests use POSTMAN software or Browser

app.post('/',slash);
app.put('/',slash);
app.delete('/',slash);

To run:
go to chrome :localhost:5000/
			OR
Postman : localhost:5000/

****************sending other respsone things*********

app.get('/',(req,res)=>{
	res.send({a:"name"}); //sending objs 
	res.send(a = []); //sending array

});

****************HTTP response status codes***********
200  OK (The request has succeeded)
201  Update(created)
400  Client Error (Bad Request)
500  Server Error (Internal Server Error)

**************** sending json************
app.get('/',(req,res)=>{
	res.sendStatus(200);    //sending status 
	res.json({a:"name"});   //res.send bahut comman hota h ilsiye ham speciality ke liye Object ke liye res.JSON use karte h

});

***********pipelining means (res object ke sath two fun. call karna)*************
app.get('/',(req,res)=>{
	//code for db update
	res.status(200).send("Database not connecting");

});

***********http request variables*************

app.get('/products',(req,res)=>{
	
	res.send(req.query.limit);
});

***********http req variables v2*************

app.get('/ab?cd',(req,res)=>{    //for abcd or acd  (there are b are optional)
	
	res.send('abcd');
});

***********http req variables v3*************

app.get('/ab+cd',(req,res)=>{    // RegEx = for many bbbbbbb
	
	res.send('abcd');
});

***********http req variables v4*************

app.get('/ab*cd',(req,res)=>{ //
	
	res.send('abcd');
});

***********http req variables v4*************

app.get('/ab(cd)?e',(req,res)=>{ // RegEx = cd are optional
	
	res.send('abcd');
});
***********http req variables v4*************

app.get('/a/',(req,res)=>{ // RegEx = start with a 
	
	res.send('abcd');
});

***********http req variables v5*************

app.get('/.*fly$/',(req,res)=>{ //regex butterfly
	
	res.send('abcd');
});

***********http req variables v4*************

app.get('/user/:usrid/books/:bkid',(req,res)=>{ 
	console.log(req.query); //query var
	res.send(req.params);   //dynamic var
});

*****************POSTMAN examples************
localhost:5000/   GET
localhost:5000/	 POST
localhost:5000/  PUT
localhost:5000/  DELETE

//Sending varibles to server with get
Postman url => localhost:5000/products?limit=50&qry=something

//changing varibles but same response
Postman url => localhost:5000/ab?cd

//variables multiple times in req
Postman url => localhost:5000/abbbbbbbbbbbbbcd

//variables starting with a req > /a/
Postman url => localhost:5000/abbbcd
