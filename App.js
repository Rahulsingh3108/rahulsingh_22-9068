const express = require('express');
const {join}=require('path');
const path=require('path');

const app=express();
app.get("/",function(req,resp){
resp.sendFile(path.join(__dirname,"/public/rahul.html/Schedule.html"));
})

app.listen(3000);
console.log("server listening on 3000");

