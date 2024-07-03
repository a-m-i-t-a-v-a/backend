const express=require('express')
require('dotenv').config()
const app=express()

app.get('/',(req,res)=>{
    res.send('<h1>Backend development</h1>')
})

app.get('/twitter',(req,res)=>{
    res.send(`<h1>@pilluthegreat</h1>`)
})

app.get('/login',(req,res)=>{
    res.send('<h2>Please login</h2>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h3>Pillu coding academy</h3>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Application running on port ${process.env.PORT}`)
})