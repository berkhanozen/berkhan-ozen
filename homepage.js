const http = require('http')
const request = require('request')

const server = http.createServer(function (req, res) {
    

    const express=require('express')
    const path=require('path')
    
    console.log(__dirname)
    console.log(__filename)
    
    
    const app=express()
    const publicDirectoryPath=path.join(__dirname,'../public')
    
    app.use(express.static(publicDirectoryPath))
    console.log(publicDirectoryPath)

    app.get('', (req, res) => {
        
    })
    
    app.get('/test_text',(req,res)=>{
    res.send('18360859020')
    })
    
    app.get('/test_html',(req,res)=>{
    res.send('<h1><b>Test HTML<b><h1>')
    })
    
     app.get('/test_json',(req,res)=>{
        res.send
    })
         
    
    app.get('/test_geocode',(req,res)=>{
        res.send
    })

    app.get('/test_weather',(req,res)=>{
        res.send({
            forecast:"It is snowing",
            location:"Bursa"
        })
    })
    
    app.listen(3000,()=>{
        console.log('Server is up on port 3000')
    })
})

