
// do something after a thing that takes a long time to completes
let p = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a == 2) {
        resolve('Sucess')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in the then' + message)
}).catch((message) => {
    console.log('This is in the catch' + message)
})