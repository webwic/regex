//required module
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
//app
const app =  express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");

//home port
app.get("/", function(req,res){
    res.render("home");
})













app.listen(3000,function(){
    console.log("server spin up in port 3000");
})