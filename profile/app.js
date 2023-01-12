const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { text } = require("body-parser");

const aboutText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


const app=express();
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));










app.get("/", function(req,res){
    res.render('home');

});

app.get("/about",function(req,res){
   res.render('about',{AboutText:aboutText});
});

app.get("/contact",function(req,res){
    res.render('contact');
 });












app.listen(4500 , function(req,res){
    console.log("Server started on port 4500");
});
