const express=require('express');
const path=require('path');
const io=require('socket.io')
const app=express();
app.get('/',(req,res)=>{
    var options={
        root:path.join(__dirname)
    }
    var fileName='index.html'
    res.sendFile(fileName,options);
}) 
app.listen(5000,()=>console.log("Server is connected at 5000"))

