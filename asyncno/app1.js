const express = require('express')
const data1 = require('./data1')

//initialize app
const app1 = express()

// assign route
app1.use('/',(req,res,next)=> {
    const filters = req.query
    const filteredUsers = data1 .filter(user => {
        let isvalid = true
        for (key in filters) {
            console.log(key,user[key],filters[key])
            isvalid = isvalid && user[key] == filters[key]

        }
        return isvalid
    })
    res.send(filteredUsers)
})
app1.listen(5000, () => {
    console.log('serverrrrrrrrrrrrrrrrrrrr')
})

