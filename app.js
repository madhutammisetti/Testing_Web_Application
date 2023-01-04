function sum(a,b){
    return a + b
}

function palindrome(str){
    if(str == str.split("").reverse().join("")){
        return true
    }else{
        return false
    }
}

//testing async 

const axios  = require("axios");

function getData(){
    return new Promise((reslove,reject)=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res=>{
            reslove(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}


//test apis

const express = require('express')
const app = express();

app.get("/home" , (req,res)=>{
    res.status(200).send("hello")
})

app.post("/login" , (req,res)=>{
    res.status(201).send("Login Success")
})

app.post("/login" , (req,res)=>{
   res.redirect("/home")
})

app.listen("8080",()=>{
    console.log("server running on 8080")
})

const http = require("http");

console.log(http.STATUS_CODES)


module.exports = {sum , palindrome,getData , app}; 