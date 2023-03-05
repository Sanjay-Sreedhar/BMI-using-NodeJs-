//index of JS

const express = require("express");
const bodyParser = require("body-parser");

const app=express();


app.use (bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{

        res.sendFile(__dirname+"/index.html");

});

app.post("/",(req,res)=>{

    var h=parseInt(req.body.height);
    var w=parseInt(req.body.weight);
    var bmi=w/(h*h);
    console.log(bmi);

    res.send("<h1 style='text-align:center; color:lime; '>Your BMI is:  </h1>"+bmi);
});

app.listen(8000,()=>{
    console.log("Server running in port 8000");
});