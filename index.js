const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/person')
const User = require("./model")

//userCreation()
//updateAddress()
//deleteaddress()
//updatee()

// async function userCreation() {
//   try {
//     const user = await User.insertMany([{
//       name : "keethu",
//       dob : "15-03-2000",
//       empid : 1,
//       email : "keerthika@robosoftin.com",
//       phonenumber : 8922222222,
//       address :[{
//         country : "India",
//         state : "Karnataka",
//         city : "Mangalore",
//         street : "kadri",
//         pincode : 575002
//       }]
//     },
//     {
//       name : "sharath",
//       dob : "06-02-2000",
//       empid : 2,
//       email : "sharath@gmail.com",
//       phonenumber : 9916111111,
//       address : [{
//         country : " India",
//         state : "Karnataka",
//         city : "mangalore",
//         street : "dujalaguri",
//         pincode : 571717
//       }]
//     },
//     {
//       name : "Vanshu",
//       dob : "19-08-2014",
//       empid : 3,
//       email : "vanshu@gmail.com",
//       phonenumber : 8861444444,
//       address : [{
//         country : "India",
//         state : "Karnataka",
//         city : "Hubli",
//         street : "Gokul road",
//         pincode : 580852,
//       }]
//     },
//     {
//       name : "Golu",
//       dob : "01-10-2019",
//       empid : 4,
//       email : "golu@gmsil.com",
//       phonenumber: 855423698,
//       address : [{
//         country : "India ",
//         state: " Karnataka",
//         city : "bangalore",
//         street : " mgroad",
//         pincode: 8752693147

//       }]
//     }
//   ])
//   console.log("user inserted ",user)
//   }
//   catch(error){
//     console.log("uffff ,Errorrrrrrrrrrr!!!!!",error)
//   }
// }
// async function updateAddress(){
//   try{
//     const findUser = await User.find({
//       name:"keethu"

//     }).update({
//       address :{
//         city : "bangalore"
//       }
//     })
//     console.log("updated user",findUser)
//   }
//   catch(error){
//     console.log(error.message)
//   }
// }

// async function deleteaddress(){
//   try {
//     const deleteUser = await User.findOneAndDelete({
//       name : "Golu"
//     })
//     console.log("deleted user is = ",deleteUser)
//   }
//   catch(error){
//     console.log(error.message)
//   }
// }
// async function  updatee() {
//   try {
//     const updateUser = await User.updateOne({
//   "_id": "631b076018b13f0449f65dea"
// }, {
//   $push: {
//     "address":[ {
      
//       "country": "CountryA",
//       "state": "A",
//       "city" : "Acity",
//       "street" : "astreet",
//       "pincode":111111
//     },
//     {
//       "country": "CountryB",
//       "state": "b",
//       "city" : "Acity",
//       "street" : "astreet",
//       "pincode":111111
//     }]
//   }
// })
// console.log(" updated = ",updateUser)
// }
  
//   catch(error){
//     console.log()
//   }

//   }


//indexingggggggg
// userCreation()
// async function userCreation() {
//     try {
//       const user = await User.insertOne([{
//         name : "keethuuuuuu",
//         dob : "01-03-2000",
//         empid : 7,
//         email : "keethuuu@robosoftin.com",
//         phonenumber : 8922222223,
//         address :[{
//           country : "India",
//           state : "Karnataka",
//           city : "Mangalore",
//           street : "kadriiii",
//           pincode : 5750022
//         }],
//         tags: { name: [String], index: true } 
//       },
//     ])
//       console.log("user inserted ",user)
//       }
//       catch(error){
//         console.log("uffff ,Errorrrrrrrrrrr!!!!!",error)
//       }
//     }
//     User.index({ name: 1, dob: -1 });

//    User.index({ _id: 1 }, { sparse: true });
// const Animal = mongoose.model('Animal', User);

// User.on('index', error => {
//   // "_id index cannot be sparse"
//   console.log(error.message);
// });

// UpdateAddress('631b090dd2834a68f2852c61')
// async function UpdateAddress(){
//   let a = await User.updateOne({
//          "address._id": "631b090dd2834a68f2852c61"
//      },{$set:{"address.$.city":"Manipal"}})
  
//      console.log(a)
//     }

     db.collection('Users').updateOne({
            "address._id": "631b090dd2834a68f2852c61"},{$set:{"address.$.city":"Manipal"}})



    















// var MongoClient = require('mongodb').MongoClient
// var url = "mongodb://localhost:27017/admin/hi"
// MongoClient.connect(url,function(err,db){
//     if(err) throw err

  //   var dbo = db.db("admin");
  //   var myobj = { name: "Company Inc", address: "Highway 37" };
  //   dbo.collection("hi").insertOne(myobj, function(err, res) {
  //     if (err) throw err;
  //     console.log("1 document inserted");
  //     db.close();
  //   });
  // });

// const { default: mongoose } = require("mongoose");
// const usermodel = require('./model')

// mongoose.connect("mongodb://localhost:27017/admin").then(()=>{
//     console.log("connected to database")
// }).catch(()=>{
//     console.log("unable to connect to database")
// })


// const hello = async() =>
// {
//     await usermodel.insert
// }