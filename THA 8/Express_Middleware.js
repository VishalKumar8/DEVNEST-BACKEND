const express = require("express");
const app = express();
app.listen(1234);

/*app.get(
  "/",
  (req, res, next) => {
    console.log("aalu1");
    next();
  },
  (req, res, next) => {
    console.log("aalu2");
    next();
  },
  (req, res) => {
    console.log("aalu3");
    res.sendStatus(200);
  }
); */
// Hence, conclusion: we can have more than one middleware function.

// ---------------------CheckAdmin---------------------

/*function checkAdmin(req, res, next) {
  if (req.query.admin === "true") {
    next();
  } else {
    console.log("Bro, admin ka dashboard hai 🤦🏽‍♂️");
  }
}
const AdminDashboard = (req, res) => {
  res.send("Hello admin bro 🙋🏽‍♂️");
};
app.get("/admin-dashboard", checkAdmin, AdminDashboard);
app.get("/admin-dashboard2", checkAdmin, AdminDashboard);
*/

// ---------------------CheckAdmin (app.use())---------------------

function checkAdmin(req, res, next) {
  if (req.query.admin === "true") {
    next();
  } else {
    // console.log(1);
    res.send("Bro, admin ka dashboard hai 🤦🏽‍♂️");
  }
}

const AdminDashboard = (req, res) => {
  //   console.log(2);
  res.send("Hello admin bro 🙋🏽‍♂️");
};

/*
-> Any middleware mentioned in app.use() method will run before every HTTP request method that gets called.
-> Put app.use() above all the http method calls in which you want to include its working.
*/
app.get("/admin-dashboard", AdminDashboard);
app.use(checkAdmin);
app.get("/admin-dashboard2", AdminDashboard);

/* Middleware Usecases:
-> Permission System
-> Login or general Authorisation
*/

/*
-> For perfomance sake, GET calls are cached by default by the browser.
But, this is a security issue if we try getting passwords using a GET call. As the value to the password key query will be transmitted within the query string of the requested URL and might get stored in the browser's or the web server's cache. Hence, a vulnerability.
-> POST calls do not get cached.    
-> To get query data from GET calls we used "req.query".
-> To get query data from POST calls we use "req.body". This won't give us anything but "undefined".
So, before that we need to pass the data received in req.body through a middleware that'll convert it into a JSON format.
The middleware is called a body parser and it does as what the name suggests.
--> express.json()
*/
