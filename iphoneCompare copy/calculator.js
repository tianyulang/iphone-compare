//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// let ejs = require('ejs')
// let fs = require('fs')
// let objectSentFromServer = 99
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  // var x = document.getElementById("t1");
  // console.log(x);
  res.render(__dirname + "/index.html");
});
app.post("/",function(req,res){
  // var myChart = echarts.init(document.getElementById('main'));
  // var result = Number(req.body.name1) + Number(req.body.name2);
  var input1 = req.body.name1;
  var input1 = input1.toString();
  var input2 = req.body.name2;
  var input2 = input2.toString();
  res.render(__dirname + '/indexVisual.html',{name1:input1,name2:input2});
  // fs.readFile(__dirname + '/indexVisual.html', (err, html) => {
  // res.send(ejs.render(html, JSON.stringify(result)))
// })
  // c = 100;
  // console.log(result);
  //   res.send(result.toString());
  // res.sendFile(__dirname + "/indexVisual.html");
});
app.listen(3000,function(){
  console.log("server");
});
