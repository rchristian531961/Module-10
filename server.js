const express=require('express');
const app=express();

require('dotenv').config()

app.use(express.json());

//Route
app.get('/',(req,res)=>{
    res.send('Hello World');
})

//Route
app.get('/first',(req,res)=>{
    res.send("My First Route Accessed")
})

app.post('/',(req,res)=>{
    let data=req.body;
    res.send('Data Recieved'+JSON.stringify(data))
})

//Port
const PORT=process.env.PORT || 8080;

//Active server
app.listen(PORT,()=>{
    console.log(`Nde Js app listening from http://localhost:${PORT}`)
})