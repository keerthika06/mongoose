// async function foo() {
//     const p1 = new Promise((resolve) => setTimeout(()=>
//     resolve('1'),1000))
//     const p2 = new Promise((_,reject) => setTimeout(()=>
//         reject('2'),500))
//         const result = [await p1,await p2]
// }
// foo().catch(() => {})


// async function foo() {
//     const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
//     const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
//     const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
//   }
//   foo().catch(() => {}); // Attempt to swallow all errors...

function resolveafter3seconds() {
    console.log("Starting slow position")
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("slow")
            console.log("slow promise is done")
        },3000)
    })
}

function resolveafter2seconds() {
    console.log("starting fast promise")
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve("fast")
        },2000)
    })
}

async function sequentialStart() {
    console.log("==Sequential start==")

    //1.execution gets here almost instantly
    const slow = await resolveafter3seconds()
    console.log(slow)//2. this runs 3 seconds later after 1

    const fast = await resolveafter2seconds()
    console.log(fast)//3.this runs after 5 seconds later 1
}

async function concurrentStart() {
    console.log("==Concurrent start with await==")
    const slow = resolveafter3seconds();
    const fast = resolveafter2seconds()
    console.log(await slow)
    console.log(await fast)
    //

}

function concurrentPromise() {
    console.log("==concurrent start with promise.all==")
    return Promise.all([resolveafter3seconds(),resolveafter2seconds()]).then( (messages) =>{
        console.log(messages[0])
        console.log(messages[1])
    })
}

async function parallel() {
    console.log('==parallel with await Promise.all==')
    await Promise.all([(async()=> console.log(await resolveafter3seconds())) 
        (),
        (async () => console.log(await resolveafter2seconds())) (),])
}
sequentialStart();
setTimeout(concurrentStart,4000)

setTimeout(concurrentPromise,7000)

setTimeout(parallel,1000)

