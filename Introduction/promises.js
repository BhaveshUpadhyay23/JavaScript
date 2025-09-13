// kind of a placeholder for the result of an asynchronous operation

// Promise --> Pending --> (Settled --> Resolved / Rejected)

const myPromiseFunction = new Promise((resolve, reject) => {
    setTimeout(()=>{
            resolve("Hello, World");
        },2000);
    });

myPromiseFunction
.then((res)=>{
    console.log(res);
})
.catch((e)=>{
    console.log(e);
})
.finally(()=>{
    console.log("Bye")
})


let luckyDraw = () =>{ 
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        const isSuccess = Math.random() > 0.5;

        if(isSuccess){
            resolve("You Won");
        }else{
            reject("Better Luck Next Time");
        }
    },2000)
})}

luckyDraw()
.then((res)=>{
    console.log("You Won");
})
.catch((rej)=>{
    console.log("Better Luck Next Time");
})


// Methods

Promise.all([pr1, pr2])
// wait for All promise to complete successfully (resolve)

Promise.allSettled([pr1, pr2])
// wait for All promse to complete

Promise.race([pr1, pr2])
// interested in the result of the first promise that completes

