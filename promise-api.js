// Creating Settled Promises
// const p = Promise.resolve({id:1})
// const p = Promise.reject(new Error('reason for error'))
// p.then((resolve)=> console.log(resolve))
//     .catch((err)=> console.log(err.message))
// Running promises in parallel 
const p1 = new Promise((resolve)=> {
    setTimeout(()=>{
        console.log('Async operation 1');
        resolve(1)
        // reject(new Error('Something went wrong'))
    },2000)
})
const p2 = new Promise((resolve)=> {
    setTimeout(()=>{
        console.log('Async operation 2');
        resolve(2)
    },2000)
})
Promise.all([p1,p2])
    .then(result=>console.log(result))
    .catch(err => console.log(err.message))

// Promise.race can be used to find the value of first fulfilled promise