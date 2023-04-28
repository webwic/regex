//required module
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require('fs');
const dataPath = './account.json'
//app
const app =  express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");
//data read file 
// util functions
const saveAccountData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}
const getAccountData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}
//home port
app.get("/", function(req,res){
    
    
})













app.listen(3000,function(){
    console.log("server spin up in port 3000");
})



// code to add data to json
//add data


// var existAccounts = getAccountData()
// const newAccountId = Math.floor(100000 + Math.random() * 900000)

// existAccounts[newAccountId] = {"ziyad":"dasda"}

// console.log(existAccounts);
// saveAccountData(existAccounts);
// res.send({success: true, msg: 'account added successfully'})


//code to retrive data 
// const accounts = getAccountData()
//   res.send(accounts)



//code to update data


// var existAccounts = getAccountData()
//   fs.readFile(dataPath, 'utf8', (err, data) => {
//     const accountId = 738189;
//     existAccounts[accountId] = {"name":"ziyad","email":"jsfdljlkjsdf","pass":"jasdlj"};
//     saveAccountData(existAccounts);
//     res.send(`accounts with id ${accountId} has been updated`)
//   }, true);



// code to delete data

// fs.readFile(dataPath, 'utf8', (err, data) => {
//     var existAccounts = getAccountData()
//     const userId = 738189;
//     delete existAccounts[userId]; 
//     saveAccountData(existAccounts);
//     res.send(`accounts with id ${userId} has been deleted`)
//   }, true);