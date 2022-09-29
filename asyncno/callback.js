//callback
// function mydispenser(sum)
// {
//     console.log(sum)
// }




// function mycalculator(num1 , num2 , mycallback)
// {
//     const sum = num1 +num2
//     mycallback(sum)
// }
// mycalculator(5,5,mydispenser)

//function
// function greet(name, callback)
// {
//     console.log('hi'+ name)
//     callback()
// }
// function callMe(){
//     console.log("im a callback function")
// }
// greet('keethu',callMe)

//seettimeout
// function greet() {
//     console.log('hello world')
// }

// function sayname(name){
//     console.log('hello                     '+name)
// }
// setTimeout(greet, 2000)
// sayname('keerthika')

//promise
// const count = true
// const  countValue = new Promise(function(resolve,reject){
//     if(count){
//         resolve('there is a count value')
//     }
//     else{
//         reject('there is no count value')
//     }
// })

// console.log(countValue)


//promise chaining\


// let countvaluee = new Promise(function(resolve,reject){
//     resolve('promise resolved')
// })

// countvaluee.then(function sucessvalue(result) {
//     console.log(result)
// })
// .then(function sucessvalue1(){
//     console.log("you can call multiple functions this way")
// })

//catch

// let countvalue = new Promise(function (resolve,reject) {
//     reject('Promis rejected')
// })
// countvalue.then(
//     function sucessvalue(result) {
//         console.log(result)
//     },
//     )
//     .catch(
//         function errorValue(result) {
//             console.log(result)
//         }
//     )
//prototype
// function person(first , last,age,eye)
// {
//     this.first = first
//     this.last = last 
//     this.age = age
//     this.eye = eye
//     this.nationality = "english"
// }
// const father = new person("narayana","jogi",15,"black")
// const mother = new person("seetha","laxmi",40,"brown")
// console.log(father)
// console.log("the nationality of mother is "+mother.nationality)
// person.prototype.name = function()
// {
//     return this.first + this.last
// }
// console.log(mother.name())

//settime
function human(name ,year , dob)
{
    this.name = name
    this.year = year
    this.dob = dob
}
console.log(human.prototype)

human.prototype.calculateAge =function(){
    
}
