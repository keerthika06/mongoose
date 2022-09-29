// npm install mongoose 
// npm install express 
// npm install bcryptjs 
// npm install body-parser


const bodyParser = require('body-parser')
var express = require('express')
var Mongoose  = require('mongoose')
var Bcrypt = require('bcryptjs')
//var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var User = require('./user')

const app = express()

const db = `mongodb://localhost:27017/test/users `

Mongoose.connect(db,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true

}).then(() => console.log('Mongodb connected'))

app.get("/send", async(req,res,next) => {
    try{
        let { page,size, sort} = req.query
        if(!page){
            page = 1
        }
        if(!size) {
            size = 10
        }
        const limit = parseInt(size)


        const user = await User.find().sort( {votes:1,_id :-1}).limit(limit)
        res.send({page,
        size,
    Info: user,})
    }
    catch(error){
        res.sendStatus(500)
    }
})


app.post('/send',jsonParser,(req,res) => {
    req.body.password = Bcrypt.hashSync(req.body.password,10)

    var newUser = new User({
        username : req.body.username,
        password: req.body.password,

    })
    newUser.
    save()
    .then(result => {
        console.log(result)
    })

})
app.listen(3000,function(){
    console.log("express started on port 3000")
})


