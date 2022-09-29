const express = require('express')
const data = require('./data')


//initialized app
const app = express()

//assign route 
app.use('/',(req,res,next) => {
    res.send('node.js search and filter')
    
})
app.listen(5000, () =>{
    console.log('server started')
   
})

