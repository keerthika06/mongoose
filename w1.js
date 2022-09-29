// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/person1')



// const personSchema1 = new mongoose.Schema({
//   name : {
//     first : String,
//     last : String
//   }
// })
// const Person1 = mongoose.model('Person1',personSchema1)

// //create document
// const axl = new Person1(
//   {
//   name : {first: 'Axl', last : 'Rose'}
// })
// console.log(axl.name.first + "   "+axl.name.last)




const personSchema1 = new mongoose.Schema({
  name : {
    first : String,
    last : String
}
},
{
  virtuals : {
    fullname: {
      get() {
        return this.name.first + ' ' + this.name.last
      },
      set(v) {
        thhis.name.first = v.substr(0,v.indexOf(' '))
        this.name.last = v.substr(v.indexOf(' '+1))
      }
    }
  }
})
// personSchema1.virtual('fullname').get(function(){
//   return this.name.first +
//})
const Person1 = mongoose.model('Person1',personSchema1)
const axl = new Person1(
   {
     name : {first: 'Axl', last : 'Rose'}
   })
personSchema1.virtual('fullname').get(function(){
  return this.name.first + ' ' + this.name.last
}).set(function(v) {
  this.name.first = v.substr(0,v.indexOf(' '))
  this.name.last = v.substr(v.indexOf(' ') + 1)
})
console.log(axl.fullname)
// personSchema1.findOneAndReplace(axl, { name: 'jason bourne' })

// console.log(axl.function)



