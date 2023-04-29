//required module
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs");
const dataPath = "./account.json";
const logPath = "./log.json";
//app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
//data read file
// util functions
const saveAccountData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync(dataPath, stringifyData);
};
const getAccountData = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};
//home port
app.get("/", function (req, res) {
  res.render("home");
});

//login port
app.get("/login", function (req, res) {
  res.render("login", { error: "" });
});
//login post
app.post("/login", function (req, res) {
  var pass = req.body.pass;
  const accounts = getAccountData();
  var id = accounts[req.body.userid];
  if (id != undefined) {
    if (pass === id.pass) {

      res.render("profile",{data:id,id:req.body.userid});
    } else {
      res.render("login", { error: "userid or password is incorrect" });
    }
  } else {
    res.render("login", { error: "userid or password is incorrect" });
  }
});
//register route
app.get("/register", function (req, res) {
  res.render("create");
});
//register post 
app.post("/register",function(req,res){
    console.log(req.body);
    var existAccounts = getAccountData()
    const newAccountId = Math.floor(100000 + Math.random() * 900000)
    existAccounts[newAccountId] = 
    {
        "name":req.body.name,
        "email":req.body.email,
        "pass":req.body.pass,
        "num":req.body.num,
        "address":req.body.ad,
        "age":req.body.age,
        "gender":req.body.gen,
        "weight":req.body.weight,
        "modified": "",
        "log": {
            "modified-field": "",
            "date": "",
            "doctorname": ""
        }
    }
    saveAccountData(existAccounts);
    var data = existAccounts[newAccountId];
    console.log(data)
    res.render("profile",{data:data,id:newAccountId});
})
//insurance route
app.get("/insurance", function(req,res){
    res.render("insurance");
})
app.listen(3000, function () {
  console.log("server spin up in port 3000");
});
