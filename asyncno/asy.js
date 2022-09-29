// function resolveafter2second() {
//     return new Promise(resolve => {
//         setTimeout(()=> {
//             resolve('resolved')
//         },2000)
//     })
// }


function resolveafter2second(){
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve("resolved")
        },2000)
    })
}
// async function asyncall()
// {
//    console.log('calling') 
//    const result = await resolveafter2second();
//    console.log(result)
// }



async function asynCall(){
    console.log('calling')
    const result = await resolveafter2second();
    console.log(result)
}
asynCall();